import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:{
    email:"",
    u:true
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setsignin: (state,action) => {
      state.user.email= action.payload.email;
    },
    setsignout: (state) => {
      state.user.email= null
    },
    setsignup:(state,action)=>{
      state.user.u=action.payload.u;
    }
  }
});

export const { setsignin, setsignout,setsignup} = userSlice.actions;

export const selectemail = (state) => state.user.user.email;
export const selectu = (state) => state.user.user.u;

export default userSlice.reducer;
