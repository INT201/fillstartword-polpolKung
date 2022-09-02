function fillStartWord(startWord, word) {
  if ((startWord !== undefined && startWord !== null) && 
    (word !== undefined && word !== null)) {
    if (startWord === word.substring(0,startWord.length))
    return word
  else return startWord + word
  }
  return undefined
}
console.log(fillStartWord('fist', null ))
console.log(fillStartWord('fist', undefined ))
console.log(fillStartWord(undefined, 'null' ))
console.log(fillStartWord('fist', 'null' ))