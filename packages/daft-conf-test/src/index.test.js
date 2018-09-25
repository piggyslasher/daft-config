import Config from './index'

describe('Daft-conf integration test', () => {
  it('should return the local config', async () => {
    console.log(process.cwd(), Config, typeof Config)
    const conf = await Config
    expect(conf.level).toBe('root')
  })
})
