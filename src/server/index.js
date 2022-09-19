import { Router } from 'express'
import pages from './pages'
import emails from './emails'

const router = new Router({ mergeParams: true })

router.use('/rendered/emails', emails)

router.use('pages', pages)

export default router
