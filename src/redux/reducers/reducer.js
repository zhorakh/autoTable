const initState = {
	data: null,
};

export default function reducer(state = initState, action) {
	switch (action.type) {
		case 'GET_DATA': {
			const newData = [];
			for (let country of action.payload) {
				for (let brand of country.children) {
					for (let model of brand.children) {
						let year = null;
						let vin = null;
						if (model.children.type === 'year') {
							year = model.children.value.toString();
							for (vin of model.children.children) {
								newData.push({
									country: country.value,
									brand: brand.value,
									model: model.value,
									year: year,
									vin: vin.value,
								});
							}
						} else {
							vin = model.children.value;
							newData.push({
								country: country.value,
								brand: brand.value,
								model: model.value,
								year: year,
								vin: vin,
							});
						}
					}
				}
			}
			return {
				...state,
				data: newData,
			};
		}
		default:
			return state;
	}
}
