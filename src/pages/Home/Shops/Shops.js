import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getShops } from '../../../actions/shops';
import ShopCard from './ShopCard';

const Shops = () => {

    const dispatch = useDispatch();

    // all shops
    useEffect( () => {
        dispatch(getShops());
    }, [dispatch])
  

    const shops = useSelector((state) => state.shops);

    return (
        <section className='shops my-100'>
        <Container>
            <Row className='gy-5'>
                {
                    shops.length ? (
                        shops.map(shop => <ShopCard
                            key={shop._id}    
                            shop={shop}    
                        />)
                    ) : <p>No shop data! Please reload</p>
                    
                }
            </Row>
        </Container>
    </section>
    );
};

export default Shops;