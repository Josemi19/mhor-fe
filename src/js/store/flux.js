import {toast} from "react-toastify"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cart: JSON.parse(localStorage.getItem("cart")) || [],
			dolar: null,
			carteras:[],
			prendas:[]
		},
		actions: {
			addToCart: (product) => {
				const store = getStore()
				let exist = store.cart.find((item) => item.id == product.id && item.nombre == product.nombre)
				if(exist == undefined){
					let newCart = [...store.cart, product]
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
					let newCart = store.cart.filter((item) => item.id != product.id && item.nombre != product.nombre)
					setStore({...store, cart: newCart})
					localStorage.setItem("cart", JSON.stringify(newCart))
				}
				return exist;
			},
			getTotal: () => {
				const store = getStore()
				let total = 0
				for (let product of store.cart) {
					total = total + product.attributes.precio
				}
				return total;
			},

			getDollarPrice: async () => {
				const response = await fetch("https://venecodollar.vercel.app/api/v1/dollar")
				const data = await response.json()
				const store = getStore()
				setStore({...store, dolar: data.Data.entities[0].info})
			},

			getCarteras: async () => {
				const store = getStore()
				const response = await fetch(`${process.env.BACKEND_URL}/carteras?populate=*`, {
					method: 'GET',
					headers:{
						"Authorization": `Bearer ${process.env.API_KEY}`
					}
				})
				const data = await response.json()
				setStore({...store, carteras: data.data})
			},
			getPrendas: async () => {
				const store = getStore()
				const response = await fetch(`${process.env.BACKEND_URL}/prendas?populate=*`, {
					method: 'GET',
					headers:{
						"Authorization": `Bearer ${process.env.API_KEY}`
					}
				})
				const data = await response.json()
				setStore({...store, carteras: data.data})
			}
		}
	};
};

export default getState;
