<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <h1>Hello World</h1>
      <router-view></router-view>
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
*::before,
*,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

ul {
  list-style: none;
}

a,
a:link,
a:visited {
  text-decoration: none;
  color: #345;
}

img {
  display: block;
  max-width: 100%;
}

html {
  font-size: 62.5%;
}

body {
  font: 400 1.6rem Arial, Helvetica, sans-serif;
  background: url("@/assets/pattern.svg") repeat top;
  color: #345;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex:1;
}

.btn {
  display: block;
  padding: 1rem 3rem;
  background-color: #87f;
  border: none;
  border-radius: 0.4rem;
  text-align: center;
  font-family: inherit;
  font-size: 1.6rem;
  color: #fff !important;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.25);
  cursor: pointer;
  transition: 0.25s;
}

.btn:hover,
.btn:focus {
  background-color: #65d;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.35);
}
</style>
