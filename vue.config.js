module.exports={
    lintOnSave:false,
    devServer:{
        before(app){
            app.get("/state",(req,res)=>{
                let data=require("./src/mock/index.json")
                console.log(data)
                res.send(data)
            })
        }
    }
}