requestAnimFrame(animate);
function animate (argument) {
	requestAnimFrame(animate);
	tankeworld.Step(timeStep, iteration);
	//do something
	draw();
	checkContact();
	checkOutOfMap();
	renderer.render(stagea);
}
function checkContact (argument) {
	// body...
	for (c =tankeworld.GetContactList(); c; c = c.GetNext())
        {
            if (c.GetManifoldCount() > 0)
            {
                var body1= c.GetShape1().GetBody();
                var body2= c.GetShape2().GetBody();
                id1=body1.m_userData.alpha;
                id2=body.m_userData.alpha;
                console.log(id1,id2);
                if ((id1==2&id2==3))
                {
                    tankeworld.DestroyBody(body1);
                    tankeworld.DestroyBody(body2);
                    stagea.getChildAt(id1-1).visable=false;
                    stagea.removeChildAt(id1-1);
                    stagea.removeChildAt(id2-2);
                    
                }
                else if((id2>=2&id1<=1)){
                    var body_temp,sprite_temp;
                    tankeworld.DestroyBody(body1);
                    tankeworld.DestroyBody(body2);
                    stagea.removeChild(body1.GetUserData());
                    stagea.removeChild(body2.GetUserData());
                    
                }
            }
        }
}
function checkOutOfMap (argument) {
	var body, sprite;
	for (body = tankeworld.m_bodyList; body; body = body.m_next) {
		sprite = body.GetUserData();
            if (sprite) {
                if ((sprite.position.x>World_wide)||(sprite.position.x<0)||(sprite.position.y>World_high)||(sprite.position.y<0)) {
                	tankeworld.DestroyBody(body);
                	id=sprite.alpha-1;
                    if(id==3)
                        id-=1;
                	stagea.getChildAt(id).visible=false;
                	stagea.removeChildAt(id);
                };
            }
	}
}