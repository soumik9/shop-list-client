import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteShop } from '../../../actions/shops';
import swal from 'sweetalert';
import toast from 'react-hot-toast';
import './shopCard.css'
import { useNavigate } from 'react-router-dom';

const ShopCard = ({ shop }) => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { _id, name, area, category, openingDate, ClosingDate, status } = shop;

    const handleShopDelete = (shopId) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(deleteShop(shopId));
                toast.success(`${name} deleted`, { duration: 2000, position: 'top-right', });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

    return (
        <Col md={4}>
            <Card className="shop__items pt-5">
                <Card.Body className='text-center'>
                    <h3 className='mb-3 title text-capitalize'>{name}</h3>
                    <p>Category: <strong><span className='title'>{ category }</span></strong></p>
                    <p>Area: <span className='title'>{ area }</span></p>

                    <div className='d-flex justify-content-center my-4'>
                        <small className='me-4'>Opening: <span className='title'>{openingDate}</span></small>
                        <small>Closing: <span className='title'>{ClosingDate}</span></small>
                    </div>

                    <div className={`status w-25 ${status ? 'bg-success' : 'bg-danger'}`}>
                        <p className='text-white mt-2 pb-2'>{status ? 'OPEN' : 'CLOSE'}</p>
                    </div>

                    <div className='d-flex justify-content-center '>
                        <Button variant="primary" className='ms-4 w-50 py-2' onClick={() => navigate(`/edit-shop/${_id}`)}>Edit</Button>
                        <Button variant="danger" className='ms-4 w-50' onClick={() => handleShopDelete(_id)}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ShopCard;