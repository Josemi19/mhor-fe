const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cart: []
		},
		actions: {
			addToCart: (cartera) => {
				const store = getStore()
				let exist = store.cart.find((item) => item.modelo == cartera.modelo)
				if(exist == undefined){
					setStore({...store, cart:[...store.cart, cartera]})
				}else{
					setStore({...store, cart:store.cart.filter((item) => item.modelo != cartera.modelo)})
				}
			}
		}
	};
};

export default getState;
