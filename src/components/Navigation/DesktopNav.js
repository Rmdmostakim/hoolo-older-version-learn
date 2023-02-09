import React, { useEffect, useRef } from "react";
import { Link,useLocation } from "react-router-dom";
import "./Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import { Button,Badge } from "react-bootstrap";
import Cart from "./Cart";
import { useSelector,useDispatch } from "react-redux";
import { showCart } from "../../features/CartSlice";
import Searchbar from "./Searchbar";
import hoolo from './icons/hoolo.gif';
import {setNavHeight} from '../../features/DeviceSlice';
import Class from '../../assets/css/navbar.module.css';
import Navmenu from "./Navmenu";
import GuestPic from '../../assets/images/user.png';
import { Avatar } from "rsuite";
import { BsCart } from 'react-icons/bs';


export default function DesktopNav(props) {
	const ref = useRef();
	const location = useLocation();
	const dispatch = useDispatch();
	const {carts,show} = useSelector((state)=>state.cart);
	const cartShowHandler = () =>{
		dispatch(showCart(!show));
	}
	const navHeight = () => {
		if(ref.current){
			const { clientHeight } = ref.current;
			dispatch(setNavHeight(clientHeight));
		} 
    };
	
	useEffect(()=>{
		if(location.pathname === '/view-cart' || location.pathname === '/checkout'){
			dispatch(showCart(false));
		}
		window.addEventListener('scroll', navHeight);
        return () => {
            window.removeEventListener('scroll', navHeight);
        };
	},[location,dispatch]);

	return (
		<>
			<Navbar sticky="top" className="px-0" ref={ref}>
				<div className={`${Class.conatiner} ps-2 ps-lg-3 pe-2`} ref={ref}>
					<div className={Class.leftandmid}>
						<div className={`${Class.left}`}>

							<div>
								<Link to="/">
									<img className={Class.logo} src={hoolo} alt="hoolo" />
								</Link>
							</div>
						</div>

						<div className={Class.navmenu}>{ <Navmenu />}</div>
					</div>

					<div className={`${Class.right} justify-content-end `}>
						<div className="nav-item  search">
							{location.pathname !== '/view-cart' && location.pathname !== '/checkout' && location.pathname !== '/my-account' ? <Searchbar/>: null}
						</div>
						<div className="nav-item ">
							<Button variant="none" size="sm" onClick={cartShowHandler}>
								<BsCart className="fs-8" />
								<Badge className="cart-badge" bg="primary">
									{carts !== null && carts.length>0 ? carts.length : 0}
								</Badge>
							</Button>
							{show && location.pathname !== '/view-cart' && location.pathname !== '/checkout' ? <Cart/>: null}

						</div>
						<div className="mt-2">
							<Link to="/my-account" className="nav-link">
								<Avatar circle src={GuestPic} size="xs"></Avatar>
							</Link>	
						</div>
					</div>
				</div>
			</Navbar>
		</>
	)

}
