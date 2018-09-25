import { getSafeValue, getTruthy, toCamelCase, toCapsCase } from './utils'
import cosmiconfig from 'cosmiconfig'

export default class Config {
  hydrate(conf, addCapsCase) {
    if (conf) {
      Object.entries(conf).forEach(([key, value]) => {
        if (!Reflect.has(this, key)) {
          const valueToSet = getTruthy(conf[key])

          Reflect.defineProperty(
            this,
            key,
            {
              get: () => valueToSet,
              enumerable: true,
            }
          )

          if (addCapsCase) {
            Reflect.defineProperty(
              this,
              toCapsCase(key),
              {
                get: () => valueToSet,
                enumerable: true,
              }
            )
          }
        }
      })
    }
  }

  async loadConfig(conf) {
    if (typeof conf === 'string') {
      // process.chdir(process.cwd())
      const explorer = cosmiconfig(conf)
      const config = await explorer.search()

      console.log(`${conf} is a string`, config)
      return config.config
    } return conf
  }

  static async create(conf, addCapsCase) {
    const o = new Config(conf, addCapsCase)
    o.hydrate(await o.loadConfig(conf), addCapsCase)
    return o
  }

  get = key => getSafeValue(key, this)

  GET = key => getSafeValue(toCamelCase(key), this)
}
