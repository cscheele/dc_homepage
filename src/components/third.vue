<template>
  <div class="third">
    <h4 class="headers" v-bind:style="{ color: color}">{{ col_title }}</h4>
    <img v-bind:src='image'></img>
    <h3 class="article_title">{{article_title}}</h3>
  </div>
</template>

<script>
export default {
  name: 'third',
  props: ['col_title', 'article_title', 'image', 'color']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.third {
  width: 33%;
  text-align: center;
}
h3 {
  padding: 5px;
}

img {
  display: block;
  max-height:100%;
  max-width:80%;
  margin: 0 auto;
}
</style>