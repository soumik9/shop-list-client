import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getShops } from '../../../actions/shops';
import ShopCard from './ShopCard';
import './shop.css'

const Shops = () => {

    const dispatch = useDispatch();
    const [category, setCategory] = useState('');
    const [area, setArea] = useState('');
    const [status, setStatus] = useState('');

    // all shops
    useEffect( () => {
        dispatch(getShops(category, area, status));
    }, [dispatch, category, area, status])
  

    const shops = useSelector((state) => state.shops);


    //filtering
    
    console.log(category);

    return (
        <section className='shops my-100'>
        <Container>

            <div className="shop__header card py-4 px-2 mb-5">
                <Row className='justify-content-end align-items-center'>
                    <Col md={3} className="mb-3 mb-md-0">
                        <Form.Select onChange={e => setStatus(e.target.value)}>
                            <option value="">Select Open/Close</option>
                            <option value="true">Open</option>
                            <option value="false">Close</option>
                        </Form.Select>
                    </Col>
                    <Col md={3} className="mb-3 mb-md-0">
                        <Form.Select onChange={e => setArea(e.target.value)}>
                            <option value="">Select Area</option>
                            <option value="Thane">Thane</option>
                            <option value="Pune">Pune</option>
                            <option value="Mumbai Suburban">Mumbai Suburban</option>
                            <option value="Nashik">Nashik</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Ahmednagar">Ahmednagar</option>
                            <option value="Solapur">Solapur</option>
                        </Form.Select>
                    </Col>
                    <Col md={3}>
                        <Form.Select onChange={e => setCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Butcher">Butcher</option>
                            <option value="Baker">Baker</option>
                            <option value="Chemist">Chemist</option>
                            <option value="Stationery shop">Stationery shop</option>
                        </Form.Select>
                    </Col>
                </Row>
            </div>
           

            <Row className='gy-5'>
                {
                    shops.length ? (
                        shops.map(shop => <ShopCard
                            key={shop._id}    
                            shop={shop}    
                        />)
                    ) : <p>No shop data! Please reload or check that filter</p>
                    
                }
            </Row>
        </Container>
    </section>
    );
};

export default Shops;