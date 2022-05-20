<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/ranek.svg" alt="Ranek"
      /></router-link>
      <router-link to="/login" class="btn">Vender/Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  box-shadow: 0 0.2rem 0.4rem rgba(30, 60, 90, 0.1);
}

.logo {
  padding: 1rem 0;
}

.logo img {
  width: 9rem;
  transition: 0.25s;
}

.logo img:hover {
  filter: brightness(1.25);
}
</style>
