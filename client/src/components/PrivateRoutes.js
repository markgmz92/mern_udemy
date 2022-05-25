import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const user = localStorage.getItem('userInfo');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate('/shipping');
    } else {
      navigate('/login');
    }
  }, [dispatch, user, navigate]);
};

export default PrivateRoutes;
