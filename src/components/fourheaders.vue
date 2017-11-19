<template>
  <div class="fourheaders">
    <h4 class="headers top">{{ first_h }}</h4>
    <h3 class="article_title">{{ first_t }}</h3>
    <h4 class="headers">{{ sec_h }}</h4>
    <h3 class="article_title">{{ sec_t }}</h3>
    <h4 class="headers">{{ third_h }}</h4>
    <h3 class="article_title">{{ third_t }}</h3>
    <h4 class="headers">{{ fourth_h }}</h4>
    <h3 class="article_title">{{ fourth_t }}</h3>
  </div>
</template>

<script>
export default {
  name: 'fourheaders',
  props: ['first_h', 'first_t', 'sec_h', 'sec_t', 'third_h', 'third_t', 'fourth_h', 'fourth_t']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fourheaders {
  width: 60%;
  text-align: left;
  float: left;
  max-height: 100%;
  padding: 10px;
  padding-bottom: 20px;
}
.headers {
  color: #add8e6;
  margin-bottom: 0px;
}
h3 {
  padding: 5px;
}
.top {
  margin-top: 0px;
}
.article_title {
  font-family: 'Tiempos Headline';
  margin: 0px;
}
</style>