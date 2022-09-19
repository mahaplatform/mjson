import server from '@src/server'
import inliner from 'inline-css'
import { Server } from 'http'
import Express from 'express'
import { parse } from 'url'
import Next from 'next'
import path from 'path'

const port = 3000

const dev = async () => {

  const next = Next({
    dev: true,
    dir: path.join('src','web'),
    distDir: '.next',
    hostname: 'localhost',
    port
  })

  const handle = next.getRequestHandler()

  await next.prepare()

  const express = Express(server)

  express.use(server)

  express.use(async(req, res) => {
    const parsedUrl = parse(req.url, true)
    await handle(req, res, parsedUrl)
  })

  const http = Server(express)

  http.listen(port, (err) => {
    if (err) throw err
    console.log(`Ready on port ${port}`)
  })

}

export default dev
