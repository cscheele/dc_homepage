<template>
  <div class="art">
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'art',
  data () {
    return {
      title: 'VISUAL ART',
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


img {
  display: block;
  max-height:100%;
  max-width:100%;
}

.art {
  text-align: center;
}
</style>