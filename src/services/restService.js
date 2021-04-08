import api from './api.js';
import recordModel from '../models/recordScheme.js'

const loadRecords = async () => {
    var response = await api.get();
    
    var records = response.data.results;

    for(let i in records) {
        await recordModel.create(records[i]);
    }

    return records;
}

export default loadRecords;