import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Firebase from '../../../config/Firebase.js'
import { RootState } from '../index.js'
import * as Linking from 'expo-linking'

const initialState = {
  user: {
    admin: '1',
    age: '34',
    dose: ['2021-07-27', '2021-07-29', '2021-08-03', '2021-08-01'],
    drugs: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '11', '12', '13'],
    education: '5',
    employment: '2',
    firstAge: '25',
    gender: '1',
    insurance: '4',
    marital: '4',
    Home: true,
  },
  // user: {
  //   admin: null as any,
  //   age: null as any,
  //   dose: [],
  //   drugs: [],
  //   education: null as any,
  //   employment: null as any,
  //   firstAge: null as any,
  //   gender: null as any,
  //   insurance: null as any,
  //   marital: null as any,
  //   Home: null as any,
  // },
  error: null as any,
}

export const risk = createAsyncThunk(
  'user/risk',
  async (data: any, { rejectWithValue }: any) => {
    let { Home, ...newdata } = data
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newdata),
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
