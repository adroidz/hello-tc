import config from "./config"
import server from "./server"

if(config.isDebugMode){
    console.log(JSON.stringify(config))
}

server.listen(config.http.port, config.http.host, undefined, async() => {
    console.log(`Http server start:\nhttp://localhost:${config.http.port}\n`)
})