export function getData() {
	return (dispatch) => {
		fetch('/api/autos').then((response) => {
			try {
				response.json().then((res) => {
					return dispatch({
						type: 'GET_DATA',
						payload: res,
					});
				});
			} catch (e) {
				console.log(e);
			}
		});
	};
}
