import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container,Button,Form,Col,Row,Alert } from "react-bootstrap";
import hoolo from '../../assets/images/hoolo.svg';
import axios from 'axios';
import toast from 'react-hot-toast';

function ForgetPassword() {
	const navigate = useNavigate();
	const [phone,setPhone] = useState('');
	const phoneHandler = (event) =>{
		const {value} = event.target;
		setPhone(value);
	}
	const submitHandler = () =>{
		if(phone.trim().length>10){
			axios.post('https://shop.hoolo.live/api/password-reset/request',{phone:phone})
			.then((res)=>{
				if(res.status === 201){
					navigate('/reset-password',{replace:false,state:{phone:res.data}});
					toast.success('An OTP sent to your phone');
				}else{
					toast.error('Your entered phone number is incorrect');
				}
			})
			.catch(()=>{
				toast.error('Something went wrong! Try again');
			});
		}else{
			toast.error('Invalid phone number');
		}
	}
	return (
		<Container>
			<Row className="justify-content-center">
				<Col md={5} className=" p-5 bg-white full-height">
					<div className="login-main-left">
						<div className="text-center mb-5 login-main-left-header">
							<img
								src={hoolo}
								className="img-fluid"
								alt="LOGO"
								style={{ width:'200px' }}
							/>
						</div>
						<div>
							<Form.Group>
								<Form.Label>Phone</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter phone number"
									value={phone}
									onChange={phoneHandler}
								/>
							</Form.Group>
							<div className="mt-4">
								<Row>
									<Col>
										<Button
											variant="outline-success text-dark"
											size="lg"
											block
											onClick={submitHandler}
										>
											Reset Password
										</Button>
									</Col>
								</Row>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default ForgetPassword;
