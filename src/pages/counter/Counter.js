import { Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "./counterSlice";
export default function Counter() {
  //   const value = useSelector((state) => state.counter.value); // state bilgilerine erişme
  const { value } = useSelector((state) => state.counter); // counterSlice içindeki "counter" adındaki state in içindeki verileri alma
  const dispatch = useDispatch(); //metodlara erişme

  return (
    <>
      <Typography>{value}</Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button onClick={() => dispatch(incrementByValue(5))}>
          IncrementByValue
        </Button>
      </ButtonGroup>
    </>
  );
}
