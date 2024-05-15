import { MutationResolvers } from '@/__generated__/resolvers-types.js'
import * as repo from '@/repository/mod.js'
import { extractAuth } from '@/utils/extract-auth.js'

export const questionCreate: MutationResolvers['questionCreate'] = async (
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

  const question = await repo.question.create({
    ...args.input,
    userId: auth.id,
  })

  return {
    question,
  }
}

export const questionUpdate: MutationResolvers['questionUpdate'] = async (
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

  let question = await repo.question.findById(args.id)
  if (!question) {
    return {
      error: 'question not found',
    }
  }

  if (question.userId !== auth.id) {
    return {
      error: 'unauthorized',
    }
  }

  return {
    question,
  }
}

export const questionDelete: MutationResolvers['questionDelete'] = async (
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

  let question = await repo.question.findById(args.id)
  if (!question) {
    return {
      error: 'question not found',
    }
  }

  if (question.userId !== auth.id) {
    return {
      error: 'unauthorized',
    }
  }

  question = await repo.question.remove(args.id)

  return {
    question,
  }
}
