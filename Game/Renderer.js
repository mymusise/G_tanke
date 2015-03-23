requestAnimFrame(animate);
function animate (argument) {
	requestAnimFrame(animate);
	tankeworld.Step(timeStep, iteration);
	//do something
	draw();
	checkContact();
	checkOutOfMap();
	getData();
	// console.log(tanke1.position.x,tanke1.position.y)
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
				id2=body2.m_userData.alpha;
			  
				if((id2==3&&id1==2)||(id2==2&&id1==3)){
					tankeworld.DestroyBody(body1);
					tankeworld.DestroyBody(body2);
					var sprite1=body1.GetUserData();
					var sprite2=body2.GetUserData();
					sprite1.visible=false;
					sprite2.visible=false;
					stagea.removeChild(sprite1);
					stagea.removeChild(sprite2);
					
				}
				else if((id1==4&&id2==1)||(id1==1&&id2==4)){
					tankeworld.DestroyBody(body1);
					tankeworld.DestroyBody(body2);
					var sprite1=body1.GetUserData();
					var sprite2=body2.GetUserData();
					sprite1.visible=false;
					sprite2.visible=false;
					stagea.removeChild(sprite1);
					stagea.removeChild(sprite2);
					
				}
				else if((id1==11&&(id2>=3&&id2<=4))){
					var sprite2=body2.GetUserData();
					body2.m_position.x=-40;
					body2.m_position.y=-40;
					tankeworld.DestroyBody(body2);
					sprite2.visible=false;
					stagea.removeChild(sprite2);			   
				}
				else if((id2==11&&(id1>=3&&id1<=4))){
					var sprite1=body1.GetUserData();
					body1.m_position.x=-40;
					body1.m_position.y=-40;
					tankeworld.DestroyBody(body1);
					sprite1.visible=false;
					stagea.removeChild(sprite1);
				}
				// else if(){
				//	 tankeworld.DestroyBody(body1);
				//	 tankeworld.DestroyBody(body2);
				//	 stagea.removeChild(body1.GetUserData());
				//	 stagea.removeChild(body2.GetUserData());
				// }
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
					sprite.visible=false;
					stagea.removeChild(sprite);
				};
			}
	}
}