//https://www.youtube.com/watch?v=DihOP19LQdg&t=1196s
const express = require('express') // 2:45
const studentRoutes = require('./src/student/routes') //17:05

const app = express();
const port = 3000;

app.use(express.json()); //24:15

app.get("/", (req,res) => {
   res.send("Hello World!"); //4:45 to see if localhost is respoonding?
})

app.use('/api/v1/students', studentRoutes); //17:35, using this route to hit '/' in routes then send "using api route'"

app.listen(port, () => 
console.log(`app listenting on port ${port}`)); //3:30


