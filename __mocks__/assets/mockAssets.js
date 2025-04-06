import { http, passthrough } from 'msw'

const assets = http.get('/assets/*', passthrough)
const layouts = http.get('/src/*', passthrough)
const fonts = http.get('https://fonts*', passthrough)

export default [assets, layouts, fonts]
