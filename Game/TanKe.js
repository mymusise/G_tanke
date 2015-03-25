function createTanke (x1,y1,stagea,id) {
	var texture = PIXI.Texture.fromImage("sources/tanke_right.jpg");
	var texture2= PIXI.Texture.fromImage("sources/fire.jpg");
	var newTanke=new PIXI.Sprite(texture);
	newTanke.anchor.x = 0.5;
	newTanke.anchor.y = 0.5;
	newTanke.position.x = x1;
	newTanke.position.y = y1;
	newTanke.spritetype=1;
	newTanke.nofire=1;
	newTanke.alpha=id;
	newTanke.direction=1;//0->up 1->right 2->down 3->left
	//action
	newTanke.goFire=function(argument) {
		if(this.fire.visible==false){
			y1=this.position.y;
			x1=this.position.x;
			this.fire.position.x = x1;
			this.fire.position.y = y1;
			this.fire.alpha = this.alpha+2;
			this.fire.visible=true;
			stagea.addChild(this.fire);
			addBody(this.fire, x1, y1, 15, 15, 0.1,this.direction);
		}
}

	//init newTanke fire
	newTanke.fire=new PIXI.Sprite(texture2);
	// newTanke.fire.alpha=newTanke.alpha+2;
	// newTanke.fire=null;
	newTanke.fire.visible=false;
	newTanke.fire.alpha=newTanke.alpha+2;
	stagea.addChild(newTanke);
	body=addBody(newTanke, x1, y1, 30, 30, 500.5);
	// return newTanke;
    return body;	

}




