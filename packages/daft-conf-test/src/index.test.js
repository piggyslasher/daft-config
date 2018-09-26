import Config from './index'

describe('Daft-conf integration test', () => {
  it('should return the local config', async () => {
    const conf = await Config
    // console.log(process.cwd(), process.env, conf)
    expect(conf.level).toBe('root')
    expect(conf.shouldBeTrue).toBe(true)
    expect(conf.shouldBeFalse).toBe(false)
    expect(conf.TEST_ENV).toBe('TEST_ENV')
  })
})
