<template>
    <div class="sider">
       <el-menu
        :default-active="onRoutes"
        unique-opened 
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#324157"
        text-color="#bfcbd9"
        active-text-color="#20a0ff"
        style="width:200px;"
       >
      <el-menu-item index="DashBoard">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

       <el-submenu index="2" >
          <template slot="title" >
          <i class="el-icon-s-help"></i>
          <span>Components</span>
        </template>
          <el-menu-item index="Edior">Edior</el-menu-item>
          <el-menu-item index="Markdown">Markdown</el-menu-item>
          <el-menu-item index="TodoList">TodoList</el-menu-item>
       </el-submenu>

       <el-submenu index="3">
         <template slot="title">
          <i class="el-icon-pie-chart"></i>
          <span>charts</span>
        </template>
          <el-menu-item index="BasicCharts">Basic Charts</el-menu-item>
       </el-submenu>

        <el-submenu index="4">
          <template slot="title">
                <i class="el-icon-reading"></i>
                <span>Form Elements</span>
          </template>
          <el-menu-item index="FormInputs">Form Inputs</el-menu-item>
          <el-menu-item index="FormLayouts">Form Layouts</el-menu-item>
       </el-submenu>
        <el-submenu index="5">
          <template slot="title">
                <i class="el-icon-postcard"></i>
                <span>Tables</span>
          </template>
          <el-menu-item index="BasicTables">Basic Tables</el-menu-item>
       </el-submenu>
       </el-menu>

    </div>
</template>

<script>
export default {
     name:'sider',
     data(){
         return{

         }
     },
     computed:{
      onRoutes(){
         return this.$route.path.replace('/','');
      }
     },
      methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.sider {
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 66px;
  bottom: 0;
  background: #324157;
}
</style>
