<template>
    <div class="header">
        <el-row :gutter="10">
            <el-col :span="6"><div class="grid-content "><span class="name">jysPand</span><span class="admin">Admin</span>  </div></el-col>
            <el-col :span="6"><div class="grid-content ">
                <el-input placeholder="Search for..." v-model="input1" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                </div></el-col>
            <el-col :span="6"><div class="grid-content "><span class="admin">Website:</span><span class="name">https://github.com/aljys</span></div></el-col>
            <el-col :span="6"><div class="grid-content ">
        <el-dropdown >
                <span class="el-dropdown-link">
                  <el-badge :value="5" class="item">
                        <el-button size="small" icon="el-icon-message"></el-button>
                  </el-badge>
                </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item >you have new info</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
             </div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
     name:'header',
     data(){
         return {
           input1:''
         }
     }
}
</script>

<style scoped>
.el-badge__content.is-fixed {
  position: absolute;
  top: 20px !important;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.w20 {
  width: 20px;
  height: 20px;
}
.header {
  height: 66px;
  width: 100%;
  background: #324157;
}
.el-row {
  height: 66px;
  line-height: 66px;
  /* margin-bottom: 20px; */
  /* &:last-child {
    margin-bottom: 0;
  } */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.admin {
  color: #e1e7f1;
  font-size: 22px;
}
.name {
  color: #2a6a6f;
  font-size: 22px;
}
</style>
