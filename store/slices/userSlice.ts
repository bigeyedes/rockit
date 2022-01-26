import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { UsersState } from './types'

const initialState: UsersState = {
  users: [],
  usersLoading: false,
  usersError: false,
}

const testUsersUrl = 'https://reqres.in/api/users'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch(testUsersUrl)
  // eslint-disable-next-line no-return-await
  return await response.json()
})

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.usersLoading = true
      state.usersError = false
    })
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.users = payload.data
      state.usersLoading = false
      state.usersError = false
    })
    builder.addCase(fetchUsers.rejected, (state) => {
      state.usersLoading = false
      state.usersError = true
    })
  },
})

export const selectUsers = (state: RootState) => state.users

export default usersSlice.reducer
