const { VrpcAgent, VrpcAdapter } = require('vrpc')
const pino = require('pino')
const Persistor = require('./src/Persistor')
const { domain, username, password, broker } = require('./config')
const log = pino({ timestamp: pino.stdTimeFunctions.isoTime }).child({
  module: 'index'
})

// ----------------------- ONLY EDIT HERE --------------------------------------

// Define your agent (= plugin) name here
const agent = 'My Greeter Agent'

// Import and register all classes you want to make available for low-coding
const Greeter = require('./src/Greeter')
VrpcAdapter.register(Greeter, { jsdocPath: './src/Greeter.js' })

// -----------------------------------------------------------------------------

async function main () {
  // Start vrpc-agent
  const vrpcAgent = new VrpcAgent({
    domain,
    agent,
    username,
    password,
    broker,
    log,
    bestEffort: true
  })
  await vrpcAgent.serve()

  // Create persistor
  const persistor = new Persistor({
    log,
    agentInstance: vrpcAgent
  })

  // Restore all persisted instances
  await persistor.restore()
}

main().catch(err => log.error(`An error happened: ${err.message}`))
