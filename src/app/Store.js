import { configureStore } from '@reduxjs/toolkit';
import FollowReducer from '../features/FollowSlice';
import StoreReducer from '../features/StoreSlice';
import ProfileReducer from '../features/ProfileSlice';
import CartReducer from '../features/CartSlice';
import AppReducer from '../features/AppSlice';
import DeviceSlice from '../features/DeviceSlice';
import CategorySlice from '../features/CategorySlice';
import CourseSlice from '../features/CourseSlice';
import AuthSlice from '../features/AuthSlice';
import InstructorSlice from '../features/InstructorSlice';
const store = configureStore({
    reducer: {
      device: DeviceSlice,
      follow: FollowReducer,
      store: StoreReducer,
      profile: ProfileReducer,
      cart:CartReducer,
      app:AppReducer,
      category:CategorySlice,
      course:CourseSlice,
      auth: AuthSlice,
      instructor: InstructorSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['cart/getCart/fulfilled','cart/removeCart/fulfilled','cart/addCart/fulfilled',
                                'app/getVideo/fulfilled','app/getBrand/fulfilled','app/getStore/fulfilled',
                                'app/getComment/fulfilled','app/getCategory/fulfilled','follow/getFollow/fulfilled','course/getAllCourses/fulfilled',
                                'course/getCourseDetails/fulfilled','category/getallDpCategories/fulfilled','course/getAllInstructor/fulfilled',
                            'auth/userRegByHoolo/fulfilled','instructor/getAllInstructor/fulfilled',
                            'instructor/getInstructorCourses/fulfilled',
                            'instructor/getInstructorInfo/fulfilled',],
            },
        }),
  });
  
  export default store;
