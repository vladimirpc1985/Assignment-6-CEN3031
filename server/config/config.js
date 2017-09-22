//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
    db: {
        // uri: 'mongodb://vladimirAssignment4:Password8@ds135364.mlab.com:35364/assignment4', //place the URI of your mongo database here.
        uri: 'mongodb://vlady:Password8@ds127034.mlab.com:27034/vladimir',
    },
    googleMaps: {
        key: 'AIzaSyBYRrNH2zytvjxNW0WpYpYv8aOJ1CXf35E'
    },
    port: 8080
};