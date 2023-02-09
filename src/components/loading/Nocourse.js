import React, {useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './load.css';
import { Link } from 'react-router-dom';
import nodata from '../../assets/icons/nocourse.gif';
function Nocourse() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
        });
      },[]);
    return (
        <Container fluid >
            <div className='container load'>
            <p className='titletxt'>This Instructor Has not Posted Anything Yet<br/> Stay Calm and Follow For Updates</p>
            <img className='loadimg' style={{ width:'250px',height:'250px' }} src={nodata} alt="loading"/>
            <div className='homebtn'>
                <Link to="/Learn" className="btn btn-sm">
                    Back
                </Link>
            </div>
            </div>
        </Container>
        );
    }
    
export default Nocourse;