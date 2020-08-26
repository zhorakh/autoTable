import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../components/Table';
import { getData } from '../redux/actions/actions';

const AutosContainer = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.reducer.data);
	useEffect(() => {
		dispatch(getData());
	}, []);

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Table data={data} />
		</>
	);
};

export default AutosContainer;
