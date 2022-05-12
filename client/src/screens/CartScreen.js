import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartScreen = () => {
  const { id } = useParams();
  const qty = useLocation();
  console.log(qty);
  const dispatch = useDispatch();
  console.log(dispatch);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);
  return <div>CartScreen</div>;
};

export default CartScreen;
