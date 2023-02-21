const express = require('express');
const { authUser, authRole } = require('../auth');
const router = express.Router();
const { projects } = require('../data');
const { canView, scopeProjects } = require('../permissions/Project');


router.get('/', (req, res) => {
    res.json(scopeProjects(req.user, projects))
})

router.get('/:projectID', setProject, authUser, authGetProject, (req, res) => {
    res.json(req.project)
})

function setProject(req, res, next) {
    const projectID = parseInt(req.params.projectID)
    req.project = projects.find(project => project.id === projectID)

    if(req.project ==null){
        res.status(404)
        return res.send('Project not found')
    }
    next()
}

function authGetProject(req, res, next) {
    if( !canView (req.user, req.project)){
        res.status(401)
        res.send("Access Denied!!")
    }
    next();
}

module.exports = router