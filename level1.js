
var levelOne =  new Array([]);


levelOne[0][2] = {type:"HARDBLOCK",isSolid:true};
for(let row = 0;row<210;row++){
	levelOne.push([]);
	levelOne[row][0] = {type:"HARDBLOCK",isSolid:true};
	levelOne[row][1] = {type:"HARDBLOCK",isSolid:true};
}


levelOne[16][5] = {type:"QUESTIONRING",quantity:5,isSolid:true};
levelOne[20][5] = {type:"SOFTBLOCK",isSolid:true};
levelOne[21][5] = {type:"QUESTIONMUSHROOM",isSolid:true};
levelOne[22][5] = {type:"SOFTBLOCK",isSolid:true};
levelOne[22][9] = {type:"QUESTIONRING",quantity:5,isSolid:true};
levelOne[23][5] = {type:"QUESTIONRING",quantity:5};
levelOne[24][5] = {type:"SOFTBLOCK",isSolid:true};


levelOne[28][2] = {type:"PIPE",isSolid:true};
levelOne[28][3] = {type:"PIPE",canEnter:true,isSolid:true};
levelOne[29][2] = {type:"PIPE",isSolid:true};
levelOne[29][3] = {type:"PIPE",canEnter:true,isSolid:true};


levelOne[31][2] = {type:"GOOMBA",isEnemy:true,isSolid:true};
levelOne[36][2] = {type:"KOOPA",isEnemy:true,isSolid:true};


levelOne[38][2] = {type:"PIPE",isSolid:true};
levelOne[38][3] = {type:"PIPE",isSolid:true};
levelOne[38][4] = {type:"PIPE",canEnter:true,isSolid:true};
levelOne[39][2] = {type:"PIPE",isSolid:true};
levelOne[39][3] = {type:"PIPE",isSolid:true};
levelOne[39][4] = {type:"PIPE",canEnter:true,isSolid:true };



levelOne[46][2] = {type:"PIPE"};
levelOne[46][3] = {type:"PIPE"};
levelOne[46][4] = {type:"PIPE"};
levelOne[46][5] = {type:"PIPE",canEnter:true};
levelOne[47][2] = {type:"PIPE"};
levelOne[47][3] = {type:"PIPE"};
levelOne[47][4] = {type:"PIPE"};
levelOne[47][5] = {type:"PIPE",canEnter:true};

levelOne[57][2] = {type:"PIPE"};
levelOne[57][3] = {type:"PIPE"};
levelOne[57][4] = {type:"PIPE"};
levelOne[57][5] = {type:"PIPE",canEnter:true};
levelOne[58][2] = {type:"PIPE"};
levelOne[58][3] = {type:"PIPE"};
levelOne[58][4] = {type:"PIPE"};
levelOne[58][5] = {type:"PIPE",canEnter:true};


levelOne[64][6] = {type:"QUESTIONFIRE"};


levelOne[69][0] = undefined;
levelOne[69][1] = undefined;
levelOne[70][0] = undefined;
levelOne[70][1] = undefined;