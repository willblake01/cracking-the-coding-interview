import { memoize } from '@code/utils'

interface Result {
  [key: string]: number | boolean
}

export const isUnique = memoize((str: string) => {
  const result: Result = {
    hasUniqueChars: true
  }

  for (let i = 0; i < str.length; i++) {

    // Return false if the character is a space
    if (str[i] === ' ') {
      result.hasUniqueChars = false
    }

    if (result[str[i]] === undefined) {
      result[str[i]] = 1
    } else {
      result[str[i]] = (result[str[i]] as number) ++
      result.hasUniqueChars = false
    }
  }

  return result.hasUniqueChars
})
