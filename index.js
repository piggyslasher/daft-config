import fs from 'fs'
import path from 'path'

import cosmiconfig from 'cosmiconfig'

const explorer = cosmiconfig('config');
explorer.search().then(({config} = result) => {
  // result.config is the parsed configuration object.
  // result.filepath is the path to the config file that was found.
  // result.isEmpty is true if there was nothing to parse in the config file.
  const prox = config.default.proxyIP
  console.log(config.default, prox);

  // (async () => { const c = await theObject.time; console.log(c);})
}).catch((error) => {
  console.log('error:', result)
  // Do something constructive.
});




