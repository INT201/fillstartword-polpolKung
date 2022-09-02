const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  return startWord + word
}
console.log(fillStartWord('123','dsd'))
module.exports = fillStartWord
