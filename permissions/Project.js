const { ROLE } = require("../data");

function canView(user, project) {
    return(
        user.role === ROLE.ADMIN || 
        project.userID === user.id
    )
}


function scopeProjects (user, projects) {
    if(user.role === ROLE.ADMIN) return projects
    return projects.filter(project => project.userID ===user.id )

}

module.exports = {
    canView,
    scopeProjects
}