<template>
  <div id="app">
    <h4 class='headers'>FEATURED STORIES</h4>
	<splitRectangle title="Crime & Courts" article='BUSD, Berkeley Federation of Teachers reach tentative contract agreement' v-bind:image='image'/>
  <div class="section">
	<threesplit first_c_t='campus' first_a_t="Intercolleigate Athletics task force makes recommendations, doesn't cut sports" v-bind:first_i="image" sec_c_t='city' sec_a_t="State Senate passes bill extending last-call to 4 a.m." v-bind:sec_i="image" third_c_t='visual art' third_a_t="First Congregational Church of Berkeley opens doors after fire" v-bind:third_i='image'></threesplit>
  </div>
  <div class="section">
  <h3 class='headers titles'>news</h3>
  <third class="lefty" col_title='visual art' article_title="UC Berkeley MFA graduates exhibit innovative explorations of identity, change at BAMPFA" v-bind:image="image"></third>
  <fourheaders v-bind:first_h="news_h1" v-bind:first_t="news_a1" v-bind:sec_h="news_h2" v-bind:sec_t="news_a2" v-bind:third_h="news_h3" v-bind:third_t="news_a3" v-bind:fourth_h="news_h4" v-bind:fourth_t="news_a4"/>
  </div>
  <div class='section'>
  <h3 class="headers titles">opinion</h3>
  <threesplit v-bind:first_c_t='op1' v-bind:first_a_t='op1_a' v-bind:first_i="image" v-bind:sec_i="image" v-bind:third_i="image" v-bind:sec_c_t="op2" v-bind:sec_a_t="op2_a" third_c_t="op3" v-bind:third_a_t="op3_a"/>
</div>
<div class="section">
  <h3 class="headers titles">sports</h3>
  <threesplit v-bind:first_c_t='sport1' v-bind:sec_c_t='sport2' v-bind:third_c_t='sport3' v-bind:first_a_t="sport1_a" v-bind:sec_a_t="sport2_a" v-bind:third_a_t="sport3_a" v-bind:first_i='image' v-bind:sec_i='image' v-bind:third_i='image'/>
</div>
<div class="section">
  <h3 class="headers">multimedia</h3>
  <img class="left_img" v-bind:src="image"/>
  <div class="right_txt">
    <h4 class="headers titles">{{ mult_t }}</h4>
    <h1> {{ mult_a }}</h1>
  </div>
  </div>
<div class="section">
  <h3 class="headers titles">arts & entertainment</h3>
  <threesplit v-bind:first_c_t='art1' v-bind:sec_c_t='art2' v-bind:third_c_t='art3' v-bind:first_a_t="art1_a" v-bind:sec_a_t="art2_a" v-bind:third_a_t="art3_a" v-bind:first_i='image' v-bind:sec_i='image' v-bind:third_i='image'/>
  </div>
  <div class="section">
    <h3 class="headers titles">blog</h3>
  <threesplit v-bind:first_c_t='blog1' v-bind:sec_c_t='blog2' v-bind:third_c_t='blog3' v-bind:first_a_t="blog1_a" v-bind:sec_a_t="blog2_a" v-bind:third_a_t="blog3_a" v-bind:first_i='image' v-bind:sec_i='image' v-bind:third_i='image'/>
  </div>
</div>
</template>

<script>
import threesplit from '@/components/threesplit'
import splitRectangle from '@/components/split_rectangle'
import third from '@/components/third'
import fourheaders from '@/components/fourheaders'
export default {
  name: 'app',
  components: {
    threesplit,
    splitRectangle,
    third,
    fourheaders
  },
  data () {
    return {
      image: 'https://psmag.com/.image/t_share/MTI3NTgyNTc2NjM3Mzg5NDQz/sproul-plaza-rally.jpg',
      news_h1: 'campus',
      news_a1: 'Wavves gets rowdy, gritty at The Independent',
      news_h2: 'city',
      news_a2: 'Free speech, hate speech clash in recent UC San Diego speaking n',
      news_h3: 'crime & courts',
      news_a3: 'First Congregational Church of Berkeley opens doors after fire',
      news_h4: 'city',
      news_a4: 'State senate passes bill that could stop closure of Alta Bates',
      op1: 'Editorials',
      op2: 'Columns',
      op3: 'Op-Eds',
      op1_a: 'Free speech, hate speech clash in recent UC San Diego speaking cancellation',
      op2_a: 'No, not even water',
      op3_a: 'CA legislators must formulate constructive water policies',
      mult_t: 'crime & courts',
      mult_a: 'Campus, regents among defendants sued for more than $23M for handling of Yiannopoulos protests',
      sport1: 'Film',
      sport1_a: "'Cien años con Juan Rulfo' traces son's journey to rediscover his father",
      sport2: 'Columns',
      sport2_a: 'Analise: A Newport girl',
      sport3: 'Op-eds',
      sport3_a: 'CA legislators must formulate constructive water policies',
      blog1: 'Film',
      blog1_a: "'Cien años con Juan Rulfo' traces son's journey to rediscover his father",
      blog2: 'Columns',
      blog2_a: 'Analise: A Newport girl',
      blog3: 'Op-eds',
      blog3_a: 'CA legislators must formulate constructive water policies',
      art1: 'Editorials',
      art2: 'Columns',
      art3: 'Op-Eds',
      art1_a: 'Free speech, hate speech clash in recent UC San Diego speaking cancellation',
      art2_a: 'No, not even water',
      art3_a: 'CA legislators must formulate constructive water policies'
    }
  }
}
</script>

<style>
#app {
  margin: 10px;
}
.splitRectangle{
  margin: 10px;
  width: 75%;
  border-top: thin solid #D3D3D3;
  border-bottom: thin solid #D3D3D3;
  overflow: hidden;
}
.section{
  border-bottom: thin solid #D3D3D3;
  margin: 10px;
  overflow: hidden;
  width: 75%;
}
.headers {
  font-family: 'BentonSans';
  text-transform: uppercase;
}
.titles {
  margin-bottom: 0px;
}
.article_title {
  font-family: 'Tiempos Headline';
}
.lefty {
  float: left;
  border-right: thin solid #D3D3D3;
}
.left_img {
  width: 55%;
  float: left;
  padding-bottom: 20px;
}
.blue {
  color: #add8e6;
}
.right_txt{
  width: 40%;
  float: right;
}
img {
  display: block;
  max-height:100%;
  max-width:100%;
}
</style>
