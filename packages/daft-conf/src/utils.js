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

export const getEnvValue = (key, defaultValue) => process.env[key] || defaultValue

export const toCamelCase = camelCase

// Basically return false, true with env variables are "false", "true"
export const getSafeValue = (keyName, obj = {}, defaultValue) => {
  let newValue = getEnvValue(toCapsCase(keyName), obj[keyName])
  newValue = newValue == null ? defaultValue : newValue
  // console.log(toCapsCase(keyName), obj[keyName], newValue)
  return (typeof newValue === 'boolean') ?
    newValue : getTruthy(newValue)
}

// const newConfig = {}
// Object
//   .keys(variables).forEach((keyName) => { newConfig[keyName] = getSafeValue(keyName) })

// export const config = newConfig

