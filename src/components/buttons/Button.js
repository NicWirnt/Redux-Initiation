import React from "react";
import { increaseCount, decreaseCount } from "./counterSlice";
import { useDispatch } from "react-redux";

export const Button = () => {
  const dispatch = useDispatch();

  const inCount = () => {
    dispatch(increaseCount());
  };
  const deCount = () => {
    dispatch(decreaseCount());
  };

  return (
    <div>
      <button onClick={inCount}>Increment</button>
      <button onClick={deCount}>Decrement</button>
    </div>
  );
};
