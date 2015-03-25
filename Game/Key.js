	function KeyDown(e){
		console.log("key press!");
		var currKey=0,e=e||event;
		currKey=e.keyCode||e.which||e.charCode;
		var keyName = String.fromCharCode(currKey);
		console.log("currKey:"+currKey+" keyname:"+keyName)
		if (currKey==37)
		{
			tanke1.GetUserData().position.x-=2;
			if(tanke1.m_rotation!=3.1415){
				var up_texture = PIXI.Texture.fromImage("sources/tanke_left.jpg");
				// tanke1.GetUserData().setTexture(up_texture);
                tanke1.m_rotation=3.1415
				tanke1.GetUserData().direction=3;
			}
		}
		else if (currKey==39)
		{
			tanke1.GetUserData().position.x+=2
			if(tanke1.m_rotation!=0){
				var up_texture = PIXI.Texture.fromImage("sources/tanke_right.jpg");
				// tanke1.GetUserData().setTexture(up_texture);
				tanke1.m_rotation=0;
                tanke1.GetUserData().direction=1;
			}
		}
		else if (currKey==38)
		{
			tanke1.GetUserData().position.y-=2
			if(tanke1.m_rotation!=3.1415+3.1415/2){
				var up_texture = PIXI.Texture.fromImage("sources/tanke_up.jpg");
				// tanke1.GetUserData().setTexture(up_texture);
                tanke1.m_rotation=3.1415+3.1415/2;
				tanke1.GetUserData().direction=0;
			}
		}
		else if (currKey==40)
		{
			tanke1.GetUserData().position.y+=2
			if(tanke1.m_rotation!=3.1415/2){
				var up_texture = PIXI.Texture.fromImage("sources/tanke_down.jpg");
				// tanke1.GetUserData().setTexture(up_texture);
                tanke1.m_rotation=3.1415/2;
				tanke1.GetUserData().direction=2;
			}
		}

		else if (currKey==76)
		{
			tanke2.GetUserData().position.x+=2
			if(tanke2.m_rotation=0){
				var up_texture = PIXI.Texture.fromImage("sources/tanke_right.jpg");
				// tanke2.GetUserData().setTexture(up_texture);
                tanke2.m_rotation=0;
				tanke2.GetUserData().direction=1;
			}
		}
		else if (currKey==73)
		{
			tanke2.GetUserData().position.y-=2
			if(tanke2.m_rotation!=3.1415+3.1415/2){
				var up_texture = PIXI.Texture.fromImage("sources/tanke_up.jpg");
				// tanke2.GetUserData().setTexture(up_texture);
				tanke2.m_rotation=3.1415+3.1415/2;
                tanke2.GetUserData().direction=0;
			}
		}
		else if (currKey==74)
		{
			tanke2.GetUserData().position.x-=2
			if(tanke2.m_rotation!=3.1415){
				var up_texture = PIXI.Texture.fromImage("sources/tanke_left.jpg");
				// tanke2.GetUserData().setTexture(up_texture);
				tanke2.m_rotation=3.1415;
                tanke2.GetUserData().direction=3;
			}
		}
		else if (currKey==75)
		{
			tanke2.GetUserData().position.y+=2
			if(tanke2.m_rotation!=3.1415/2){
				var up_texture = PIXI.Texture.fromImage("sources/tanke_down.jpg");
				// tanke2.GetUserData().setTexture(up_texture);
				tanke2.m_rotation=3.1415/2;
                tanke2.GetUserData().direction=2;
			}
		}

		else if (currKey==83)
		{
				tanke1.GetUserData().goFire();
		}
		else if (currKey==88)
		{
				tanke2.GetUserData().goFire();
		}
	}