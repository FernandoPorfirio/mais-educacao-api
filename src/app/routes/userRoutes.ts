import { Router } from 'express'

import authMiddleware from '../middlewares/authMiddleware'

import UserController from '../controllers/UserController'

const router = Router()

router.get('/', authMiddleware, UserController.getAllUsers)
router.post('/', authMiddleware, UserController.createUser)

export default router
