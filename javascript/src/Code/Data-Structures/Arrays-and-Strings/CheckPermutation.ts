const parseString = (str: string) => {
  const result: any = {}

  for (let i = 0; i < str.length; i++) {
    if (result[str[i]] === undefined) {
      result[str[i]] = 1
    } else {
      result[str[i]]++
    }
  }
  
  return result
}

const checkPermutation = (str1: string, str2: string) => {
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
}

export default checkPermutation
