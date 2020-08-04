require('../src/db/mongoose');

const User = require('../src/models/user')

//  ObjectId("5f27af2b992b1f5e57e49722")

// User.findByIdAndUpdate('5f27af2b992b1f5e57e49722', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5f27af2b992b1f5e57e49722', 2).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
});