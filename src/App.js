import React,{ useEffect,useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getVideo,getCategory, getStore, getBrand } from './features/AppSlice';
import Approutes from './routes/Approutes';
import course from './api/course';
//
import "./App.css";
import "video-react/dist/video-react.css";
import "bootstrap/dist/css/bootstrap.css";
import Live from "./components/Live/Live";
import { getCart } from './features/CartSlice';
import { getFollow } from './features/FollowSlice';
import { setDevice } from './features/DeviceSlice';

function App() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('id');
  const windowWidth = useCallback(() => {
      const position = window.innerWidth;
      dispatch(setDevice(position));
  }, [dispatch]);

  useEffect(() => {
      const position = window.innerWidth;
      dispatch(setDevice(position));
      window.addEventListener('resize', windowWidth);
      return () => {
          window.removeEventListener('resize', windowWidth);
      };
  }, [dispatch, windowWidth]);

  useEffect(()=>{
    dispatch(getVideo());
    dispatch(getBrand());
    dispatch(getCategory());
    dispatch(getStore());
    if(userId){
			dispatch(getCart());
      dispatch(getFollow());
		}
  },[dispatch,userId]);
  
  return (
    <Approutes/>
  )
}

export default React.memo(App);
