<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">NavBar</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'Home' }" >Home</b-nav-item>
            <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
            <b-nav-item :to="{ name: 'Frutas' }">Frutas</b-nav-item>
            <b-nav-item :to="{ name: 'Fotos' }">Fotos</b-nav-item>
            <b-nav-item :to="{ name: 'Grid' }">Grid</b-nav-item>
            <b-nav-item :to="{ name: 'Cards' }">Cards</b-nav-item>
            <b-nav-item :to="{ name: 'Forms' }">Forms</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
