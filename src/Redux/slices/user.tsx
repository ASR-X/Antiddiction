import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Firebase from '../../../config/Firebase.js'
import { RootState } from '../index.js'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from 'firebase/auth'
import * as Linking from 'expo-linking'

const initialState = {
  user: {
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
  extraReducers: (builder) => {
    // builder.addCase(resetPass.fulfilled, (state, { payload }) => {})
    // builder.addCase(resetPass.rejected, (state, action) => {
    //   console.log(action.payload)
    //   if (action.payload) {
    //     // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
    //     state.error = action.payload
    //   }
    // })
  },
})

export const selectUser = (state: RootState): any => state.user.user

export default userSlice
