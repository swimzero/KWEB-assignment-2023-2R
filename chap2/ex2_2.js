const fs = require('fs');
const path = require('path');
const util = require('util');
const getDirList = util.promisify(fs.readdir);//direction list
const getFileStat = util.promisify(fs.stat); //
const PATH = './chap3';
const searchDirectory = async directory => {
    const files = await getDirList(directory); 
    files.forEach(async file => {
        const filePath = path.join(directory, file); // 이름 합쳐주기
        const stat = await getFileStat(filePath);
        if (stat.isDirectory()) await searchDirectory(filePath); //디렉토리인가?
        else if (path.extname(filePath) === '.js') console.log(filePath);//이름빼기
    });
};
(async () => {
    try {
        await searchDirectory(PATH);
    } catch (err) {
        console.error(err);
    }
})();