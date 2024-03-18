const infoAboutMe = require("./information.js");


const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hi, my name is ${infoAboutMe.me.myName} and I'm learning in the ${infoAboutMe.me.campus} campus`,
    e: "oO",
    T: "U "
}));