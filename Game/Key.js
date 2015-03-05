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
        else if (currKey==39)
        {
            tanke1.position.x+=2
        }
        else if (currKey==38)
        {
            tanke1.position.y-=2
        }
        else if (currKey==40)
        {
            tanke1.position.y+=2
        }

        else if (currKey==76)
        {
            tanke2.position.x+=2
        }
        else if (currKey==73)
        {
            tanke2.position.y-=2
        }
        else if (currKey==74)
        {
            tanke2.position.x-=2
        }
        else if (currKey==75)
        {
            tanke2.position.y+=2
        }

        else if (currKey==83)
        {
            if(tanke1.fire.visible==false)
            {
                tanke1.init_Fire();
            }
        }
        else if (currKey==88)
        {
            if(tanke2.fire.visible==false)
            {
                tanke2.init_Fire();
            }
        }
    }