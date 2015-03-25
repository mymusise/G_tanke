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