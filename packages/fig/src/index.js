/* eslint-disable no-console */
/*
  Keep your logic out of this file. Just use it to start running your app
  This file is ignored in test coverage reports
*/
// import App from './app'

// // const app = new App()
// // app.clear()
// // app.sayHello()
// app.getVersion().then(version => console.log(version))

import fs from 'fs'
import path from 'path'

import cosmiconfig from 'cosmiconfig'

const explorer = cosmiconfig('config')
explorer.search().then(({ config } = result) => {
  // result.config is the parsed configuration object.
  // result.filepath is the path to the config file that was found.
  // result.isEmpty is true if there was nothing to parse in the config file.
  const prox = config.default.proxyIP
  console.log(config.default, prox)

  // (async () => { const c = await theObject.time; console.log(c);})
}).catch((error) => {
  console.log('error:', result)
  // Do something constructive.
})

