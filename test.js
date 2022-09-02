function fillStartWord(startWord, word) {
  if (startWord && word !== undefined & null) {
    if (startWord === word.substring(0,startWord.length))
    return word
  else return startWord + word
  }
  return undefined
}
console.log(fillStartWord('fist',null))