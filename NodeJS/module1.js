add = (a,b) => {return (a+b)}
sub = (a,b) => {return (a-b)}

// Making the module public so that ither file can access in any other file
// module.exports = add
// module.exports = sub

// module.exports.add = add
// module.exports.sub = sub
//               ↑
//introduce new variable, as node only remember one export statement which is the latest one..!!!

module.exports = {add,sub}
// We do not need to print diff. export statements, we can do it in a single line also using curly brackets..!!!