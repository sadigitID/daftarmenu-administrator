import { readData } from '@/utils/storage'
import axios from 'axios'

const url = location.origin
const instance = axios.create({
  baseURL: `${url}/api`,
  headers: {
    Authorization: 'Bearer ' + readData('token')
  }
})

const fetchUserInformation = async () => {
  return instance.get('/user_information.json')
}

const createAuth = async (data: object) => {
  return instance.post('/auth.json', data)
}

const fetchAccountData = async () => {
  return instance.get('/account_data.json')
}

const fetchNoteData = async () => {
  return instance.get('/note_data.json')
}

const fetchRestaurants = async () => {
  return instance.get('/restaurants_upgrade_log.json')
}

export { fetchUserInformation, createAuth, fetchAccountData, fetchNoteData, fetchRestaurants }
