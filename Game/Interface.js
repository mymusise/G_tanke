function getData (user) {
	// body...
	// console.log(tanke1,tanke2)
	if (user=='player1') {
		tankes=[tanke1,tanke2]
	} else{
		tankes=[tanke2,tanke1]
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