import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementAsync,
  incrementByAmount,
} from '../state/counter/counterSlice';
import { AppDispatch, RootState } from '../state/store';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex items-center justify-center h-screen w-screen text-3xl">
      <button
        className="bg-slate-600 rounded p-2 m-2"
        onClick={() => dispatch(incrementAsync(100))}
      >
        Async +100
      </button>
      <button
        className="bg-slate-600 rounded p-2 m-2"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        +10
      </button>
      <button className="bg-slate-600 rounded p-2 m-2" onClick={() => dispatch(increment())}>
        +
      </button>
      <h2 className="m-4 text-5xl">{count}</h2>
      <button className="bg-slate-600 rounded p-2 m-2" onClick={() => dispatch(decrement())}>
        -
      </button>
      <button
        className="bg-slate-600 rounded p-2 m-2"
        onClick={() => dispatch(decrementByAmount(10))}
      >
        -10
      </button>
    </div>
  );
};

export default Counter;
