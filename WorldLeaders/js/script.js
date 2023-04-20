const biden = {fullName:"Joe Biden", imagePath:"images/biden.png", state:"USA"};
const trudeau = {fullName:"Justin Trudeau", imagePath:"images/trudeau.png", state:"Canada"};
const draghi = {fullName:"Mario Draghi", imagePath:"images/Draghi.png", state:"Italy"};
const jinping = {fullName:"Xi Jinping", imagePath:"images/jinping.jpg", state:"China"};
const johnson = {fullName:"Boris Johnson", imagePath:"images/johnson.png", state:"United Knigdom"};
const macron = {fullName:"Emmanuel Macron", imagePath:"images/Macron.png", state:"France"};
const merkel = {fullName:"Angela Merkel", imagePath:"images/merkel.jpg", state:"Germany"};
const morrison = {fullName:"Scott Morrison", imagePath:"images/morrison.png", state:"Australia"};
const suga = {fullName:"Yoshihide Suga", imagePath:"images/suga.png", state:"Japan"};
const vonderleyen = {fullName:"Ursula von der Layen", imagePath:"images/vonderlayen.png", state:"European Commission"};

let leaders = [biden, trudeau, draghi, jinping, johnson, macron, merkel, morrison, suga, vonderleyen];

for (let index = 0; index < leaders.length; index++) {
    document.write(leaders[index].fullName + "<br>");
}

function printLeadersImage(index, imagePath) {
    document.write("<img src= " + imagePath[index]+">");
}

function printLeadersNames(index, fullName) {
    document.write((index+1) + " " + fullName);
}