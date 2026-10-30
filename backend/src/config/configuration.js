import {resolveEnv} from '../utils/utility.js'

console.log(process.env.PORT)

export const configuration = Object.freeze({
    port: Number(resolveEnv("PORT")),
    node_env: resolveEnv("NODE_ENV"),
    mongoUri: resolveEnv("MONGODB_URI"),
    clientUrl: resolveEnv("CLIENT_URL"),
    jwtSecret: resolveEnv("JWT_SECRET"),
    jwtExpiresIn: Number(resolveEnv("JWT_EXPIRES_IN")),
    cookieSecret: resolveEnv("COOKIE_SECRET")
})