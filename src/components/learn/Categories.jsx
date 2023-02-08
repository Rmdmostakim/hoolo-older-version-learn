import React, { useEffect } from 'react';
import { Col, Row,Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import category from '../../api/category';
export default function LearnCategory({ title }) {
    const { small, navHeight, bannerHeight,learFixed } = useSelector((state) => state.device);
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
    if(small){
        return null;
    }
    return (
        <Container fluid style={{ height:'100vh' }}>
            <Row className='g-0'>
                {dpCategories && dpCategories.map((item)=>(
                    <Col md={4} sm={12} key={item.uuid}>
                    <Button variant='none' className='px-0 py-2'>
                        <img className='img-fluid w-100' src={item.icon} alt={item.name} />
                    </Button>
                    </Col>
                ))}
            </Row>
        </Container>
       ) ;
}
