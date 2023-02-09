import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import course from '../../api/course';
import logo from '../../assets/images/user.png';
export default function Instructors() {
  const {isLoading,instructors} = useSelector((state)=>state.course);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(!instructors){
      dispatch(course.getAllInstructor());
    }
  },[instructors,dispatch]);
  console.log(instructors);
  return (
    <Container>
        <Row>
          {instructors && instructors.map((item)=>(
            <Col key={item.uuid} md={3} lg={3} sm={6}>
              <div className='border-1 rounded-3 bg-light d-flex flex-column justify-content-center align-items-center shadow py-3 mb-3' style={{height:300}}>
                  <img style={{width:100,height:100}} className='img-fluid rounded-circle' src={item.profile? item.profile.path: logo} alt="" />
                  <div className='text-center'>
                    <Link to={ `/instructor/${item.uuid}`}>
                    <h6 className='text-dark'>{item.instructor.full_name}</h6>
                    <p className='text-dark'>Instructor</p>
                    </Link>
                  </div>
                  <p className='text-center overflow-hidden' style={{height:100}}>{item.instructor.about_me}</p>
                  <Link to={ `/instructor/${item.uuid}`} className="btn btn-sm border-2 text-white" style={{backgroundColor:'#1c405d',borderRadius:'15px'}}>See More</Link>
              </div>
              
            </Col>
          ))}
          
        </Row>
    </Container>
  )
}
