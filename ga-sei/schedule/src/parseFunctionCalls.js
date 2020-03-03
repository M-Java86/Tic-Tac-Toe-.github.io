const { words, reader, compose, throwErr, mapWith, withConst } = require('./util.js')

const callFunction = (functionDict) => (name) => (args) => 
  withConst(functionDict[name])(f =>
    f == undefined || f == null ?  throwErr(`${name} ${args} is not a valid function`)
    : f(...args)
  )


const getFunctionName = (xs) => xs[0]

const getFunctionArgs = (xs) => xs.slice(1)

const parseFunctionCall = (dict) =>
  compose(
    words,
    reader(
      getFunctionArgs,
      compose(getFunctionName, callFunction(dict))
    )
  )

const parseFunctionCalls = (dict) => mapWith(parseFunctionCall(dict))


module.exports = {
  parseFunctionCalls
}
