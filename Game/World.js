var doSleep = false;// body can sleep
var gravity = new b2Vec2(0, 000);// define gravity
var worldAABB=new b2AABB();
var timeStep = 1 / 60;
var iteration = 1;
function createWorld (argument) {
	var worldAABB = new b2AABB();
    worldAABB.minVertex.Set(-400, -400);
    worldAABB.maxVertex.Set(400, 400);
    // create world
    var world = new b2World(worldAABB, gravity, doSleep);
    return world;
    // how many iteration for collisions calculations
}
function initRender (argument) {

}
function addBody(sprite, x, y, width, height, density) {
        var shapeDef = new b2BoxDef();
        shapeDef.extents.Set(width * 0.5, height * 0.5);
        var bodyDef = new b2BodyDef();
        bodyDef.AddShape(shapeDef);
        if (sprite.alpha>10)
        {    
            var basespeed = new b2Vec2(500, 0);
            bodyDef.linearVelocity.SetV(basespeed);
        }

        bodyDef.position.Set(x, y);
        if (density) {
            shapeDef.density = density;
            shapeDef.friction = 1.4;
            shapeDef.restitution = 1.2;
            bodyDef.rotation = 0.1;
        }
        bodyDef.motorSpeed   =0.3
        body = tankeworld.CreateBody(bodyDef);
        body.m_userData = sprite;
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