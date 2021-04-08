import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/covid-api',{useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise;

export default mongoose;