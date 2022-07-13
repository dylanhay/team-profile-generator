function createPage(managerBlock, engineerBlocks, internBlocks) {
  const pageTemplate = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Team</title>
        <link rel="stylesheet" href="./assets/styles.css">
    </head>
    <body>
        <hero>
            <h1>The Team</h1>
        </hero>
        <main>
            <div class="manager-block-par">
                ${managerBlock}
            </div>
            <div class="employees">
                ${engineerBlocks}
                ${internBlocks}
            </div>
        </main>
    </body>
    </html>`;
  return pageTemplate;
}

module.exports = createPage;
