

export const addMenu = function (menu) {
	console.log("addMenu called");
	return {
		type : 'ADD_MENU',
		payload : menu
	};
}
	

export const removeMenu = function (menu) {
	console.log("removeMenu called");
	return {
		type : 'REMOVE_MENU',
		payload : menu
	};
}


export const windowReducer = function () {
	return {
		type : 'INCREMENT_WINDOW',
		payload : 1 
	};
}
