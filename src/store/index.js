import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      { nombre: 'Manzana', cantidad: 0 },
      { nombre: 'Pera', cantidad: 0 },
      { nombre: 'Naranja', cantidad: 0 },
    ]
  },
  mutations: {
    aumentarFrutas(state, index){
      state.frutas[index].cantidad++
    },
    resetFrutas(state){
      state.frutas.forEach(element => {
        element.cantidad = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
