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

export const risk = createAsyncThunk(
  'user/risk',
  async (data: any, { rejectWithValue }: any) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
    return fetch('https://asrx.ngrok.io/getProb', requestOptions)
      .then(async (response) => {
        const response_ser = await response.json()
        return response_ser
      })
      .catch((error) => {
        return rejectWithValue(error.message)
      })
  }
)

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
    builder.addCase(risk.fulfilled, (state, { payload }) => {
      state.user = { ...state.user, ...payload }
    })
    builder.addCase(risk.rejected, (state, action) => {
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload
      }
    })
  },
})

export const selectUser = (state: RootState): any => state.user.user

export default userSlice
