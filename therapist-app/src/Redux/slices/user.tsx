import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index.js'
import * as Linking from 'expo-linking'

const initialState = {
  user: {
    age: null as number,
    firstAge: null as number,
    gender: null as any,
    marital: null as any,
    education: null as any,
    employment: null as any,
    insurance: null as any,
    drugs: [],
    admin: null as any,
    dose: [],
    Home: null as any,
  },
  error: null as any,
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
