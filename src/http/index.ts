import Koa from 'koa'
import KoaLogger from 'koa-logger'

const app = new Koa()

app.use(KoaLogger())

app.use(async(ctx)=>{
    ctx.body = 'Hello koa'
})

export default app