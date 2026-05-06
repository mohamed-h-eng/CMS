import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../components/Home';
import { getUsers } from '../store/actions/user.actions';

export default function HomePage() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return <Home users={items} loading={loading} error={error} />;
}
