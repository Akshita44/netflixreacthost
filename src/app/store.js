import { configureStore } from '@reduxjs/toolkit';
import userreducer from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    user: userreducer
  },
});
