<template>
  <div class="d-flex justify-content-center align-items-center" id="not-found">
    <h1
      class="mr-3 pr-3 align-top border-right inline-block align-content-center"
    >
      404
    </h1>
    <div class="inline-block align-middle">
      <h2 class="font-weight-normal lead" id="desc">
        The page you requested was not found.
      </h2>
      <router-link class="back" :to="{ name: 'home' }"
        >Go Back To Home Page</router-link
      >
    </div>
  </div>
</template>

<style scoped>
#not-found {
  height: 100vh;
}
.back {
  font-style: italic;
  color: darkblue;
  cursor: pointer;
  text-decoration: none;
  font-size: 12px;
}
</style>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goBackToHomePage() {
      alert('Clicked')
    },
  },
}
</script>
