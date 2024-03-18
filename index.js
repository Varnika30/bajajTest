const express = require("express");

const app = express();
app.use(express.json());

app.post("/bfhl",(req , res)=>{
    const {data} = req.body;
    const numberArr=[];
    const stringArr=[];
    data.forEach((e)=>{
        let temp=e;
        let newe= +e
        if(!isNaN(newe)){
            numberArr.push(newe);
        }else{
            stringArr.push(temp)
        }


    })
    const upperString= stringArr.map((e)=> e.toUpperCase())
    const even = numberArr.filter((e)=> e%2===0);
    const odd = numberArr.filter((e)=> e%2!==0);
    res.json({
        "is_success" : true,
        "user_id" : "varnika_chaudhary_30082003",
        "email" : "varnika1522.be21@chitkara.edu.in",
        "roll_number" : "2110991522",
        "odd_numbers" : odd ,
        "even_numbers" : even ,
        "alphabets" : upperString
    })

})
app.listen(3000 , ()=>{
    console.log("server started");
})