<template>
  <div class="threesplit">
    <third id="first" v-bind:col_title='first_c_t' v-bind:article_title='first_a_t' v-bind:image='first_i' v-bind:color='mycolor'></third>
    <third id="second" v-bind:col_title='sec_c_t' v-bind:article_title='sec_a_t' v-bind:image='sec_i' v-bind:color='mycolor'></third>
    <third id="third" v-bind:col_title='third_c_t' v-bind:article_title='third_a_t' v-bind:image='third_i' v-bind:color='mycolor'></third>
  </div>
</template>

<script>
import third from '@/components/third'

export default {
  name: 'threesplit',
  props: ['first_c_t', 'first_a_t', 'first_i', 'sec_c_t', 'sec_a_t', 'sec_i', 'third_c_t', 'third_a_t', 'third_i', 'mycolor'],
  components: {
    third
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#first, #second {
  float: left;
}
#second {
  border-right: thin solid #D3D3D3;
  border-left: thin solid #D3D3D3;
}
#third {
  float: right;
}
img {
  display: block;
  max-height:100%;
  max-width:100%;
}
</style>