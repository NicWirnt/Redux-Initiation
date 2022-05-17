import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const { count } = useSelector((state) => {
    return state.counter;
  });
  return <div>value = {count}</div>;
};
