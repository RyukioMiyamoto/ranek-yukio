<template>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "PaginaCarregando",
};
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 5rem;
}

.loading span {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
}

.loading span:first-child {
  animation: jump 1s infinite ease-in-out;
}

.loading span:nth-child(2) {
  animation: jump 1s infinite ease-in-out 0.25s;
}

.loading span:nth-child(3) {
  animation: jump 1s infinite ease-in-out 0.5s;
}

.loading span:nth-child(4) {
  animation: jump 1s infinite ease-in-out 0.75s;
}

@keyframes jump {
  0% {
    transform: translateY(.5rem);
    background-color: transparent;
  }
  50% {
    transform: translateY(-1.5rem);
    background-color: #87f;
    box-shadow: 0 2rem 1rem 0.025rem rgba(30, 60, 90, 0.125);
  }
  100% {
    transform: translateY(.5rem);
    background-color: transparent;
  }
}
</style>
