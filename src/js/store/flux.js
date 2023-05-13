const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cart: JSON.parse(localStorage.getItem("cart")) || []
		},
		actions: {
			addToCart: (cartera) => {
				const store = getStore()
				let exist = store.cart.find((item) => item.modelo == cartera.modelo)
				if(exist == undefined){
					let newCart = [...store.cart, cartera]
					setStore({...store, cart: newCart})
					localStorage.setItem("cart", JSON.stringify(newCart) )
				}else{
					let newCart = store.cart.filter((item) => item.modelo != cartera.modelo)
					setStore({...store, cart: newCart})
					localStorage.setItem("cart", JSON.stringify(newCart))
				}
			}
		}
	};
};

export default getState;
