import { useDispatch } from "react-redux";
import { increament, decreament } from "./actions/index";

const Main = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button>
    </div>
  );
};

export default Main;
