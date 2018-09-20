export const toCapsCase = string => string.replace(/([A-Z])/g, '_$1').replace(/^_/, '').toUpperCase()

// Basically return false, true with env variables are "false", "true"
export const getSafeValue = (keyName, obj, defaults = process.env) => {
  const getTruthy = (val) => {
    if (/^(?:y|yes|true|1)$/i.test(val)) {
      return true
    } else if (/^(?:n|no|false|0)$/i.test(val)) {
      return false
    }
    return false
  }
  const newValue = defaults[toCapsCase(keyName)] || obj[keyName]
  return (typeof obj[keyName] === 'boolean') ?
    getTruthy(newValue) : newValue
}

// const newConfig = {}
// Object
//   .keys(variables).forEach((keyName) => { newConfig[keyName] = getSafeValue(keyName) })

// export const config = newConfig

