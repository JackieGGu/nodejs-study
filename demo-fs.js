/**
 * fs: 文件系统
 * 1.所有的文件系统操作都有同步和异步两种形式
 * 2.异步形式的最后一个参数是完成时的回调函数(传给回调函数的参数取决于具体方法, 但第一个参数会保留给异常; 如果操作成功完成，则第一个参数会是 null 或 undefined)
 */
const fs = require('fs');

stat();

/**
 * 异步删除文件
 */
function unlink() {
    fs.unlink('.\\fs-demo-test.txt', (err) => {
        if (err) throw err;
        console.log('successfully deleted file');
    });
}

/**
 * 同步删除文件(当出现任何异常时都会立即抛出)
 */
function unlinkSync() {
    fs.unlinkSync('.\\fs-demo-test.txt');
}

/**
 * 重命名文件
 */
function rename() {
    fs.rename('.\\fs-demo-test.txt', '.\\fs-demo.txt', (err) => {
        if (err) throw err;
        console.log('successfully rename file');
    })
}

/**
 * 读取文件属性
 */
function stat() {
    fs.stat('.\\fs-demo-test.txt', (err, status) => {
        if (err) throw err;
        console.log(`file options: ${JSON.stringify(status)}`);
    })
}
