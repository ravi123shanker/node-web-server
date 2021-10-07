const path=require('path');
const express=require('express');

const app=express();
const publicPath=path.join(__dirname, '../public');
const viewsPath=path.join(__dirname, './templates');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicPath));

app.get('', (req, res)=>{
    res.render('index', {title: "Landing page"});
})
app.get('/about', (req, res)=>{
    res.render('about');
})
app.get('/help', (req, res)=>{
    res.render('help');
})

app.listen(9000, ()=>{
    console.log("Node server is up and running on port: 9000");
})