import db from '@/db/mod.js'
import { Question } from '@prisma/client'
import Dataloader from 'dataloader'

const batchQuestions = async (ids: string[]): Promise<Question[]> => {
  const questions = await db.question.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  })

  const questionMap: { [key: string]: Question } = {}

  questions.forEach((q) => {
    questionMap[q.id] = q
  })

  return ids.map((id) => questionMap[id])
}

// @ts-ignore
const questionLoader = new Dataloader<string, Question>(batchQuestions)

export default questionLoader
