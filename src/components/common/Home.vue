<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
import vSidebar from './Sider'
import vHead from './Header'
export default {
    name:'home',
    components:{
        vSidebar,vHead
    }
}
</script>
