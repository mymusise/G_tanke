    function KeyDown(e){
        console.log("key press!");
        var currKey=0,e=e||event;
        currKey=e.keyCode||e.which||e.charCode;
        var keyName = String.fromCharCode(currKey);
        console.log("currKey:"+currKey+" keyname:"+keyName)
        if (currKey==37)
        {
            tanke1.position.x-=2
        }
        if (currKey==39)
        {
            tanke1.position.x+=2
        }
        if (currKey==38)
        {
            tanke1.position.y-=2
        }
        if (currKey==40)
        {
            tanke1.position.y+=2
        }
        if (currKey==83)
        {
            fire1=1;
            tanke1.init_Fire();
            
        }
    }