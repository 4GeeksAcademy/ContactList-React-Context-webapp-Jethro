
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });

			},

			addContact: async (full_name, email, phone, address) => {
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(
						{
							full_name: full_name,
							email: email,
							phone: phone,
							address: address,
							agenda_slug: "jethro_agenda"
						}),
					headers: {
						"Content-Type": "application/json"
					},
				})
				const data = await response.json();
			},

			updateContact: async (full_name, email, phone, address, contact_id) => {
				let contact = {
					full_name: full_name,
					email: email,
					phone: phone,
					address: address,
					agenda_slug: "jethro_agenda",
				}
				console.log(contact);
				fetch('https://playground.4geeks.com/apis/fake/contact/' + contact_id, {

					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
						contact
					)
				})

			},


			deleteContact: async (contact_id) => {


				fetch('https://playground.4geeks.com/apis/fake/contact/' + contact_id, {

					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}

				})
			},

			getContact: async () => {
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/jethro_agenda")
				const data = await response.json()
				setStore({ contacts: data })
			}

			/*addUser : async = ()=>{

				const contact = {full_name: "Jethro Guerrier",
				email : "guerrier.jethro@gmail.com",
				phone :"7864445566",
				address :"47568 NW 34ST, 33434 FL, USA",  }

				//try{			

				Fetch('https://playground.4geeks.com/apis/fake/contact/agenda/jethro',{
				
				method: "POST",
				headers: {
				  "Content-Type": "application/json"
				},			  
				  body:	JSON.stringify({
					  contact
									   
				  })
				})				
			//}catch(error){
				//console.log(error)
			//}
			}
			*/
		}
	};
};

export default getState;
