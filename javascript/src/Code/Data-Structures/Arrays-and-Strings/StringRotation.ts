import { memoize } from '@code/utils'

export const stringRotation = memoize((str1: string, str2: string) => {
  if (str1.length !== str2.length) {
    return false
  }

  const str1str1 = str1 + str1
  return str1str1.includes(str2)
})
