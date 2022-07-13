function createManagerBlock (manager) {
    const managerBlock = `<div class="manager-block">
    <div>
        <h2>${manager.name}</h2>
        <h3>Manager</h3>
    </div>
    <div>
        <p>ID: ${manager.id}</p>
        <p>Email: <a href="mailto:${manager.memail}">${manager.email}</a></p>
        <p>Office: ${manager.officeNumber}</p>
    </div>
</div>`
return managerBlock
};

function createEngineerBlocks (engineers) {
    let engineerBlocks = ``
    for(let i = 0; i < engineers.length; i++) {
        let engineer = engineers[i]
        let block = `<div class="engineer block">
        <div>
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
        </div>
        <div>
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>Github: <a href="https://www.github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>`
    engineerBlocks += block
    }
    return engineerBlocks
};

function createInternBlocks (interns) {
    let internBlocks = ``
    for(let i = 0; i < interns.length; i++) {
        let intern = interns[i]
        let block = `<div class="intern block">
        <div>
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
        </div>
        <div>
            <p>ID: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </div>
    </div>`
    internBlocks += block
    }
    return internBlocks
};

module.exports = { createManagerBlock, createEngineerBlocks, createInternBlocks };