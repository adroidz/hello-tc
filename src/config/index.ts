import ini from 'ini'
import fs from 'fs'
import { resolve } from 'path'
import { execSync } from 'child_process'

interface ENV{
    redis: {
        password?: string
    }
}

const isDebugMode = (process.env.NODE_ENV === 'dev')

const env = ((): ENV =>{

    let redisPassword: string | undefined
    try{
        let evnFile: string
        if(isDebugMode){
            evnFile = resolve('.env.dev')
        }else{
            evnFile = resolve('.env.publish')
        }
        const iniFileContent = fs.readFileSync(evnFile, 'utf-8').toString()

        console.log(iniFileContent)

        const iniData = ini.parse(iniFileContent)

        const redis = iniData.REDIS

        console.log(redis)

        redisPassword = iniData.REDIS.password

        console.log(redisPassword)
    }catch(error){
        // ignore
    }

    return {
        redis: {
            password: redisPassword
        }
    }
})()

let version: string | undefined

const config = {
    isDebugMode,
    env,
    version: (()=>{
        if(!version){
            try{
                version = execSync('git rev-parse --short HEAD').toString().replace('\n','')
            }catch(error){
                version = "unkonw"
            }
        }

        return version
    })()
}

export default config