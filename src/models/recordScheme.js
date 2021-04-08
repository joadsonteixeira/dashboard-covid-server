import mongoose from '../database/index.js';

const RecordSchema = mongoose.Schema({
    city: {
        type: String
    },
    city_ibge_code: {
        type: Number
    },
    date: {
        type: String
    },
    epidemiological_week: {
        type: Number
    },
    estimated_population: {
        type: Number
    },
    estimated_population_2019: {
        type: Number
    },
    is_last: {
        type: Boolean
    },
    is_repeated: {
        type: Boolean
    },
    last_available_confirmed: {
        type: Number
    },
    last_available_confirmed_per_100k_inhabitants: {
        type: Number
    },
    last_available_date: {
        type: String
    },
    last_available_death_rate: {
        type: Number
    },
    last_available_deaths: {
        type: Number
    },
    new_confirmed: {
        type: Number
    },
    new_deaths: {
        type: Number
    },
    order_for_place: {
        type: Number
    },
    place_type: {
        type: String
    },
    state: {
        type: String
    }
});

const Record = mongoose.model('Record', RecordSchema);
export default Record;