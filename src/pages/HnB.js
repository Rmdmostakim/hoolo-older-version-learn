import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../components/ShopTwo/CategoryProduct/CategoryProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/common/Loader';
import { getVideo } from '../features/AppSlice';
import ShopTwo from '../components/ShopTwo/Shop';
import Servererror from '../components/loading/Servererror';
import Nocat from '../components/loading/Nocat';
import Noresult from '../components/loading/Noresult';
export default function HnB() {
    const name = 'health-&-beauty';
  const {products,videoLoading,videoSuccess,videoError,searchValue} = useSelector((state)=>state.app);
  const dispatch = useDispatch();
  const retry = () =>{
    dispatch(getVideo());
  }
  const category = () =>{
    let data = products.filter(product=>product.category.title.en.trim().replace(/ /g, "-").toLowerCase() === name);
    if(data.length <=0){
      return <Nocat/>
    }
    if(searchValue){
        data = data.filter( product=>product.product_name.toLowerCase().includes(searchValue.toLowerCase()));
    }
    if(data.length<=0){
        return <Noresult/>
    }
    
    return (
      <>
          <Container fluid>
            <ShopTwo products={data} title={""} isCategory={true} />
          </Container>
        </>
    );
  };
  return (
    <>
    {videoLoading && <Loader/>}
      {videoError && <Servererror retry={retry}/>}
      {videoSuccess && category()}
    </>
  )
}
