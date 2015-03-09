//stage is 600*400.Be happy to create your own Map.
//At present,this map need tow class sprite.One is a destructible brick,another is not.

function createMap (stage) {
	// body...
	var border_texture= PIXI.Texture.fromImage("sources/bricks.png");
	var border=new PIXI.Sprite(border_texture);
	border.position.x=1;
	border.position.y=1;
	border.alpha=11;
	stagea.addChild(border);
	addBody(border,border.position.x, border.position.y, 20, 600);
}