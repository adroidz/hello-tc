import Koa from 'koa'
import KoaLogger from 'koa-logger'
import KoaJson from 'koa-json'
import config from '../config'

const app = new Koa()

app.use(KoaLogger())

if(config.isDebugMode){
    app.use(KoaJson({pretty: true}))
}

app.use(async(ctx)=>{
    ctx.body = {
        text: 'Hello koa'
    }
})

export default app