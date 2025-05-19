import { memoize } from '@code/utils/memoize'
import { parseString } from '@code/utils/parseString'

const checkPermutation = memoize((str1: string, str2: string) => {
  const result = {
    isPermutation: true
  }

  const res1 = parseString(str1)
  const res2 = parseString(str2)
  
  for (let key in res1) {
    if (res1[key] !== res2[key]) {
      result.isPermutation = false
    }
  }
  
  return result.isPermutation
})

export default checkPermutation
