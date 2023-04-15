const isProd = process.env.NODE_ENV === 'production'

/*
 * Gets the BASE_PATH from the command used to start this app.
 * If BASE_PATH is specified but it does not start with a "/"
 * then add it.
 */
function getBasePath () {
  let basePath = ''

  if (isProd && process.env.BASE_PATH) {
    if (process.env.BASE_PATH.startsWith('/')) {
      basePath = process.env.BASE_PATH
    } else {
      basePath = '/' + process.env.BASE_PATH
    }
  }

  return basePath
}

module.exports = {
  publicRuntimeConfig: {
    basePath: getBasePath()
  },
  typescript: {
    ignoreBuildErrors: true
  }
}
