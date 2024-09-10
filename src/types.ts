export interface User {
  id: number
  name: string
  avatar: string
  email: string
  birtday: string
  phone: string
}

export interface Post {
  id: number
  userId: number
  title: string
  user: User
  body: string
}
