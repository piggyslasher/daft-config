import confAsync from './index.folder-one'

// process.chdir(__dirname)
describe('Daft-conf integration test', () => {
  fit('should return the local config', async () => {
    const conf = await confAsync
    console.log('tesasdt', conf)
    expect(conf.level).toBe('folder-one')
  })
})
