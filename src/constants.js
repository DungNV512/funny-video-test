const API_URL = {
  development: 'http://localhost:3000/',
  production: 'https://funny-movies-test-server.herokuapp.com/'
}

const currentEnv = process.env.NODE_ENV || 'local'

export const ENDPOINT_URL = API_URL[currentEnv]
