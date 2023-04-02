import http from 'http'
import config from '../config'
import app from '../http'

const server = http.createServer(app.callback())
server.timeout = config.http.timeoutSeconds * 1000
export default server