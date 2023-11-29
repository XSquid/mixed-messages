let myChoice = {racePick:"", classPick:""}

const orc = {
    race: "Orc",
    classes: ["Warrior", "Hunter", "Rogue", "Shaman", "Warlock" ],
}
const undead = {
    race:"Undead",
    classes: ["Warrior", "Rogue", "Priest", "Mage", "Warlock"],
}

const tauren = {
    race: "Tauren",
    classes: ["Warrior", "Hunter", "Shaman", "Druid"],
}
const troll = {
    race: "Troll",
    classes: ["Warrior", "Hunter", "Rogue", "Priest", "Shaman", "Mage"],
}

const human = {
    race: "Human",
    classes: ["Warrior", "Paladin", "Rogue", "Priest", "Mage", "Warlock"]
}

const dwarf = {
    race: "Dwarf",
    classes: ["Warrior", "Paladin", "Hunter", "Rogue", "Priest"]
}

const nelf = {
    race: "Night Elf",
    classes: ["Warrior", "Hunter", "Rogue", "Priest", "Druid"]
}

const gnome = {
    race: "Gnome",
    classes: ["Warrior", "Rogue", "Mage", "Warlock"]
}

const allRaces = [orc, undead, tauren, troll, human, dwarf, nelf, gnome]

let raceNum = Math.floor(Math.random() * allRaces.length)
let classNum = Math.floor(Math.random() * allRaces[raceNum].classes.length)

console.log(raceNum)
console.log(classNum)

console.log(allRaces[raceNum].race + " " + allRaces[raceNum].classes[classNum])

myChoice.racePick = allRaces[raceNum].race
myChoice.classPick = allRaces[raceNum].classes[classNum]

console.log (myChoice)
