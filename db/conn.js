const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Database Connected');
}).catch((err) => {
    console.log(`Access Denied`, err);
})