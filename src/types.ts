export interface User {
  id: number
  name: string
  email: string
}

export interface Post {
  id: number
  userId: number
  title: string
  user_name: string
  body: string
}
