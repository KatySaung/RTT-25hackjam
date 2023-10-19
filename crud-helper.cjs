
require('dotenv').config( );
const db = require('./config/database.cjs');


const User = require('./models/user.cjs');

let user, item, category, order;
let users, items, categories, orders;


setTimeout(( ) => {
    db.close( );
}, 5000);
