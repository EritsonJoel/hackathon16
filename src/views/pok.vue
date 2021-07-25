<template>
	<div class="container">
		<h1>pokemones - {{ $route.params.id }}</h1>
		<section>
			<div class="row">
				<div class="col-6 ">
					<p>Informacion del POKEMON</p>
					<h2 @click="detalle">Nombre: {{ contacto.name }}</h2>
					<!--
			<img alt="Vue logo" :src="contacto.url" />
			-->
					<div style="text-align:center">
						<img alt="Vue logo" :src="contacto.sprites.front_default" />
					</div>
					<p>T: {{ contacto.types.[0].type.name }}</p>
					<p>H: {{ contacto.abilities.[0].ability.name }}</p>
					<!--
			<router-link :to="`/contactos/`">Regresar</router-link>
			-->
					<div class="col-6">
						<router-link :to="`/`" class="btn btn-green">Regresar</router-link>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	computed: {
		...mapState(['contacto']),
	},
	methods: {
		...mapActions(['obtenerContactoAction']),
	},

	created() {
		this.obtenerContactoAction(this.$route.params.id);
	},
};


</script>

<style scoped>
h2 {
	font-size: 30px;
}
</style>