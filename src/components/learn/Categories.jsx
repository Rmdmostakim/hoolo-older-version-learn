import React, { useEffect, useState } from 'react';
import { Col, Row,Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Coursecard from '../Cards/course/Card';
import { Link } from 'react-router-dom';
import ProductPlaceholder from '../placeholders/Product';
import category from '../../api/category';
import axios from 'axios';
import config from '../../api/config';
export default function Categories({ title }) {
    const { small, navHeight, bannerHeight,learFixed } = useSelector((state) => state.device);
    const [isLoading,setLoading] = useState(false);
    const [courses,setCourses] = useState(null);
    const { dpCategories } = useSelector((state) => state.category);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!dpCategories) {
            dispatch(category.getallDpCategories());
        }
    }, [dispatch, dpCategories]);
    const style = {
        top: `${navHeight}px`,
        zIndex: '10',
        position:'fixed',
    };
    const scrollable = {
        height:'80vh',
        overflowY:'scroll',
    }
    const categoryHandler = async(uuid) =>{
        setLoading(true);
        await axios.post(`${config.baseUrl}course/get/category`,{uuid},config.basicHeader).then((res)=>{
            if(res.status === 200){
                if(res.data.length>0){
                    setCourses(res.data);
                }else{
                    setCourses(null);
                }
                
            }
            setLoading(false);
        }).catch(()=>   setLoading(false));
    }
    return (
        <>
            <div>
                <Row className='g-0'>
                    {dpCategories && dpCategories.map((item)=>(
                        <Col md={4} sm={12} key={item.uuid}>
                        <Button variant='none' className='px-0 py-2' onClick={()=>categoryHandler(item.uuid)}>
                            <img className='img-fluid w-100' src={item.icon} alt={item.name} />
                        </Button>
                        </Col>
                    ))}
                </Row>
            </div>
            <div>
                <Row className="gx-2">
                    {isLoading ? (
                        <ProductPlaceholder />
                    ) : (
                        courses && courses.map((item) => (
                            <Col lg={4} md={6} sm={12} key={Math.random()}>
                                <Coursecard course={item} buttonable={false} counter={false} />
                            </Col>
                        ))
                    )}
                </Row>
            </div>
        </>
       ) ;
}
