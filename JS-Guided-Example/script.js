/*
    parentArray = [
        [childArray1],
        [childArray2],
        [childArray3]
    ]
*/

const player = {
    x: 1,
    y: 1
};

function placeHorizontal(thePlayer, command) {
    if (command === 'l') {
        thePlayer.y -= 1;
    } else {
        thePlayer.y += 1;
    }
    console.log(`Player has position: x = ${thePlayer.x}, y = ${thePlayer.y}`);
}

placeHorizontal(player, 'l');