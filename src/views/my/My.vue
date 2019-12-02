<template>
  <div>
    <ul v-for="(item,index) in list" :key="index">
      <h3>{{item.name}}</h3>
      <p>{{item.price}}</p>
    </ul>
  </div>
</template>

<script>

export default {
data(){
  return{
    list:[{
    "name":"士大夫士大夫艰苦离开",
    "price":"34233"
},{
    "name":"的身上的大概豆腐干",
    "price":"34233"
},{
    "name":"六次凝固",
    "price":"34233"
},{
    "name":"一起来看流星雨",
    "price":"34233"
},{
    "name":"dsfd",
    "price":"34233"
},{
    "name":"的反复默念项目反对反对反对6",
    "price":"34233"
},{
    "name":"的反复默念项目反对反对反对7",
    "price":"34233"
},{
    "name":"的反复默念项目反对反对反对8",
    "price":"34233"
}]
  }
}
  
}

</script>

<style>
</style>