const { User } = require('../models');

const userData = [
    {
        username: "gabe_thomas",
        github: "samohtebag",
        email: "gabe_t@gmail.com",
        password: "password01"
    },
    {
        username: "cliff_m",
        github: "CliffordMorin",
        email: "crazy_sax@gmail.com",
        password: "password02"
    },
    {
        username: "patrick_w",
        github: "pat31477",
        email: "pat31477@yahoo.com",
        password: "password03"
    },
    {
        username: "jason",
        github: "Jbarbss",
        email: "medianman0101@gmail.com",
        password: "password04"
    }
    
    
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;