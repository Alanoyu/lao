<template>
  <div class="home">
      <div class="home-footer">
          <router-link v-for="(item, index) in list" :key="index" :to="item.path">{{item.title}}</router-link>
      </div>
      <div class="home-main">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        list:[{
            title:"首页",
            path:"/page"
        },{
            title:"我的",
            path:"/my"
        }]
    }
}
}
</script>

<style>

</style>