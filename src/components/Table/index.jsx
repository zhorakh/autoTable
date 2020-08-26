import React, { useState } from 'react';
import './style.css';

const Table = ({ data }) => {
	const [keyword, setKeyword] = useState('');
	const [autosArr, setAutosArr] = useState(data);

	const onChange = (e) => {
		const newKeyword = e.target.value;
		setKeyword(newKeyword);
		const lowercaseFilter = newKeyword.toLowerCase();
		if (newKeyword === '') {
			setAutosArr(data);
			return;
		}
		const filteredData = autosArr.filter((item) => {
			return Object.keys(item).some((key) => {
				if (item[key]) {
					return item[key].includes(lowercaseFilter);
				}
			});
		});
		setAutosArr(filteredData);
	};
	const renderHeader = () => {
		const headerElement = ['country', 'brand', 'model', 'year', 'vin'];

		return headerElement.map((key, index) => {
			return <th key={index}>{key.toUpperCase()}</th>;
		});
	};

	const renderBody = () => {
		return (
			autosArr &&
			autosArr.map((item, index) => {
				return (
					<tr key={index}>
						<td>{item.country}</td>
						<td>{item.brand}</td>
						<td>{item.model}</td>
						<td>{item.year}</td>
						<td>{item.vin}</td>
					</tr>
				);
			})
		);
	};

	return (
		<>
			<h1 className='title'>React Autos Table</h1>
			<div className='search'>
				<label> Search </label>
				<input value={keyword} onChange={onChange} />
			</div>
			<table className='employee'>
				<thead>
					<tr>{renderHeader()}</tr>
				</thead>
				<tbody>{renderBody()}</tbody>
			</table>
		</>
	);
};

export default Table;
