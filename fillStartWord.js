const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if ((startWord !== undefined && startWord !== null) && 
    (word !== undefined && word !== null)) {
    if (startWord === word.substring(0,startWord.length))
    return word
  else return startWord + word
  }
  return undefined
}
module.exports = fillStartWord
