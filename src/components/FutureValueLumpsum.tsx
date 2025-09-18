import { useState, useEffect } from "react";

const FutureValueLumpsum = () => {
	const [presentValue, setPresentValue] = useState<string>("");
	const [interest, setInterest] = useState("");
	const [years, setYears] = useState("");
	const [futureValue, setFutureValue] = useState<number>(0);

	const calculateFutureValue = (pv: number, i: number, n: number) => {
		return pv * Math.pow(1 + i / 100, n);
	};

	useEffect(() => {
		setFutureValue(0);
	}, []);

	useEffect(() => {
		if (presentValue && interest && years) {
			setFutureValue(
				calculateFutureValue(
					parseInt(presentValue),
					parseFloat(interest),
					parseInt(years)
				)
			);
		}
	}, [presentValue, interest, years]);
	return (
		<>
			<div className='mb-3'>
				<label
					htmlFor='presentvalue'
					className='form-label'>
					Present Value
				</label>
				<input
					data-testid='presentvalue'
					value={presentValue}
					onChange={(e) => {
						setPresentValue(e.target.value);
					}}
					type='text'
					className='form-control'
					id='presentvalue'
					placeholder='Eg. 100, 500, 10000'
				/>
			</div>
			<div className='mb-3'>
				<label
					htmlFor='interest'
					className='form-label'>
					Interest
				</label>
				<input
					data-testid='interest'
					value={interest}
					onChange={(e) => {
						setInterest(e.target.value);
					}}
					type='text'
					className='form-control'
					id='interest'
					placeholder='between 0-100'
				/>
			</div>
			<div className='mb-3'>
				<label
					htmlFor='durationinyears'
					className='form-label'>
					Years invested
				</label>
				<input
					data-testid='years'
					value={years}
					onChange={(e) => {
						setYears(e.target.value);
					}}
					type='text'
					className='form-control'
					id='durationinyears'
					placeholder='Eg. 1, 2, 10, 20'
				/>
			</div>
			<p data-testid='futurevalue'>
				Your future value is {futureValue.toFixed(2)}
			</p>
		</>
	);
};

export default FutureValueLumpsum;
