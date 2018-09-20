import Config from './Config'

// private

function getCaller() {
  const stack = getStack()

  // Remove superfluous function calls on stack
  stack.shift() // getCaller --> getStack
  stack.shift() // omfg --> getCaller

  // Return caller's caller
  return stack[1].receiver
}

function getStack() {
  // Save original Error.prepareStackTrace
  const origPrepareStackTrace = Error.prepareStackTrace

  // Override with function that just returns `stack`
  Error.prepareStackTrace = function (_, stack) {
    return stack
  }

  // Create a new `Error`, which automatically gets `stack`
  const err = new Error()

  // Evaluate `err.stack`, which calls our new `Error.prepareStackTrace`
  const { stack } = err

  // Restore original `Error.prepareStackTrace`
  Error.prepareStackTrace = origPrepareStackTrace

  // Remove superfluous function call on stack
  stack.shift() // getStack --> Error
  console.dir(stack.map(s => s))

  return stack
}

console.log(process.cwd(), process.env.INIT_CWD)

export default Config
