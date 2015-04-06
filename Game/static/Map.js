//stage is 600*400.Be happy to create your own Map.
//At present,this map need tow class sprite.One is a destructible brick,another is not.

function createMap (stage) {
	// ADD BORDER... 
	var block_wide=30;
	var border_texture= PIXI.Texture.fromImage("static/sources/bricks.png");
	for (var i=0;i<2;i++){
		for (var j=0;j<2;j++){
			var border=new PIXI.Sprite(border_texture);
			border.position.x=5+610*i;
			border.position.y=10+150+300*j;
			border.anchor.x = 0.5;
			border.anchor.y=0.5;
			border.alpha=11;
			stagea.addChild(border);
			addBody(border,border.position.x, border.position.y, 10, 300);
		}
	}
	var border_texture2= PIXI.Texture.fromImage("static/sources/bricks 2.png");
	for (var i=0;i<2;i++){
		for (var j=0;j<2;j++){
			var border=new PIXI.Sprite(border_texture2);
			border.position.x=10+150+300*j;
			border.position.y=5+610*i;
			border.anchor.x = 0.5;
			border.anchor.y=0.5;
			border.alpha=11;
			stagea.addChild(border);
			addBody(border,border.position.x, border.position.y, 300, 10);
		}
	}
	

	//add block
	var block_texture= PIXI.Texture.fromImage("static/sources/zhuantou.jpg");
	
	var i,j;
	for (i=0; i < 3; i++) {
		for(j=0;j<5;j++)
		{
			if (map1[i][j]==1){
				var block=new PIXI.Sprite(block_texture);
				block.position.x=10+j*block_wide+block_wide/2;
				block.position.y=0+i*block_wide+block_wide/2;
				block.anchor.x=0.5;
				block.anchor.y=0.5;
				block.alpha=11;
				stagea.addChild(block);
				addBody(block,block.position.x,block.position.y,block_wide,block_wide);
			}
		}
	};


}