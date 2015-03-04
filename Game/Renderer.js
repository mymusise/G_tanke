requestAnimFrame(animate);
function animate (argument) {
	requestAnimFrame(animate);
	tankeworld.Step(timeStep, iteration);
	//do something
	draw();
	checkFire();
	renderer.render(stagea);
}
function checkFire (argument) {
	// body...
	var body,sprite;
	for(body=tankeworld.m_bodyList;body;body=body.m_next){
		sprite=body.GetUserData();
		if (sprite) {
			if (sprite.alpha) {
					console.log(sprite.alpha);

		};
		};
		
	}
}