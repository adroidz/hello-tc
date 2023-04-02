import Koa from 'koa'
import KoaLogger from 'koa-logger'
import KoaJson from 'koa-json'
import KoaBodyparser from 'koa-bodyparser'
import config from '../config'

const app = new Koa()

app.use(KoaLogger())

app.use(KoaBodyparser({
    enableTypes: ["json"]
}))

if(config.isDebugMode){
    app.use(KoaJson({pretty: true}))
}

app.use(async(ctx)=>{
    ctx.body = {
        text: 'Hello koa',
        body: ctx.request.body
    }
})

export default app