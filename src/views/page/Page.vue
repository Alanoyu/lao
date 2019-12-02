<template>
  <div>
    <ul v-for="(item,index) in list" :key="index">
      <h3>{{item.name}}</h3>
      <p>{{item.price}}</p>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [
        {
          name: "的反复默念项目反对反对反对",
          price: "34233"
        },
        {
          name: "的反复默念项目反对反对反对2",
          price: "34233"
        },
        {
          name: "的反复默念项目反对反对反对3",
          price: "34233"
        },
        {
          name: "的反复默念项目反对反对反对4",
          price: "34233"
        },
        {
          name: "的反复默念项目反对反对反对5",
          price: "34233"
        },
        {
          name: "的反复默念项目反对反对反对6",
          price: "34233"
        },
        {
          name: "的反复默念项目反对反对反对7",
          price: "34233"
        },
        {
          name: "的反复默念项目反对反对反对8",
          price: "34233"
        }
      ]
    };
  },
  created(){
    axios.get("/state").then(res=>{
      console.log(res.data)
    })
  }
};
</script>

<style>
</style>