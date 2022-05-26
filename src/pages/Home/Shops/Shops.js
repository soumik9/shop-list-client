import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ShopCard from './ShopCard';

const Shops = () => {

    const shops = useSelector((state) => state.shops);

    return (
        <section className='shops my-100'>
        <Container>
            <Row>
                {
                    shops.map(shop => <ShopCard
                        key={shop._id}    
                        shop={shop}    
                    />)
                }
            </Row>
        </Container>
    </section>
    );
};

export default Shops;