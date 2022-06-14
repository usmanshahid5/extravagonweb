import React                     from 'react';
import { Row, Col, Form, Input } from 'antd';
import { Link }                  from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
      <Row className='d-flex align-items-center' style={ { height: '60em' } }>
        <Col lg={ 16 } style={ { position: 'relative' } }>
          <img
            src="https://carsoid.com/wp-content/uploads/2017/01/2017-Honda-Civic-Type-R-Black-Edition5-820x400.jpg"
            alt=""
          />
          <h1 className='login-logo'>ExtraVagant Foreigns</h1>
        </Col>
        <Col lg={ 8 } className='text-left p-5'>
          <Form layout='vertical' className='login-form p-5'>
            <h1>Login</h1>
            <hr/>
            <Form.Item name='username' label={ 'Username' } rules={ [{ required: true }] }>
              <Input/>
            </Form.Item>

            <Form.Item name='password' label={ 'Password' } rules={ [{ required: true }] }>
              <Input/>
            </Form.Item>

            <button className='btn1 mt-2'>Login</button>

            <hr/>

            <Link to={ '/register' }>Click Here to Register</Link>

          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Login