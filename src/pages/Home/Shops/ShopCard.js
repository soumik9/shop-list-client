import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const ShopCard = ({ shop }) => {

    const { name, area, category, openingDate, ClosingDate } = shop;

    return (
        <Col md={4}>
            <div className="shop__items">
                <Card>
                    <Card.Body className='text-center'>
                        <h3 className='shop__items-title mb-3'>{name}</h3>
                        <p>Category: <strong><span>{ category }</span></strong></p>
                        <p>Area: <span>{ area }</span></p>

                        <div className='d-flex justify-content-center my-4'>
                            <small className='me-4'>Opening: <span>{openingDate}</span></small>
                            <small>Closing: <span>{ClosingDate}</span></small>
                        </div>

                        <div className='d-flex justify-content-center '>
                            <Button variant="primary" className='ms-4 w-50 py-2'>Edit</Button>
                            <Button variant="danger" className='ms-4 w-50'>Delete</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
};

export default ShopCard;