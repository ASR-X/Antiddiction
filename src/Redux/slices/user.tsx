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

export const login = createAsyncThunk(
  'users/login',
  async (
    userData: { email: string; password: string },
    { rejectWithValue }: any
  ) => {
    const { email, password } = userData
    return signInWithEmailAndPassword(getAuth(Firebase), email, password)
      .then((response) => {
        return {
          email: response.user.email,
          fullName: response.user.displayName,
          uid: response.user.uid,
        }
      })
      .catch((err) => {
        return rejectWithValue(err.code)
      })
  }
)

export const signup = createAsyncThunk(
  'users/signup',
  async (
    userData: { email: string; password: string; fullName: string },
    { rejectWithValue }: any
  ) => {
    const { email, password, fullName } = userData
    return createUserWithEmailAndPassword(getAuth(Firebase), email, password)
      .then(async (response) => {
        await updateProfile(response.user, { displayName: fullName })
        return {
          email: response.user.email,
          fullName: response.user.displayName,
          uid: response.user.uid,
        }
      })
      .catch((err) => {
        return rejectWithValue(err.code)
      })
  }
)

export const logout = createAsyncThunk(
  'users/logout',
  async (arg, { rejectWithValue }: any) => {
    return signOut(getAuth(Firebase))
      .then(() => {
        return {
          email: null as string,
          fullName: null as string,
          uid: null as string,
        }
      })
      .catch((err) => {
        return rejectWithValue(err)
      })
  }
)

export const sendReset = createAsyncThunk(
  'user/sendReset',
  async (email: string, { rejectWithValue }: any) => {
    var actionCodeSettings = {
      url: 'https://food-lines-40c3c.firebaseapp.com/__/auth/action',
      android: {
        packageName: 'com.foodlines',
        installApp: false,
      },
      handleCodeInApp: true,
    }
    //console.log(actionCodeSettings);
    return sendPasswordResetEmail(getAuth(Firebase), email, actionCodeSettings)
      .then(() => {
        return {
          email: email,
          fullName: null,
          uid: null,
        }
      })
      .catch(function (error) {
        return rejectWithValue(error)
      })
  }
)

export const resetPass = createAsyncThunk(
  'user/resetPass',
  async (
    data: { code: string; password: string },
    { rejectWithValue }: any
  ) => {
    confirmPasswordReset(getAuth(Firebase), data.code, data.password)
      .then()
      .catch(function (error) {
        return rejectWithValue(error)
      })
  }
)

const initialState = {
  user: {
    email: null as string,
    fullName: null as string,
    uid: null as string,
  },
  error: null as any,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) =>
      (state.user = action.payload),
  },
  extraReducers: (builder) => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload
    })
    builder.addCase(login.rejected, (state, action) => {
      console.log(action.payload)
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload
      }
    })
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.user = payload
    })
    builder.addCase(signup.rejected, (state, action) => {
      console.log(action.payload)
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload
      }
    })
    builder.addCase(logout.fulfilled, (state, { payload }) => {
      state.user = payload
    })
    builder.addCase(logout.rejected, (state, action) => {
      console.log(action.payload)
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload
      }
    })
    builder.addCase(sendReset.fulfilled, (state, { payload }) => {
      state.user = payload
    })
    builder.addCase(sendReset.rejected, (state, action) => {
      console.log(action.payload)
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload
      }
    })
    builder.addCase(resetPass.fulfilled, (state, { payload }) => {})
    builder.addCase(resetPass.rejected, (state, action) => {
      console.log(action.payload)
      if (action.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
        state.error = action.payload
      }
    })
  },
})

export const selectUser = (state: RootState): any => state.user.user

export default userSlice
