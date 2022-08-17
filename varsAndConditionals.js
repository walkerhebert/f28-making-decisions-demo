let obiwanAttack = 25
let anakinAttack = 35

if(obiwanAttack > anakinAttack){
    console.log(`Anakin has a better attack than Obiwan`)
} else if(obiwanAttack > anakinAttack) {
    console.log(`Obiwan has a better attack than Anakin`)
} else {
    console.log(`Anikan and Obiwan have the same attack`)
}

let obiwanHealth = 100
let anikanHealth = 0

if(obiwanHealth <= anakinAttack){
    console.log(`Obiwan has been slain`)
} else {
    obiwanHealth -= anakinAttack
    console.log(`Obiwans health is now at ${obiwanHealth}`)
}

obiwanDefense += 30

for(let i = 0; i < 5; i++){
    obiwanHealth -= (anakinAttack - obiwanDefense)
    if(obiwanHealth <= 0){
        console.log(`Obiwan was slain`)
    } else {
        console.log(`Obiwans health is now at ${obiwanHealth}`)
    }
}

while(obiwanHealth > 0){
    obiwanHealth-= (anakinAttack - obiwanDefense)
    console.log(`Obiwan health is now at ${obiwanHealth}`)
    if(obiwanHealth <= 0){
        console.log(`Obiwan was slain`)
    }
}