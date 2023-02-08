import React, { useEffect,useState } from 'react';
import LiveVideoPlayer from './liveVideoPlayer';
import cat from '../../assets/images/cathoolo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from 'react-bootstrap';
import './Upcoming.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import dp1 from './data/dp1.jpg';
import coversadia from './data/coversadia.jpg';
import eye from './data/eye.PNG';
import skin from './data/skin.PNG';
import dpeye from './data/dpeye.jpg';
import hoolodp from './data/hoolodp.PNG';
import ridwandp from './data/ridwandp.jpeg';
import smokydp from './data/smokydp.jpeg';
import smokycov from './data/smokycov.jpeg';
import jeweldp from './data/jeweldp.jpeg';
import axios from 'axios';

function Upcoming() {
  const [dataupcoming,setDataupcoming] = useState(null);
  useEffect(()=>{
    async function fetch(){
      axios.get('https://shop.hoolo.live/api/video/lives')
      .then((res)=>{
        setDataupcoming(res.data);
      })
      .catch((error)=>console.log(error));
    }fetch();
  },[]);
  
  return (
    <Splide options={{
      drag: 'free',
      arrows: false,
      pagination: false,
      perPage: 1,
      gap: '8px',
      fixedWidth: '200px',
      fixedHeight: 'auto',
      } } aria-label="React Splide Example">
    {dataupcoming && dataupcoming.map((data)=>{
      return(
        
        <SplideSlide key={Math.random()}>
            <div className="LiveVideoCard">
              <div className='livecardheader'>
                <div className='livestoreLogo'>
                  <img style={{borderRadius:'50%', width:'40px', height:'40px'}} className='livestoreLogo' src ={data.cover}></img>
                  <b className='livestorename' style={{color:'white',paddingInline:'3px'}}>{data.creator}</b>
                </div>
                <div className="ml-1" style={{ cursor:'pointer',background:'white',padding:"2px",borderRadius:'5px' }}>
                {data.type}
                </div>
                
              </div> 
              <div className='livevidcard'>
                <LiveVideoPlayer cover={data.cover} src={data.path}/>
              </div>
              <div className='livecardfooter'>
                <div className='livevidtitle'>
                  <b className='vidtitle' style={{color:'white',paddingInline:'3px'}}>{data.title}</b>
                </div>
                <div className='liversvp'>
                  rsvp
                </div> 
              </div> 
            </div>
        </SplideSlide> 
      );
    })}
    </Splide>
  );
}

export default Upcoming;