const express = require('express');
const donationmodal = require('../models/donationmodal');
const Model = require('../models/model');

const router = express.Router()

//Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })

// Post Method
// router.post('/post', (req, res) => {
//     const data = new Model({
//         contact: req.body.contact,
//         location: req.body.location,
//         name: req.body.name,
//         bloodGroup: req.body.bloodGroup,
//         lasteditedTime: req.body.lasteditedTime
//     })

//     try {
//         const dataToSave = data.save();
//         return res.status(200).json(dataToSave)
        
//     }
//     catch (error) {
//         return res.status(400).json({message: error.message})
//     }
// })

router.post('/post', (req, res) => {
    const data = new Donation({
        id: req.body.id,
        name: req.body.name,
        location: req.body.location,
        time: req.body.time,
    })

    try {
        const dataToSave = data.save();
        return res.status(200).json(dataToSave)
        
    }
    catch (error) {
        return res.status(400).json({message: error.message})
    }
})


// //Post Method
// router.post('/post', async (req, res) => {
//     const data = new Model({
//         name: req.body.name,
//         age: req.body.age
//     })

//     try {
//         const dataToSave = data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({message: error.message})
//     }
// })

//Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })

//Get by ID Method
// router.get('/getAll', async (req, res) => {
//     try{
//         const data = await Model.find();
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

router.get('/getAll', async (req, res) => {
    try{
        const data = await donationmodal.find({});
        // console.log(data);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})


module.exports = router;

