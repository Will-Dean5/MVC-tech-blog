const sequelize = require("../config/connection");
const User = require("../models/users");
const reset = require("./reset.json");

const restart = async () =>{
    await sequelize.sync({force : true});

    await User.bulkCreate(reset, {
        returning: true,
        indivdualHooks: true,
    });
    console.log("Table reset")
    process.exit(0);
    
}

restart();