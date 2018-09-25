import confAsync from 'daft-conf-test/src/folder-one/index.folder-one'

process.chdir(__dirname)
describe('Daft-conf integration test', () => {
  it('should return the local config', async () => {
    const conf = await confAsync
    expect(conf.level).not().toEqual('folder-one')
  })
})
