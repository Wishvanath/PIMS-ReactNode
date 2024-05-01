import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

//  import slice or reducer
import appointmentReducer from '../pages/appointment/appointment-slice';

const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
  },
});

export type IAppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;
export type IAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  Action<string>
>;

export default store;
