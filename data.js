const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
}

module.exports = {
    ROLE: ROLE,
    users: [
        { id: 1, name: 'Griffith', role: ROLE.ADMIN },
        { id: 2, name: 'Dev', role: ROLE.BASIC },
        { id: 3, name: 'Sharath', role: ROLE.BASIC}
    ],
    projects: [
        { id: 1, name: "Griffith's Project", userID: 1 },
        { id: 2, name: "Dev's Project", userID: 2},
        { id: 3, name: "Sharath'sProject", userID: 3}
    ]
}