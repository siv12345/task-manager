const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     if (req.method) {
//         res.status(503).send('Website is down, Please try later')
//     } else {
//         next()
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is up on port', port)
})

const Task = require('./models/task');
const User = require('./models/user');

// const main = async () => {
//     // const task = await Task.findById('5f2a939727add2b85c70801e')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('5f2a92f01b9502b42f464cbe')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()