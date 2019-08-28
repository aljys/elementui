<template>
    <div>
        <div class="left">{{vTitle.toUpperCase()}}</div>
        <div class="right">
            <span><router-link to="DashBoard" class="color">Home</router-link></span>
            <span>/</span>
            <span>{{vTitle.toUpperCase()}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'pageTitle',
    props:['vTitle'],

}
</script>

<style scoped>
.left {
  float: left;
}
.right {
  float: right;
}
.color {
  color: #2a6a6f;
}
</style>
