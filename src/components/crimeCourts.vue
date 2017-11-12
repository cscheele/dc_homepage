<template>
  <div class="crimeCourts">
	<div class="left">
	  <h4>{{ title }}</h4>
	  <h1> {{ article }}</h1>
	</div>
	<div class="right">
	  <img v-bind:src="image"></img>
	</div>
  </div>
</template>

<script>
export default {
  name: 'crimeCourts',
  data () {
    return {
      title: 'CRIME & COURTS',
      article: 'BUSD, Berkeley Federation of Teachers reach tentative contract agreement',
      image: 'https://psmag.com/.image/t_share/MTI3NTgyNTc2NjM3Mzg5NDQz/sproul-plaza-rally.jpg',
      input_val: ''
    }
  }
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
  width: 50%;
}

.left {
  float: left;
  width: 50%;
}

img {
  display: block;
  max-height:100%;
  max-width:100%;
}
</style>
