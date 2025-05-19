export const parseString = (str: string) => {
  const result: { [key: string]: number } = {}

  for (let i = 0; i < str.length; i++) {
    if (result[str[i]] === undefined) {
      result[str[i]] = 1
    } else {
      result[str[i]]++
    }
  }
  
  return result
}
