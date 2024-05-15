import { QueryResolvers } from '@/__generated__/resolvers-types.js'
import * as repo from '@/repository/mod.js'
import { extractAuth } from '@/utils/extract-auth.js'

export const me: QueryResolvers['me'] = async (_, __, ctx) => {
  const auth = extractAuth(ctx)
  if (!auth) {
    return {
      error: 'Unauthorized',
    }
  }

  const user = await repo.user.findById(auth.id)
  if (!user) {
    return {
      error: 'User Not Found',
    }
  }

  return {
    user,
  }
}
