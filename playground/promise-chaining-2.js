require('../src/db/mongoose')

const Task = require('../src/models/task')

//ObjectId("5f27b7b38e797c8997ecd462")

// Task.findByIdAndDelete('5f26d864b989f82ff23b96db').then((result) => {
//     console.log(result)
//     return Task.countDocuments({ completed: false })
// }).then((doneTasks) => {
//     console.log(doneTasks)
// }).catch((err) => {
//     console.log(err)
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount("5f27b7b38e797c8997ecd462").then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});