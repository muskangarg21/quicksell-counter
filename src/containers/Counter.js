import axios from "axios";
import React, { useEffect, useState } from "react";
import Counter from "../components/Counter";


const CounterContainer = () => {
	const [count, setCount] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [showCounter, setShowCounter] = useState(false);

	const maxValue = process.env.REACT_APP_COUNTER_MAX_VALUE || 1000;
	const minValue = 1;

	useEffect(() => {
		async function putCounterValue() {

			if (showCounter) {
				setIsLoading(true);

				await axios.put(process.env.REACT_APP_API_PUT_URL, { "muskan": count }).then((res) => {
				}, (err) => {
					console.log("err", err);
				});

				setIsLoading(false);
			}
		}
		putCounterValue();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [count]);

	useEffect(() => {
		async function getCounterValue() {
			await axios.get(process.env.REACT_APP_API_GET_URL).then((res) => {
				if (!res.data) {
					setCount(minValue);
				}
				else {
					setCount(res.data);
				}
			}, (err) => {
				console.log("err", err);
			});

			setShowCounter(true);
		}
		getCounterValue();
	}, []);

	return (
		<>
			{showCounter && <Counter count={count} setCount={setCount} isLoading={isLoading} MIN_VAL={minValue} MAX_VAL={maxValue} />}
		</>
	);
}

export default CounterContainer;
