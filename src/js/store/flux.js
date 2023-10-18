import { toast } from "react-toastify"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cart: JSON.parse(localStorage.getItem("cart")) || [],
			dolar: null,
			carteras: JSON.parse(sessionStorage.getItem("carteras")) || [],
			prendas: JSON.parse(sessionStorage.getItem("prendas")) || []
		},
		actions: {

			addToCart: (product) => {
				const store = getStore()
				let exist = store.cart.find((item) => (item.id == product.id && item.attributes.nombre == product.attributes.nombre))
				if (exist == undefined) {
					let newCart = [...store.cart, product]
					setStore({ ...store, cart: newCart })
					localStorage.setItem("cart", JSON.stringify(newCart))
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
				} else {
					let newCart = store.cart.filter((item) => item.id != product.id && item.attributes.nombre != product.attributes.nombre)
					setStore({ ...store, cart: newCart })
					localStorage.setItem("cart", JSON.stringify(newCart))
				}
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
				const response = await fetch("https://venecodollar.vercel.app/api/v2/dollar/entity?name=BCV")
				const data = await response.json()
				const store = getStore()
				setStore({ ...store, dolar: data.Data.info.dollar })
			},

			getCarteras: async () => {
				const store = getStore()
				if (store.carteras.length != 0) return
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/carteras?populate=*`, {
						method: 'GET',
						headers: {
							"Authorization": `Bearer ${process.env.API_KEY}`
						}
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ ...store, carteras: data.data })
						sessionStorage.setItem("carteras", JSON.stringify(data.data))
					}
				} catch (error) {
					console.error(error)
				}
			},

			getPrendas: async () => {
				const store = getStore()
				if (store.prendas.length != 0) return
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/prendas?populate=*`, {
						method: 'GET',
						headers: {
							"Authorization": `Bearer ${process.env.API_KEY}`
						}
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ ...store, prendas: data.data })
						sessionStorage.setItem("prendas", JSON.stringify(data.data))
					}
				} catch (error) {
					console.error(error)
				}
			},

			existeProducto: (product) => {
				const store = getStore()
				let existe = store.cart.find((item) => item.id == product.id && item.attributes.nombre == product.attributes.nombre)
				return existe
			},

			handleFinishPayment: () => {
				const store = getStore()
				toast.success(`Pedido realizado con exito`, {
					position: "top-right",
					autoClose: 2500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				})
				setStore({ ...store, cart: [] })
				localStorage.removeItem("cart")
			}
		}
	};
};

export default getState;
