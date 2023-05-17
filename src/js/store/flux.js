import {toast} from "react-toastify"

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
					toast.success("Agregado con exito", {
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
						});
				}else{
					let newCart = store.cart.filter((item) => item.modelo != cartera.modelo)
					setStore({...store, cart: newCart})
					localStorage.setItem("cart", JSON.stringify(newCart))
				}
			},
			getTotal: () => {
				const store = getStore()
				let total = 0
				for (let cartera of store.cart) {
					total = total + cartera.precio
				}
				return total;
			}
		}
	};
};

export default getState;
