import camelCase from 'lodash/camelCase'

export const toCapsCase = string => string.replace(/([A-Z])/g, '_$1').replace(/^_/, '').toUpperCase()

export const getTruthy = (val) => {
  if (/^(?:y|yes|true|1)$/i.test(val)) {
    return true
  }

  if (/^(?:n|no|false|0)$/i.test(val)) {
    return false
  }
  return val
}

export const toCamelCase = camelCase

// Basically return false, true with env variables are "false", "true"
export const getSafeValue = (keyName, obj = {}, defaults = process.env) => {
  const newValue = defaults[toCapsCase(keyName)] || obj[keyName]
  console.log(toCapsCase(keyName), defaults[toCapsCase(keyName)], newValue)
  return (typeof newValue === 'boolean') ?
    newValue : getTruthy(newValue)
}

// const newConfig = {}
// Object
//   .keys(variables).forEach((keyName) => { newConfig[keyName] = getSafeValue(keyName) })

// export const config = newConfig

