
const sprites = PIXI.Texture.from('sprites.png');
const enemies = PIXI.Texture.from('enemies.png');

function getEnemyTexture(type,frame,speed){
	switch(type){
		case "GOOMBA":return getEnemyTextureCoords(frame,0);
		case "KOOPA": return  (speed>0)  ? getEnemyTextureCoords(frame+7,0) : getEnemyTextureCoords(frame+5,0) ;
	}
}

function getMarioTexture(status,action,frame){
		//frame va da 1 a 3
	switch(status){
		case "NORMAL":
			switch(action){
				case "STAND": return getMarioTextureCoords(0,0); break;
				case "WALK": return getMarioTextureCoords(frame,0); break;
				case "JUMP": return getMarioTextureCoords(frame+3,0); break;
				case "GRAB": return getMarioTextureCoords(frame+6,0); break;
			}
			break;
		case "BIG": 
			switch(action){
				case "STAND": return getMarioTextureCoords(); break;
				case "WALK": return getMarioTextureCoords(); break;
				case "JUMP": return getMarioTextureCoords(); break;
				case "GRAB": return getMarioTextureCoords(); break;
			}
			break;
		case "FIRE": 
			switch(action){
				case "STAND": return getMarioTextureCoords(); break;
				case "WALK": return getMarioTextureCoords(); break;
				case "JUMP": return getMarioTextureCoords(); break;
				case "GRAB": return getMarioTextureCoords(); break;
			}
			break;
	}
	return getTexture()
}
function getMarioTextureCoords(x,y){
	const ret = new PIXI.Rectangle((x*16)+80,y*32,16,32);
	return new PIXI.Texture(sprites,ret);
}
function getEnemyTextureCoords(x,y){
	//16x24, 7 pixel spazio altezza, 14 pizel spazio larghezza
	const ret = new PIXI.Rectangle((x*30),y*38,16,24);
	return new PIXI.Texture(enemies,ret);
}