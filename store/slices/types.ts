export interface User {
  id: string
}

export interface UsersState {
  users: User[]
  usersLoading: boolean
  usersError: boolean
}
