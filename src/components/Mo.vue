<template>
    
    
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	name: 'Modal Agregar',
	data() {
		return {
			nombreMo: 'AGREGAR POKEMONES',
			nombre1: 'POKEMONES',
			NombreLista: 'Lista de POKEMONES',
			contacto: {
				id: '',
				nombre: '',
				visualizaciones: '',
				url: './img/silueta.jpg',
				telefono: '',
				correo: '',
				pais: '',
				about: '',
			},
		};
	},
	
	methods: {
		...mapActions(['crearContactoAction']),

		crearContacto(contacto) {
			this.crearContactoAction(contacto);
			this.contacto = {
				id: '',
				nombre: '',
				visualizaciones: '',
				url: './img/silueta.jpg',
				telefono: '',
				correo: '',
				pais: '',
				about: '',
			};
		},
	},
	

};






</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>,