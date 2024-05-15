import { MutationResolvers } from '@/__generated__/resolvers-types.js'
import * as repo from '@/repository/mod.js'
import { extractAuth } from '@/utils/extract-auth.js'

export const answerCreate: MutationResolvers['answerCreate'] = async (
  _,
  args,
  ctx
) => {
  const auth = extractAuth(ctx)
  if (!auth) {
    return {
      error: 'Unauthoized',
    }
  }

  const answer = await repo.answer.create({
    ...args.input,
    userId: auth.id,
  })

  return {
    answer,
  }
}

export const answerUpdate: MutationResolvers['answerUpdate'] = async (
  _,
  args,
  ctx
) => {
  const auth = extractAuth(ctx)
  if (!auth) {
    return {
      error: 'Unauthoized',
    }
  }

  let answer = await repo.answer.findById(args.id)
  if (!answer) {
    return {
      error: 'question not found',
    }
  }

  if (answer.userId !== auth.id) {
    return {
      error: 'unauthorized',
    }
  }

  return {
    answer,
  }
}

export const answerDelete: MutationResolvers['answerDelete'] = async (
  _,
  args,
  ctx
) => {
  const auth = extractAuth(ctx)
  if (!auth) {
    return {
      error: 'Unauthoized',
    }
  }

  let answer = await repo.answer.findById(args.id)
  if (!answer) {
    return {
      error: 'question not found',
    }
  }

  if (answer.userId !== auth.id) {
    return {
      error: 'unauthorized',
    }
  }

  answer = await repo.question.remove(args.id)

  return {
    answer,
  }
}
