<template>
  <div class='nofound'>
    <h2 v-if="error.statusCode==404">404</h2>
  </div>
</template>

<script>
export default {
  props: ['error'],
  data() {
    return {

    }
  }
}
</script>
<style scoped>
</style>