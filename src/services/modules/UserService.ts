import { axios } from '../axios'

export const getUsers = async () => {
  const { data } = await axios.get('users')
  return data
}

export const getUserAvatar = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=15') //results=10 yaptik cunku kullanicilara rasgele avatar verecegiz
    const data = await response.json()
    return data.results
  } catch (error) {
    return null
  }
}
