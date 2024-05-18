const os = require('os');

// info about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
const uptime = os.uptime()
console.log(`The System Uptime is ${uptime} seconds`);
console.log(`The System Uptime is ${Math.floor(uptime / 60)} minutes`);
console.log(`The System Uptime is ${Math.floor(uptime / 3600)} hours`);
console.log(`The System Uptime is ${Math.floor(uptime / 86400)} days`);


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);