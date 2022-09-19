import server from '@src/server'
import inliner from 'inline-css'
import Express from 'express'
import { parse } from 'url'
import http from 'http'
import next from 'next'
import path from 'path'

const port = 3000

const dev = async () => {

  let requestHandler = null

  const express = Express()

  express.use(server)

  express.use((req, res) => {
    return requestHandler(req, res)
  })

  const httpServer = http.createServer(express)

  const app = next({
    hostname: 'localhost',
    customServer: false,
    httpServer,
    port,
    dir: path.join('dist')
  })

  requestHandler = app.getRequestHandler()

  await app.prepare()

  httpServer.listen(port, (err) => {
    if (err) throw err
    console.log(`Ready on port ${port}`)
  })

}

export default dev
