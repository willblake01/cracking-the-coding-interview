import { memoize } from '@code/utils'

export const stringCompression = memoize((str: string) => {
  let count = 1
  const returnValue = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++
    } else {
      returnValue.push(str[i] + count)
      count = 1
    }
  }

  return returnValue.join('')
})
