function createTanke (x1,y1,stagea,id) {
	var texture = PIXI.Texture.fromImage("sources/tanke.jpg");
	var texture2= PIXI.Texture.fromImage("sources/fire.jpg");
	var newTanke=new PIXI.Sprite(texture);;
	newTanke.anchor.x = 0.5;
    newTanke.anchor.y = 0.5;
    newTanke.position.x = x1;
    newTanke.position.y = y1;
    newTanke.spritetype=1;
    newTanke.nofire=1;
    newTanke.alpha=id;
    newTanke.direction=0;
    //action
    newTanke.checkFire=function(argument) {
        console.log('checkFire');
    }
    newTanke.init_Fire=function(argument) {
        this.fire=new PIXI.Sprite(texture2);
        y1=this.position.y;
        x1=this.position.x;
        this.fire.position.x = x1;
        this.fire.position.y = y1;
        this.fire.alpha = this.alpha+2;
        this.fire.visible=true;
        stagea.addChild(this.fire);
        addBody(this.fire, x1, y1, 25, 37, 500.5,this.direction);

}

    //init newTanke fire
    newTanke.fire=new PIXI.Sprite(texture2);
    // newTanke.fire.alpha=newTanke.alpha+2;
    // newTanke.fire=null;
    newTanke.fire.visible=true;
    stagea.addChild(newTanke);
    addBody(newTanke, x1, y1, 25, 37, 500.5);
    return newTanke;
    

}




