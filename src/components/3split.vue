<template>
  <div class="3split">
    <third col_title=1c_t article_title=1a_t image=1i></third>
  </div>
</template>

<script>
import third from '@components/third'

export default {
  name: '3split',
  props: ['1c_t', '1a_t', '1i', '2c_t', '2a_t', '2i', '3c_t', '3a_t', '3i'],
  components: {
    third
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: heavy;
}


img {
  display: block;
  max-height:100%;
  max-width:100%;
}

.art {
  text-align: center;
}
</style>