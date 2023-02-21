const express = require('express');
const app = express();
const { ROLE, users } = require('./data');
const { authUser, authRole} = require('./auth');
const projectRouter = require('./routes/project');


app.use(express.json());
app.use(setUser);
app.use('/projects', projectRouter);


app.get('/', (req, res) => {
    res.send('Home Page')
    console.log("Getting home page....")
});

app.get('/dashboard', authUser, (req, res) => {
    res.send('Dashboard Page')
    console.log("Getting dashboard page....")
})

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
    res.send('Admin Page')
    console.log("Getting admin page....")
})

function setUser(req, res, next) {
    const userID = req.body.userID;
    if(userID){
        req.user = users.find(user => user.id ===userID)
    }
    next()
}

app.listen(3000, () => {
    console.log('Listening on port 3000......');
})