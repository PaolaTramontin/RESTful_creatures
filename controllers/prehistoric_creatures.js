const express = require('express');
const router = express.Router()
const fs=require('fs')

router.get('/', (req, res)=>{
    let creatures = fs.readFileSync('./prehistoric_creatures.json')
    let creaturesData = JSON.parse(creatures)
    let typeFilter = req.query.type
    if(typeFilter){
      creaturesData = creaturesData.filter(creature=>{
           return typeFilter.toLowerCase() === creature.type.toLowerCase()
       })
    } 
    console.log(creaturesData)
    res.render('prehistoric_creatures/index', {creatures:creaturesData})    //this is what you type in local host
})


// NEW* PREHISTORIC ROUTE //
router.get('/new', (req, res)=>{
    res.render('prehistoric_creatures/new')
})


// PREHISTORIC SHOW* ROUTE //
router.get('/:idx', (req, res)=>{
    let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
    let prehistoricData = JSON.parse(prehistoric_creatures)
    
    //get array index from url parameter
    let prehistoricIndex = req.params.idx

    console.log(prehistoricData[prehistoricIndex])
    res.render('prehistoric_creatures/show', {creature: prehistoricData[prehistoricIndex], creaturesId: prehistoricIndex})
})



router.post('/', (req, res)=>{
    let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
    let prehistoricData = JSON.parse(prehistoric_creatures)
    prehistoricData.push(req.body) // push the new dino to the array
    //save the new dinoData array to the dinosaurs.json file
    // JSON.stringfy  does the opposite of JSON.parse
    fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(prehistoricData))
    //redirect to the GET /dinosaurs route (index)
    res.redirect('/prehistoric_creatures')
    console.log(req.body)
})




module.exports = router;