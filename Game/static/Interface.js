function getData (user) {
	// body...
	// console.log(tanke1.GetUserData,tanke2.GetUserData)
	if (user=='player1') {
		tankes=[tanke1.GetUserData(),tanke2.GetUserData()]
	} else{
		tankes=[tanke2.GetUserData(),tanke1.GetUserData()]
	};
	var AllData={MyData:'',EnmeyData:'',mapData:''}
	AllData.MyData={My_position:tankes[0].position,
		My_firing:tankes[0].fire.visible
		}
	AllData.EnmeyData={
		Enmey_position:tankes[0].position,
		Enmey_firing:tankes[0].fire.visible
	}
}

function go_left () {
	// body...
	tanke1.GetUserData().position.x-=2;
	if(tanke1.m_rotation!=3.1415){
		var up_texture = PIXI.Texture.fromImage("sources/tanke_left.jpg");
		// tanke1.GetUserData().setTexture(up_texture);
        tanke1.m_rotation=3.1415
		tanke1.GetUserData().direction=3;
	}
}
function go_rigth() {
	// body...
	tanke1.GetUserData().position.x+=2;
	if(tanke1.m_rotation!=0){
				var up_texture = PIXI.Texture.fromImage("sources/tanke_right.jpg");
				// tanke1.GetUserData().setTexture(up_texture);
				tanke1.m_rotation=0;
                tanke1.GetUserData().direction=1;
			}
}
function go_up() {
	// body...
	tanke1.GetUserData().position.y-=2;
	if(tanke1.m_rotation!=3.1415+3.1415/2){
				var up_texture = PIXI.Texture.fromImage("sources/tanke_up.jpg");
				// tanke1.GetUserData().setTexture(up_texture);
                tanke1.m_rotation=3.1415+3.1415/2;
				tanke1.GetUserData().direction=0;
			}
}
function go_down () {
	// body...
	tanke1.GetUserData().position.y+=2
	if(tanke1.m_rotation!=3.1415/2){
		var up_texture = PIXI.Texture.fromImage("sources/tanke_down.jpg");
		// tanke1.GetUserData().setTexture(up_texture);
        tanke1.m_rotation=3.1415/2;
		tanke1.GetUserData().direction=2;
	}
}
function fire (argument) {
	// body...
	tanke1.GetUserData().goFire();
}

function runtanke_test1(){
var timer = null;
clearTimeout(timer);
var j=0;
for (var i = 0; i < 10; i++,j++) {
	timer = setTimeout(go_rigth, j*60);
};
for (var i = 0; i < 120; i++,j++) {
	timer = setTimeout(go_up, j*60);
};
timer = setTimeout(go_rigth, j*60);
j++;
timer = setTimeout(fire, j*60);
}