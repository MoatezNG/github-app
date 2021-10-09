import { RootState, useAppDispatch } from 'client/_redux/app/store';
import { incrementAction } from 'client/_redux/reducers/counterReducer';
import React from 'react';
import { useSelector } from 'react-redux';

const Home: React.FC = () => {
  const { count } = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <h1>{`The count is: ${count}`}</h1>
      <button type="button" onClick={() => dispatch(incrementAction())}>
        Display Even Numbers
      </button>
    </div>
  );
};

export default Home;
