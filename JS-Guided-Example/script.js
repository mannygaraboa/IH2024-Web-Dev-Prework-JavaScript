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
    if (thePlayer.y >= 0 && thePlayer.y < 2) {
        if (command === 'l') {
            thePlayer.y -= 1;
        } else if (command === 'r'){
            thePlayer.y += 1;
        }
        console.log(`Player has position: x = ${thePlayer.x}, y = ${thePlayer.y}`);
    } else {
        console.log("You can't place player outside of the board!");
    }
}

placeHorizontal(player, 'l');
placeHorizontal(player, 'l');
placeHorizontal(player, 'r');