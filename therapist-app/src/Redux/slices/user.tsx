import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index.js'
import * as Linking from 'expo-linking'

const initialState = {
  user: {
    Home: false
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFactor: (state, action: PayloadAction<any>) => {
      state.user = { ...state.user, ...action.payload }
      return state
    },
  },
  extraReducers: (builder) => {},
})

export const selectUser = (state: RootState): any => state.user

export default userSlice
