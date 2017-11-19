<template>
  <div class="splitRectangle">
  <div class="left">
    <h4 class="headers titles">{{ title }}</h4>
    <h1> {{ article }}</h1>
  </div>
  <div class="right">
    <img v-bind:src="image"></img>
  </div>
  </div>
</template>

<script>
export default {
  name: 'splitRectangle',
  props: ['title', 'article', 'image']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: heavy;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.right {
  float: right;
  width: 60%;
}

.left {
  float: left;
  width: 40%;
}

img {
  display: block;
  max-height:100%;
  max-width:100%;
}
</style>