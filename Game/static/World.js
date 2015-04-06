var doSleep = false;// body can sleep
var gravity = new b2Vec2(0, 000);// define gravity
var worldAABB=new b2AABB();
var timeStep = 1 / 60;
var iteration = 1;
function createWorld (argument) {
	var worldAABB = new b2AABB();
    worldAABB.minVertex.Set(-400, -400);
    worldAABB.maxVertex.Set(620, 620);
    // create world
    var world = new b2World(worldAABB, gravity, doSleep);
    return world;
    // how many iteration for collisions calculations
}

function addBody(sprite, x, y, width, height, density,direction) {
        var shapeDef = new b2BoxDef();
        shapeDef.extents.Set(width * 0.5, height * 0.5);
        var bodyDef = new b2BodyDef();
        bodyDef.AddShape(shapeDef);
        if (sprite.alpha>=2&&sprite.alpha<10)
        {   
            // console.log(sprite.parent.rotation);
            if (direction==0) {
                var basespeed = new b2Vec2(0, -800);
                bodyDef.linearVelocity.SetV(basespeed);
                y=y-30
            }
            else if (direction==1){
                var basespeed = new b2Vec2(800, 0);
                bodyDef.linearVelocity.SetV(basespeed);
                x=x+25

            }
            else if (direction==2){
                var basespeed = new b2Vec2(0, 800);
                bodyDef.linearVelocity.SetV(basespeed);
                y=y+30

            }
            else if (direction==3){
                var basespeed = new b2Vec2(-800, 0);
                bodyDef.linearVelocity.SetV(basespeed);
                x=x-25

            }
        }

        bodyDef.position.Set(x, y);
        if (density) {
            shapeDef.density = density;
            shapeDef.friction = 1.4;
            // bodyDef.rotation = 0.1;
        }
            shapeDef.restitution = 1.2;
        
        bodyDef.motorSpeed   =0.8
        body = tankeworld.CreateBody(bodyDef);
        body.m_userData = sprite;
        return body;
    }

function draw() {
	var body, sprite;
	for (body = tankeworld.m_bodyList; body; body = body.m_next) {
	    // console.log(body);
	    sprite = body.GetUserData();
	    if (sprite) {
	        sprite.position = body.GetCenterPosition();
	        sprite.rotation = body.GetRotation();
	    }
}
}