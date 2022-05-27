import React, { useEffect } from 'react';
import { RiLoginCircleLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../actions/categories';

const AddShop = () => {

    // all categories
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    const categories = useSelector((state) => state.categories);


    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleAddShop = data => {
        const today = new Date();
        const month = today.getUTCMonth() + 1;
        const day = today.getUTCDate();
        const year = today.getUTCFullYear();

        const newdate = ( year + "-" + month + "-" + day);

        const { name, area, category, openingDate, ClosingDate } = data;

        const splitClosingDate = ClosingDate.split('-');
        const yearClosingDate = splitClosingDate[0];
        // const monthClosingDate = splitClosingDate[1];
        const dayClosingDate = splitClosingDate[2];

        let status = true;

        if(yearClosingDate <= year){
            if(dayClosingDate <= day){
                status = false;
            }
        }else{
            status = true;
        }

        const shopData = { 
            name: name, area: area, category: category, openingDate: openingDate, ClosingDate: ClosingDate, status: status 
        }


        console.log('status', shopData);
    }

    return (
        <section className="tasks my-50">
            <Container>

                <Row>
                    <Col md={12}>
                        <Card body>

                            <div className="task__header px-3">
                                <Row className='justify-content-between align-items-center'>
                                    <Col md={2}>
                                        <h2 className='task-title'>Add Task</h2>
                                    </Col>
                                    <Col md={2}>
                                        <div className="text-end">
                                            <Link to='/' className='btn btn-task'>View Tasks</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <hr />

                            <div className="task__body mt-5 card p-4">
                                <form onSubmit={handleSubmit(handleAddShop)}>

                                    <div className='mt-4'>
                                        <Form.Label htmlFor="name" className='ps-1'>Task Name</Form.Label>
                                        <Form.Control type="text" {...register('name', { required: {
                                            value: true,
                                            message: 'Shop name is required.'
                                        },
                                        pattern: {
                                            value: /^[A-Z]+$/i,
                                            message: 'Only alphabets please.'
                                        } })} placeholder='Your Task Name' />
                                       {errors.name?.type === 'required' && <p className='text-danger mt-1 text-center'>{errors.name.message}</p>}
                                       {errors.name?.type === 'pattern' && <p className='text-danger mt-1 text-center'>{errors.name.message}</p>}
                                    </div>

                                    <div className='mt-4'>
                                        <Form.Label htmlFor="area" className='ps-1'>Area</Form.Label>
                                        <Form.Select {...register('area', { required: true })}>
                                            <option value=''>Select Area</option>
                                            <option value="Thane">Thane</option>
                                            <option value="Pune">Pune</option>
                                            <option value="Mumbai Suburban">Mumbai Suburban</option>
                                            <option value="Nashik">Nashik</option>
                                            <option value="Nagpur">Nagpur</option>
                                            <option value="Nagpur">Ahmednagar</option>
                                            <option value="Nagpur">Solapur</option>
                                        </Form.Select>

                                        {errors.area && <p className='p-0 text-danger text-center'>Area is required.</p>}
                                    </div>

                                    <div className='mt-4'>
                                        <Form.Label htmlFor="category" className='ps-1'>Category</Form.Label>
                                        <Form.Select {...register('category', { required: true })}>
                                            <option value=''>Select Category</option>
                                            <option value="Grocery">Grocery</option>
                                            <option value="Butcher">Butcher</option>
                                            <option value="Baker">Baker</option>
                                            <option value="Chemist">Chemist</option>
                                            <option value="Stationery shop">Stationery shop</option>
                                        </Form.Select>

                                        {errors.category && <p className='p-0 text-danger text-center'>Category is required.</p>}
                                    </div>

                                    <div className='mt-4'>
                                        <Form.Label htmlFor="openingDate" className='ps-1'>Opening Date</Form.Label>
                                        <Form.Control type="date" {...register('openingDate', { required: true })} />
                                        {errors.openingDate && <p className='p-0 text-danger text-center'>Opening Date is required.</p>}
                                    </div>

                                    <div className='mt-4'>
                                        <Form.Label htmlFor="ClosingDate" className='ps-1'>Closing Date</Form.Label>
                                        <Form.Control type="date" id='ClosingDate' {...register('ClosingDate', { required: true })} />
                                        {errors.ClosingDate && <p className='p-0 text-danger text-center'>Closing Date is required.</p>}
                                    </div>

                                    <button className='btn btn-primary py-2 w-100 mt-5' type="submit">
                                        Add Task
                                        <RiLoginCircleLine className='form__btn-icon' />
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

export default AddShop;