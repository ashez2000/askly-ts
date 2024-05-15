import { MutationResolvers } from '@/__generated__/resolvers-types.js'
import * as repo from '@/repository/mod.js'
import { signToken } from '@/utils/jwt.js'

export const signup: MutationResolvers['signup'] = async (_, args) => {
  // TODO: validation
  try {
    const user = await repo.user.create(args.input)
    const token = signToken({ id: user.id })
    return {
      error: null,
      token,
    }
  } catch (err: any) {
    return {
      error: err.message,
      token: null,
    }
  }
}

export const signin: MutationResolvers['signin'] = async (_, args) => {
  // TODO: validation
  try {
    const user = await repo.user.findByCredentials(args.input)
    if (!user) {
      return {
        error: 'Invalid Credentials',
        token: null,
      }
    }

    const token = signToken({ id: user.id })
    return {
      error: null,
      token,
    }
  } catch (err: any) {
    return {
      error: err.message,
      token: null,
    }
  }
}
