import { createStore } from 'vuex'

export default createStore({
  state: {

    URLX: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20/',
    i : 0,
    f : 20,
    contactos: [],
    contacto: {
      
      nombre: '',
      url: '',

    },


  },
  mutations: {
    setContactosMutation(state, payload) {
			//	state.contactos.push(payload);
			state.contactos = payload;
		},
		deleteContactoMutation(state, payload) {
			//	console.log(state.contactos);
			//	console.log(payload);
			//	state.contactos.push(payload);
			state.contactos = state.contactos.filter(
				(contacto) => contacto.id !== payload
			);
		},
		obtenerContactoMutation(state, payload) {
			state.contacto = state.contactos.find(
				(contacto) => contacto.id === parseInt(payload)
			);
			//console.log('hola');
			//console.log(state.contacto);
		},
		actualizarContactoMutation(state, payload) {
			//state.contacto = state.contactos.find((contacto) => contacto.id === payload);
			//console.log('hola');
			//console.log(state.contacto);
			state.contactos = state.contactos.map((contacto) => {
				return contacto.id === payload.id ? { ...payload } : contacto;
			});
		},
		crearContactoMutation(state, payload) {
			state.contactos.push(payload);
		},
		nextContactoMutation(state, payload) {
			state.ini += 20;
			//	state.fin += parseInt(payload);
		},
		prevContactoMutation(state, payload) {
			if ((state.ini = 0)) {
			} else {
				state.ini -= 20;
				//		state.fin -= parseInt(payload);
			}
		},
	},

  },
  actions: {
    
  },
  modules: {
  }
})
