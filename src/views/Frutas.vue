<template>
  <div class="container bg-warning">
    <h1>Frutas</h1>
    <b-list-group>
      <b-list-group-item
      v-for="(fruta, index) of frutas"
      :key="index"
      @click="aumentarFrutas(index)"
      class="d-flex justify-content-between align-items-center">
        {{fruta.nombre}}
        <b-badge variant="primary" pill>{{fruta.cantidad}}</b-badge>
      </b-list-group-item>
      <div>
        <b-button @click="resetFrutas()"  block variant="danger">Reset</b-button>
      </div>
    </b-list-group>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState(['frutas'])
    },
    methods:{
        ...mapMutations(['aumentarFrutas', 'resetFrutas'])
    }
    
};
</script>

<style>
</style>