var args = process.argv.slice(2);
let str = args[0];
let cleanedStr = str.replace(/[^*\/^\+\-\dx()]/g, '');
let replacedStr = cleanedStr.replace(/\^|x/g, function(match) {
    return match === '^' ? '**' : '*';
});
replacedStr = replacedStr.replace(/\)(\d)/g, ')*$1');
replacedStr = replacedStr.replace(/\)$/g, '');

console.log(eval(replacedStr));