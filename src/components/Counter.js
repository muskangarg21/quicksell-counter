import "../App.css";
import Loader from "./Loader";
import CounterText from "./CounterText";

const Counter = (props) => {

  const onChangeInputCount = (e) => {
    const newCount = e.target.value;
    if (newCount >= props.MIN_VAL && newCount <= props.MAX_VAL) {
      props.setCount(parseInt(newCount));
    }
  };

  const onClickIncrement = () => {
    if (parseInt(props.count) < props.MAX_VAL) {
      props.setCount(parseInt(props.count) + 1);
    }
  };

  const onClickDecrement = () => {
    if (props.count > props.MIN_VAL) {
      props.setCount(parseInt(props.count) - 1);
    }
  };

  const selectAll = (e) => {
    e.target.select();
  };

  return (
    <div className="container-outer">
      <div className="container-inner">

        {props.isLoading && <Loader />}

        <div className="counter-buttons">
          <button className="counter-button-decrement" onClick={onClickDecrement}>-</button>
          <input className="counter-count" onChange={onChangeInputCount} value={props.count} onFocus={selectAll} />
          <button className="counter-button-increment" onClick={onClickIncrement}>+</button>
        </div>

        <CounterText count={props.count} />

      </div>
    </div>
  );
}

export default Counter;
