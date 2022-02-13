const fs = require('fs');

const generatePage = require('./src/page-templete');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log(name, github);

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Porfolio complete! Check out index.html to see the output! ')
});