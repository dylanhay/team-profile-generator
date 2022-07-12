function createManagerBlock (manager) {
    const managerBlock = `<div class="layout">
    <div class="title">
        <h2 class="name">${manager.name}</h2>
        <h3 class="role">Manager</h3>
    </div>
    <body>
        <p>ID: ${manager.id}</p>
        <p>Email: <a href="mailto:${manager.memail}">${manager.email}</a></p>
        <p>Office: ${manager.officeNumber}</p>
    </body>
</div>`
return managerBlock
};

function createEngineerBlocks (engineers) {
    let engineerBlocks = ``
    for(let i = 0; i < engineers.length; i++) {
        let engineer = engineers[i]
        let block = `<div class="layout">
        <div class="title">
            <h2 class="name">${engineer.name}</h2>
            <h3 class="role">Engineer</h3>
        </div>
        <body>
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>Github: <a href="https://www.github.com/${engineer.github}">${engineer.github}</a></p>
        </body>
    </div>`
    engineerBlocks += block
    }
    return engineerBlocks
};

function createInternBlocks (interns) {
    let internBlocks = ``
    for(let i = 0; i < interns.length; i++) {
        let intern = interns[i]
        let block = `<div class="layout">
        <div class="title">
            <h2 class="name">${intern.name}</h2>
            <h3 class="role">Engineer</h3>
        </div>
        <body>
            <p>ID: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </body>
    </div>`
    internBlocks += block
    }
    return internBlocks
};

module.exports = { createManagerBlock, createEngineerBlocks, createInternBlocks };