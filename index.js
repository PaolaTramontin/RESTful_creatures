const express = require ('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const fs = require('fs')
const dinosaurs = require('./controllers/dinosaurs') //then do app.use
const prehistoric_creatures = require('./controllers/prehistoric_creatures')


app.set('view engine', 'ejs')   //ths links the views folder
app.use(ejsLayouts)   //this links the layouts file on the views folder. make sure you type --->>>npm i express layout thingy
app.use(express.urlencoded({extended:false}))   //this is what makes req.bdy work 

//put new app.use in here
app.use('/dinosaurs', dinosaurs)
app.use('/prehistoric_creatures', prehistoric_creatures)



app.get('/', (req, res)=>{
    res.render('home')
})



// NEW* DINO ROUTE //
// app.get('/dinosaurs/new', (req, res)=>{
//     res.render('dinosaurs/new')
// })

// NEW* PREHISTORIC ROUTE //
// app.get('/prehistoric_creatures/new', (req, res)=>{
//     res.render('prehistoric_creatures/new')
// })



//DINO SHOW* ROUTE //
// app.get('/dinosaurs/:idx', (req, res)=>{
//     let dinosaurs = fs.readFileSync('./dinosaurs.json')
//     let dinoData = JSON.parse(dinosaurs)
    
//     //get array index from url parameter
//     let dinoIndex = req.params.idx

//     console.log(dinoData[dinoIndex])
//     res.render('dinosaurs/show', {dino: dinoData[dinoIndex], dinoId: dinoIndex})
// })


// PREHISTORIC SHOW* ROUTE //
// app.get('/prehistoric_creatures/:idx', (req, res)=>{
//     let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
//     let prehistoricData = JSON.parse(prehistoric_creatures)
    
//     //get array index from url parameter
//     let prehistoricIndex = req.params.idx

//     console.log(prehistoricData[prehistoricIndex])
//     res.render('prehistoric_creatures/show', {creature: prehistoricData[prehistoricIndex], creaturesId: prehistoricIndex})
// })



//  DINO POST ROUTE //
// app.post('/dinosaurs', (req, res)=>{
//     let dinosaurs = fs.readFileSync('./dinosaurs.json')
//     let dinoData = JSON.parse(dinosaurs)
//     dinoData.push(req.body) // push the new dino to the array
//     //save the new dinoData array to the dinosaurs.json file
//     // JSON.stringfy  does the opposite of JSON.parse
//     fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
//     //redirect to the GET /dinosaurs route (index)
//     res.redirect('/dinosaurs')
//     console.log(req.body)
// })


//  PREHISTORIC POST ROUTE //
// app.post('/prehistoric_creatures', (req, res)=>{
//     let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
//     let prehistoricData = JSON.parse(prehistoric_creatures)
//     prehistoricData.push(req.body) // push the new dino to the array
//     //save the new dinoData array to the dinosaurs.json file
//     // JSON.stringfy  does the opposite of JSON.parse
//     fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(prehistoricData))
//     //redirect to the GET /dinosaurs route (index)
//     res.redirect('/prehistoric_creatures')
//     console.log(req.body)
// })












app.listen(8003, ()=>{
    console.log("youre in port 8003")
})


// DINO INDEX ROUTE //
// app.get('/dinosaurs', (req, res)=>{
//     let dinosaurs = fs.readFileSync('./dinosaurs.json')
//     let dinoData = JSON.parse(dinosaurs)

//     console.log(req.query.nameFilter)
//     let nameFilter = req.query.nameFilter
//     if(nameFilter){
//        dinoData = dinoData.filter(dino=>{
//            return dino.name.toLowerCase() === nameFilter.toLowerCase()
//        })
// } 
//     console.log(dinoData)
//     res.render('dinosaurs/index', {dinosaurs:dinoData})    //this is what you type in local host
// })



//PREHISTORIC INDEX ROUTE:

// app.get('/prehistoric_creatures', (req, res)=>{
//     let creatures = fs.readFileSync('./prehistoric_creatures.json')
//     let creaturesData = JSON.parse(creatures)
//     let typeFilter = req.query.type
//     if(typeFilter){
//       creaturesData = creaturesData.filter(creature=>{
//            return typeFilter.toLowerCase() === creature.type.toLowerCase()
//        })
//     } 
//     console.log(creaturesData)
//     res.render('prehistoric_creatures/index', {creatures:creaturesData})    //this is what you type in local host
// })


//app.use('/prehistoric_creatures', require ('.controllers/prehistoric_creatures'))





















