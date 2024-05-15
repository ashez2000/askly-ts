import db from '@/db/mod.js'
import { User } from '@prisma/client'
import Dataloader from 'dataloader'

const batchUsers = async (ids: string[]): Promise<User[]> => {
  const users = await db.user.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  })

  const userMap: { [key: string]: User } = {}

  users.forEach((user) => {
    userMap[user.id] = user
  })

  return ids.map((id) => userMap[id])
}

// @ts-ignore
const userLoader = new Dataloader<string, User>(batchUsers)

export default userLoader
