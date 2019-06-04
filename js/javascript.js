
var scene = new THREE.Scene();
const width = window.innerWidth;
const height = window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75 , width / height , 0.1 , 10000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( width , height );
document.body.appendChild( renderer.domElement );
var mouse = { x: 0, y: 0 } , INTERSECTED; 
var projector = new THREE.Projector();


var geometry = new THREE.SphereGeometry( 300 , 100 , 100 );
var material = new THREE.MeshLambertMaterial( { map : new THREE.TextureLoader().load(' ./img/earthmap1k.jpg') } ); //./img/earthmap1k.jpg
var sphere = new THREE.Mesh( geometry , material );
scene.add( sphere );
camera.position.z = 700 ;


var light = new THREE.PointLight(0xFFFFFF,1);
light.position.set( 5000,0,5000);
scene.add(light);
var light1 = new THREE.PointLight(0xEAAC17,3);
light1.position.set( -500,500,500 );
scene.add(light1);


controls = new THREE.OrbitControls( camera , renderer.domElement );


var plateGeo = new THREE.PlaneGeometry( 71 , 41 );
var plateMat = new THREE.MeshLambertMaterial({ color : 0xFFFFFF , transparent: true, opacity: 1 } );
var plates = [];
for ( var i = 0 ; i < 6 ; i++ )
{
    plates[i] = new THREE.Mesh(plateGeo , plateMat[i]);
}


var textures = [ ];
textures[ 0 ] = new THREE.TextureLoader().load( './img/cricbuzz.png ' );  //./img/cricbuzz.png                          
textures[ 1 ] = new THREE.TextureLoader().load( ' ./img/nitdgp.png' );  //./img/nitdgp.png                         
textures[ 2 ] = new THREE.TextureLoader().load( ' ./img/threejs.png  ' );  //./img/threejs.png                         
textures[ 3 ] = new THREE.TextureLoader().load( ' ./img/youtube.jpg ' );  //./img/youtube.jpg                         


var picGeo = new THREE.PlaneGeometry( 70 ,40 );
var picMat = [];
for ( var i = 0 ; i < 4 ; i++ )
{
    picMat[i] = new THREE.MeshLambertMaterial({ map : textures[i] , transparent : true , opacity : 1 ,side : THREE.DoubleSide });
}
var pics = [] ;
for ( var i = 0 ; i < 4 ; i++ )
{
    pics[i] = new THREE.Mesh( picGeo , picMat[i] );
}




var cylTtextures = [ ];
for ( var i = 0 ;i < 4 ; i++ )
{
    cylTtextures[ i ] = new THREE.MeshLambertMaterial( { color : 0xFFFFFF , transparent : true , opacity : 0.3 , side : THREE.DoubleSide } );
}


var rodGeometry = new THREE.CylinderGeometry( 2 , 2 , 150 ,32 );
var rods = [ ];
for ( var i = 0 ; i < 4 ; i++ )
{
    rods[ i ] = new THREE.Mesh( rodGeometry , cylTtextures[ i ] );
    
}
rods[0].callback = cricbuzz;
function cricbuzz()
{
    window.open('https://www.cricbuzz.com/');
}
rods[1].callback = nitdgp;
function nitdgp()
{
    window.open('https://www.nitdgp.ac.in/');
}
rods[2].callback = threejs;
function threejs()
{
    window.open('https://threejs.org/');
}
rods[3].callback = youtube;
function youtube()
{
    window.open('https://www.youtube.com/');
}
plates[0].callback = cricbuzz;
plates[1].callback = nitdgp;
plates[2].callback = threejs;
plates[3].callback = youtube;

pics[0].callback = cricbuzz;
pics[1].callback = nitdgp;
pics[2].callback = threejs;
pics[3].callback = youtube;


rods[0].position.set( -50 , 200 , 220 );
rods[1].position.set(  265 , 100 , -100 );
rods[2].position.set( 100 ,-100 , 265 );
rods[3].position.set( -40 , 275 , -114 );



rods[0].lookAt(new THREE.Vector3(-55,245,155));
rods[1].lookAt(new THREE.Vector3(270,95,-105));
rods[2].lookAt(new THREE.Vector3(95,-95,260));
rods[3].lookAt(new THREE.Vector3(301,301,0));



plates[0].position.set( -80 , 247 , 250 );
plates[1].position.set(  280 , 145 , -150 );
plates[2].position.set( 97 ,-60 , 315 );
plates[3].position.set( -80 , 330 , -114 );
//plates[1].rotation.z += 0.45;



plates[0].lookAt( new THREE.Vector3(-60,310,155));
plates[1].lookAt( new THREE.Vector3(550,30,-210));
plates[2].lookAt( new THREE.Vector3( 35,-10,260 ));
//plates[3].lookAt( new THREE.Vector3());

pics[0].position.set( -80 , 247 , 250 );
pics[1].position.set(  280 , 145 , -150 );
pics[2].position.set( 97 ,-60 , 315 );
pics[3].position.set( -80 , 330 , -114 );




pics[0].lookAt( new THREE.Vector3(-60,310,155));
pics[1].lookAt( new THREE.Vector3(550,30,-210));
pics[2].lookAt( new THREE.Vector3( 35,-10,260 ));




for ( i = 0 ; i < 4 ; i++ )
{
    sphere.add( pics[i] );
    sphere.add( plates[i] );
    sphere.add( rods[i] );
    
}
scene.add( sphere );



var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
function mouseDown(event)
{
    event.preventDefault();
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y =  - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse , camera);
    meshObjects = pics ;
    var intersects = raycaster.intersectObjects(meshObjects);
    if ( intersects.length > 0 )
    {
        for (  i = 0 ; i < 4 ; i++  )
        {
            intersects[i].object.callback();
        }
        canvas.style.cursor = "pointer" ;
        
    }
}
function mouseMove(event)
{
    event.preventDefault();
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y =  - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera( mouse , camera );
    var intersects = raycaster.intersectObjects(pics);
    var canvas = document.body.getElementsByTagName('canvas')[0];
    if ( intersects.length > 0 )
    {
        for ( var i = 0 ; i < 4 ; i++)
        { 
            intersects[i].object.material.color.set(0xFF0000);
        }
        
        canvas.style.cursor = "pointer" ;
    }
    else{ canvas.style.cursor = "default"; }
    
   
}
document.addEventListener('mousedown',mouseDown,false);
document.addEventListener('mousemove',mouseMove,false);


var k = 0 ;
var l = Math.PI/2 ;
var m = 0 ;
var n = Math.PI/2 ;
function animation()
{
    requestAnimationFrame( animation );
    camera.position.z = 1000 + 200*( Math.sin( k ) +Math.cos(k)) +  200*Math.cos(l)  ;
    camera.position.x =  600*Math.sin(l) ;
    camera.position.y =  600*Math.sin(l + Math.PI/4) ;


    
    light1.position.x = 400*Math.sin(n);
    light1.position.z = 500*Math.cos(n);
    light1.position.y = 350*Math.cos(n);
    
    l = l + 0.005 ;
    k = k + 0.01 ;
    m = m + 0.005 ;
    n = n + 0.02 ;
    camera.lookAt( new THREE.Vector3(0,0,0) );

   update();
    
    renderer.render( scene , camera );
}
animation();




function update()
{
	
    
	var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
	projector.unprojectVector( vector, camera );
	var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	var intersects = ray.intersectObjects( pics );

	if ( intersects.length > 0 )
	{
		if ( intersects[ 0 ].object != INTERSECTED ) 
		{
			if ( INTERSECTED ) 
				INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
			INTERSECTED = intersects[ 0 ].object;
			INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
            INTERSECTED.material.color.setHex( 0x00ff00 );
            
		}
	} 
	else 
	{
		if ( INTERSECTED ) 
            INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
            
        INTERSECTED = null;
        
        
	}


	
	
	controls.update();
	
}


