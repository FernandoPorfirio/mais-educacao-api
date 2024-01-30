import User from '../model/User'
import IUser from '../interfaces/IUser'
import { AppDataSource } from '../../database/data-source'

const userRepository = AppDataSource.getRepository(User)

const getUser = async (): Promise<IUser[]> => {
  const user = await userRepository.find()
  return user
}

const createUser = async (userData: IUser): Promise<IUser> => {
  const newUser = userRepository.create(userData)
  const savedUser = await userRepository.save(newUser)
  return savedUser
}

const findUserByEmail = async (email: string): Promise<IUser | null> => {
  const user = await userRepository.findOne({ where: { email } })
  return user
}

const findUserWithTransaction = async (id: number): Promise<any | null> => {
  const user = await userRepository.findOne({ where: { id }, relations: ['accesLevel.transaction'] })
  return user
}

export default { getUser, createUser, findUserByEmail, findUserWithTransaction }
