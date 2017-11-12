<template>
  <div id="app">
    <h3>FEATURED STORIES</h3>
	<crimeCourts/>
	<div class="small-featureds">
	  <campus/>
	  <span><city/></span>
	  <span><art/></span>
	</div>
  </div>
</template>

<script>
import crimeCourts from '@/components/crimeCourts'
import campus from '@/components/campus'
import city from '@/components/city'
import art from '@/components/art'
export default {
  name: 'app',
  components: {
    crimeCourts,
    campus,
    city,
    art
  }
}
</script>

<style>
#app {
  font-family: 'Tiempos Headline';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

h3, h4 {
  font-family: 'BentonSans';
}

.crimeCourts {
  margin: 10px;
  width: 75%;
  border-top: thin solid #D3D3D3;
  border-bottom: thin solid #D3D3D3;
  overflow: hidden;

}

.small-featureds {
  margin: 10px;
  width: 75%;
}
.campus {
  float: left;
  width: 33%;
  border-right: thin solid #D3D3D3;

}
.city {
  float: left;
  width: 33%;
  border-right: thin solid #D3D3D3;

}

.art {
  width: 33%;
  float: right;
}
</style>
