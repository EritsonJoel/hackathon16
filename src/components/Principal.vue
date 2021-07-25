<template>
	<div>
		<header>
			<div class="header">
				<div class="row">
					<div class="col colorWhite">
						<router-link :to="`/`" class="btn btn-red">
							<strong>pokemones</strong>
						</router-link>
					</div>
					
				</div>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	name: 'Principal',

	
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
	position: fixed;
	width: 100%;
	top: 0;
}
</style>