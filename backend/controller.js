const users =[
    {
        id:1,
        name:'yenuli',
    },
    {
        id:2,
        name:'yenuliC',
    },
];

//create a controller function
//call back function
//here get all users 
const getUsers = (cb) =>{
    cb(users);
};

//get one user from the users
const getUserById = (id, cb) =>{
    const user = users.find(user => user.id == id); //here we do not check the data type. Only check the value
    cb(user);
};

exports.getUsers = getUsers;
exports.getUserById = getUserById;