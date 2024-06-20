import { readData } from '@/utils/storage'
import axios from 'axios'

const url = location.origin
const instance = axios.create({
  baseURL: url,
  headers: {
    Authorization: 'Bearer ' + readData('token')
  }
})

const fetchPendapatanItem = async () => {
  return instance.get('/pendapatan')
}

const fetchPenilaianUser = async () => {
  return instance.get('/penilaian.json')
}

const fetchPenilaianUserWithParams = async (page: number, max: number) => {
  const params = new URLSearchParams({ page: page.toString(), max: max.toString() })
  return instance.get('/penilaian.json', { params })
}

const fetchPenilaianUserWithParams2 = async (query: object) => {
  const params = new URLSearchParams(query.toString())
  return instance.get('/penilaian.json', { params })
}

const createAuth = async (data: object) => {
  return instance.post('/auth.json', data)
}

const createAuth2 = async (username: string, passowrd: string) => {
  return instance.post('/auth.json', {
    username: username,
    password: passowrd
  })
}

export { fetchPendapatanItem, fetchPenilaianUser, createAuth }