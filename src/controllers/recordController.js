import express from 'express';
import Record from '../models/recordScheme.js'
import restService from '../services/restService.js'
import recordDb from '../models/recordScheme.js'

const router = express.Router();

// Initiate database - To be removed (Use once)
router.get('/loadRecords', async (req, res) => {
    res.send(restService());
});

// Create one record - To be removed - Just for test
router.post('/createRecord', async (req, res) => {
    try{
        const record = await Record.create(req.body);
        return res.send({record});
    }catch(err){
        return res.status(400).send({messsage: err});
    }
});

// Usual endpoints

//Get by city name
router.get('/city/:name', async (req, res) => {
    try{
        var select = await recordDb.find({city: req.params.name})
        res.send(select);
    }catch(err){
        res.send({error: err});
    }
})

//Get by state
router.get('/state/:state', async (req, res) => {
    var select = await recordDb.find({state: req.params.state, place_type: 'state'});

    res.send(select);
})

export default router;