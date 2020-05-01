<template>
  <div class="mt-5">
    <h1>Forms</h1>

    <b-row>
      <b-col md="3">
        <b-form-input
          v-model="texto"
          type="text"
          :state="minimo3"
        ></b-form-input>
        <small>Minimo 3 caracteres</small>
        <p>Texto: {{ texto }}</p>
      </b-col>
      <b-col md="3">
        <b-form-select v-model="selected" :options="animales"></b-form-select>
        <p>Selecion: {{selected}}</p>
      </b-col>
      <b-col md="3">
          <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
          <p>Radio: {{radio}} </p>
      </b-col>

      <b-col md="3">
          <b-form-checkbox-group v-model="checkbox" :options="animalesCheckbox">
              <p>Selected: {{checkbox}} </p>
          </b-form-checkbox-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Forms",
  data() {
    return {
      texto: "",
      selected: null,
      radio: null,
      checkbox: [],
      animales: [
        { value: null, text: "Seleccione un animal" },
        { value: "Perro", text: "Guau guau" },
        { value: "Gato", text: "Miau" },
        { value: "Pato", text: "Cuack" }
      ],
      animalesRadio: [
        { value: "Perro", text: "Guau guau" },
        { value: "Gato", text: "Miau" },
        { value: "Pato", text: "Cuack" }
      ],
      animalesCheckbox: [
        { value: "Perro", text: "Guau guau" },
        { value: "Gato", text: "Miau" },
        { value: "Pato", text: "Cuack" },
        { value: "Pato1", text: "Pato" },
        { value: "gallina", text: "gallina" },
        { value: "Cochino", text: "Cochino" },
      ]
    };
  },
  computed: {
    minimo3() {
      return this.texto.length > 2 ? true : false;
    }
  }
};
</script>

<style></style>
