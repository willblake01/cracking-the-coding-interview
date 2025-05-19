import { memoize } from '@code/utils'

export const URLify = memoize((str: string, len: number) => {
  return str.slice(0, len).split(' ').join('%20')
})
