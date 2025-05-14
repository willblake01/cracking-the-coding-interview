const URLify = (str: string, len: number) => {
  return str.slice(0, len).split(' ').join('%20')
}

export default URLify
