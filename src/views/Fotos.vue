<template>
  <div>
    <h1>Galeria de fotos</h1>
    <router-link
      v-for="(foto, index) of fotos"
      :key="index"
      :to="{name: 'Fotos', params: {id : foto} }"
    >
      <button>{{foto}}</button>
    </router-link>
    <Foto />

    <button @click="anterior()">Anterior</button>
    <button @click="home()">Home</button>
    <button @click="siguiente()">Siguiente</button>
  </div>
</template>

<script>
import Foto from "@/components/Fotografia.vue";
export default {
  data() {
    return {
      fotos: [1, 2, 3]
    };
  },
  components: {
    Foto
  },
  methods:{
      home(){
          this.$router.push('/')
      },
      anterior(){
          this.$router.go(-1)
      },
      siguiente(){
          this.$router.go(1)
      }
      
  }
};
</script>

<style>
</style>