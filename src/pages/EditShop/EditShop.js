import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RiLoginCircleLine } from 'react-icons/ri';
import { getShop, updateShop } from '../../actions/shops';
import toast from 'react-hot-toast';

const EditShop = () => {

    const navigate = useNavigate();
    const { shopId } = useParams();
    const dispatch = useDispatch();
    const [error, setError] = useState('')
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    // all shops
    useEffect( () => {
        dispatch(getShop(shopId));
    }, [dispatch, shopId])
  

    const shop = useSelector((state) => state.shops);
    // const { _id, name, area, category, openingDate, ClosingDate, status } = shop;

    const handleEditShop = (data) => {
        let status= false;
        let today = new Date();
        today.setHours(0, 0, 0, 0);

        const { name, area, category, openingDate, ClosingDate } = data;

        const splitClosingDate = ClosingDate.split('-');
        const yearClosingDate = splitClosingDate[0];
        const monthClosingDate = splitClosingDate[1];
        const dayClosingDate = splitClosingDate[2];
        let setClosingDate = (yearClosingDate + "-" + monthClosingDate + "-" + dayClosingDate);

        const splitOpeningDate = openingDate.split('-');
        const yearOpeningDate = splitOpeningDate[0];
        const monthOpeningDate = splitOpeningDate[1];
        const dayOpeningDate = splitOpeningDate[2];
        let setOpeningDate = (yearOpeningDate + "-" + monthOpeningDate + "-" + dayOpeningDate);

        const closeDate = new Date(setClosingDate);
        const openDate = new Date(setOpeningDate);
        closeDate > today ? status = true : status = false;

        if(openDate > closeDate){
            setError('Closing date should be after dates of opening date')
        }else{
            setError('');
            const shopData = { 
                name: name, area: area, category: category, openingDate: openingDate, ClosingDate: ClosingDate, status: status 
            }
    
            dispatch(updateShop(shopId, shopData));
            navigate('/');
            toast.success(`Shop update ${name}`, { duration: 2000, position: 'top-right', });
        }  
    }

    return (
        <section className="tasks my-50">
            <Container>

                <Row>
                    <Col md={12}>
                        <Card body>

                            <div className="task__header px-3">
                                <Row className='justify-content-between align-items-center'>
                                    <Col md={4}>
                                        <h2 className='title'>Edit Shop [{shop.name}]</h2>
                                    </Col>
                                    <Col md={2}>
                                        <div className="text-end">
                                            <Link to='/' className='btn btn-shop'>View Shops</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <hr />

                            <div className="task__body mt-5 card p-4">
                                <form onSubmit={handleSubmit(handleEditShop)}>

                                    <div className='mt-4'>
                                        <Form.Label htmlFor="name" className='ps-1'>Task Name <span className='title'>[{shop.name}]</span></Form.Label>
                                        <Form.Control type="text" {...register('name', { required: {
                                            value: true,
                                            message: 'Shop name is required.'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z ]*$/,
                                            message: 'Only alphabets please.'
                                        } })}  />
                                       {errors.name?.type === 'required' && <p className='text-danger mt-1 text-center'>{errors.name.message}</p>}
                                       {errors.name?.type === 'pattern' && <p className='text-danger mt-1 text-center'>{errors.name.message}</p>}
                                    </div>

                                    <div className='mt-4'>
                                        <Form.Label htmlFor="area" className='ps-1'>Area</Form.Label>
                                        <Form.Select {...register('area', { required: true })} defaultValue={shop?.area}>
                                            <option value="Thane" selected={shop.area=== 'Thane'}>Thane</option>
                                            <option value="Pune" selected={shop.area=== 'Pune'}>Pune</option>
                                            <option value="Mumbai Suburban" selected={shop.area=== 'Mumbai Suburban'}>Mumbai Suburban</option>
                                            <option value="Nashik" selected={shop.area=== 'Nashik'}>Nashik</option>
                                            <option value="Nagpur" selected={shop.area=== 'Nagpur'}>Nagpur</option>
                                            <option value="Ahmednagar" selected={shop.area=== 'Ahmednagar'}>Ahmednagar</option>
                                            <option value="Solapur" selected={shop.area=== 'Solapur'}>Solapur</option>
                                        </Form.Select>

                                        {errors.area && <p className='p-0 text-danger text-center'>Area is required.</p>}
                                    </div>

                                    <div className='mt-4'>
                                        <Form.Label htmlFor="category" className='ps-1'>Category</Form.Label>
                                        <Form.Select {...register('category', { required: true })} defaultValue={shop.category}>
                                            <option value="Grocery" selected={shop.category=== 'Grocery'}>Grocery</option>
                                            <option value="Butcher" selected={shop.category=== 'Butcher'}>Butcher</option>
                                            <option value="Baker" selected={shop.category=== 'Baker'}>Baker</option>
                                            <option value="Chemist" selected={shop.category=== 'Chemist'}>Chemist</option>
                                            <option value="Stationery shop" selected={shop.category=== 'Stationery shop'}>Stationery shop</option>
                                        </Form.Select>

                                        {errors.category && <p className='p-0 text-danger text-center'>Category is required.</p>}
                                    </div>

                                    <div className='mt-4'>
                                        <Form.Label htmlFor="openingDate" className='ps-1'>Opening Date <span className='title'>[{shop.openingDate}]</span></Form.Label>
                                        <Form.Control type="date" {...register('openingDate', { required: true })} />
                                        {errors.openingDate && <p className='p-0 text-danger text-center'>Opening Date is required.</p>}
                                    </div>

                                    <div className='mt-4'>
                                        <Form.Label htmlFor="ClosingDate" className='ps-1'>Closing Date <span className='title'>[{shop.ClosingDate}]</span></Form.Label>
                                        <Form.Control type="date" {...register('ClosingDate', { required: true })} />
                                        {errors.ClosingDate && <p className='p-0 text-danger text-center'>Closing Date is required.</p>}
                                        {error && <p className='m-0 text-danger text-center'>{error}</p>}
                                    </div>

                                    <button className='btn btn-shop py-2 w-100 mt-5' type="submit">
                                        Update Shop
                                        <RiLoginCircleLine className='icon-p ms-2' />
                                    </button>
                                </form>
                            </div>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default EditShop;