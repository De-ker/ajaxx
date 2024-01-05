const express=require('express')
const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')

const router=express.Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/modal',(req,res)=>{
    res.render('modal')
})

router.get('/task1',(req,res)=>{
    res.render('task1')
})

router.get('/task2',(req,res)=>{
    res.render('task2')
})


app.use('/',router)

app.listen(1200,()=>{
    console.log('listening to port 1200')
})