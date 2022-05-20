<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <transition mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

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
  flex: 1;
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
  box-shadow: 0 0.4rem 0.8rem rgba(30, 60, 90, 0.25);
  cursor: pointer;
  transition: 0.25s;
}

.btn:hover,
.btn:focus {
  background-color: #65d;
  transform: translateY(-0.2rem);
  box-shadow: 0 0.4rem 0.8rem rgba(30, 60, 90, 0.35);
}

label {
  max-width: .5rem;
}

input,
textarea {
  padding: 1.5rem;
  border: 0.1rem solid #fff;
  border-radius: 0.4rem;
  font-family: inherit;
  font-size: 1.6rem;
  box-shadow: 0 0.4rem 0.8rem rgba(30, 60, 90, 0.1);
  margin-bottom: 1.5rem;
  transition: 0.25s;
}

input:focus,
textarea:focus,
input:hover,
textarea:hover {
  border-color: #87f;
  box-shadow: 0 0.6rem 1.2rem rgba(30, 60, 90, 0.25);
}

input::placeholder {
  color: #cdcdcd;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave.active {
  transition: 0.25s;
}

.v-enter {
  transform: translate3d(0, -2rem, 0);
}

.v-leave-to {
  transform: translate3d(0, 2rem, 0);
}
</style>
