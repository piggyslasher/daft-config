import Config from './Config'

const baseConfig = {
  test: true,
  testFalse: 'false',
  testFalseNo: 'no',
  testFalseZero: 0,
  testFalseZeroString: '0',
  proxy: 'https://proxy:8080',
  nodeEnv: 'production',
}

describe('Config', () => {
  it('should return true if config key exists', async () => {
    const config = await Config.create(baseConfig)
    expect(config.test).toBeTruthy()
    expect(config.get('test')).toBeTruthy()

    expect(config.test).toBe(true)
    expect(config.propertyNotDeclared).toBe(undefined)

    expect(config.testFalse).toBe(false)

    expect(config.proxy).toBe('https://proxy:8080')

    Object.keys(config).forEach(key => key.startsWith('testFalse') && expect(config[key]).toBe(false))
  })

  it('should return true if CAPS_CASE is true & key is in lowerCase', async () => {
    const config = await Config.create(baseConfig, true)
    expect(config.TEST).toBe(true)
    expect(config.NODE_ENV).toBe('test') // Jest always sets the NODE_ENV to test :) so its a good check
  })
})
