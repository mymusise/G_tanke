function createTanke (x1,y1,stagea) {
	var texture = PIXI.Texture.fromImage("tanke.jpg");
	var texture2= PIXI.Texture.fromImage("fire.jpg");
	var newTanke=new PIXI.Sprite(texture);;
	newTanke.anchor.x = 0.5;
    newTanke.anchor.y = 0.5;
    newTanke.position.x = x1;
    newTanke.position.y = y1;
    newTanke.spritetype=1;
    newTanke.nofire=1;
    //init newTanke fire
    newTanke.fire=new PIXI.Sprite(texture2);
    stagea.addChild(newTanke);
    addBody(newTanke, x1, y1, 25, 37, 500.5);
    return newTanke;
}
function init_Fire (argument) {
        y1=tanke1.position.y;
        x1=tanke1.position.x;
        tanke1.fire.position.x = x1;
        tanke1.fire.position.y = y1;
        stagea.addChild(tanke1.fire);
        addBody(tanke1.fire, x1, y1, 25, 37, 500.5)
}

function checkFire (argument) {

}