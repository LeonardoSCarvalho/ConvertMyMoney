const express = require('express');
const path = require('path');
const convert = require('./lib/convert');
const apiBCB = require('./lib/api.bcb');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',  async (req,res) => {
    try {
        const cotacao = await apiBCB.getCotacao()
        console.log('cotacao', cotacao)
        return res.render('home',{
        cotacao
    })
    } catch (error) {
        return  ''
    }

})

app.get('/cotacao', (req,res) => {
    const { exchangeRate, amount } = req.query;
    if( exchangeRate && amount ){
        const convertedValue = convert(exchangeRate, amount);
        return res.render('cotacao', { error: false, convertedValue,exchangeRate,amount})
    }else{
        return res.render('cotacao', {
            error: 'Invalid values'
        })
    }

})


app.listen(3000, () => console.log('🚀 Service on port 3000'))