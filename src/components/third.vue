<template>
  <div class="third">
    <h4 class="col_title">{{ col_title }}</h4>
    <img src=img></img>
    <h3 class="article_title">{{article_title}}</h3>
  </div>
</template>

<script>
export default {
  name: 'third',
  props: ['col_title', 'article_title', 'img']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col_title {
  font-family: 'Tiempos Headline';
}

.article_title {
  font-family: 'BentonSans';
}

img {
  display: block;
  max-height:100%;
  max-width:100%;
}
</style>