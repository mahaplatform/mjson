import loadConfig from 'next/dist/server/config'
import customConfig from '@src/web/next.config'
import nextBuild from 'next/dist/build'
import path from 'path'

const webDir = path.resolve('src','web')
const distDir = path.resolve('src','web')

const build = async () => {

  const config = await loadConfig('phase-production-build', webDir)

  await nextBuild(webDir, {
    ...config,
    distDir: '../../dist/.next'
  })

}

export default build
