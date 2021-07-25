<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Lista POKEMON</h1>
  <div>
   
   <p v-for="(results, index) in arreglo" :key="index">{{results}}</p>
  

  
  
  </div>
  </div>
</template>

<script>  
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  
  },
  data(){
    return{
      pokemon:[],
      arreglo: [],
    };
  },

  methods:{
    async getpokemon(){
      const   data = await fetch('https://pokeapi.co/api/v2/pokemon/');
       const info = await data.json();
       this.pokemon = info;
      
       arreglo = Object.values(pokemon);
      
    },
      
    
    
    

  },
  created(){
    this.getpokemon();
  },

}
</script>

<style scoped>
h1{
  color: blue

}
div{
  width: 100%;
  height: 100px;
  border: 1px solid black;
}
</style>
