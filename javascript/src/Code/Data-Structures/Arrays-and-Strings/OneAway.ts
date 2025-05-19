import { memoize } from '@code/utils'

const insertChar = (str1: string, str2: string) => {
  for (let i = 0; i < str1.length; i++) {
    if (str2.slice(0, i) + str1[i] + str2.slice(i) === str1) {
      return true
    }
  }

  return false
}

const removeChar = (str1: string, str2: string) => {
  for (let i = 0; i < str1.length; i++) {
    if (str1.slice(0, i) === str2) {
      return true
    }
  }

  return false
}

const replaceChar = (str1: string, str2: string) => {
  for (let i = 0; i < str1.length; i++) {
    if (str2.replace(str2[i], str1[i]) === str1) {
      return true
    }
  }

  return false
}

export const oneAway = memoize((str1: string, str2: string) => {
  let isOneEditAway = false

  if (insertChar(str1, str2) || removeChar(str1, str2) || replaceChar(str1, str2)) {
    isOneEditAway = true
  }

  return isOneEditAway
})
