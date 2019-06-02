var scene = new THREE.Scene();
const width = window.innerWidth;
const height = window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75 , width / height , 0.1 , 10000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( width , height );
document.body.appendChild( renderer.domElement );
var geometry = new THREE.SphereGeometry( 300 , 100 , 100 );
var material = new THREE.MeshLambertMaterial( { map : new THREE.TextureLoader().load('./img/earthmap1k.jpg') } );
var sphere = new THREE.Mesh( geometry , material );
scene.add( sphere );
camera.position.z = 750 ;

var light = new THREE.PointLight(0x0000FF,1);
light.position.set( 5000,0,5000);
scene.add(light);
var light1 = new THREE.PointLight(0xF02F06,3);
light1.position.set( -500,500,500 );
scene.add(light1);


var textures = [ ];
textures[ 0 ] = new THREE.TextureLoader().load( ' ./img/cricbuzz.png ' );                          
textures[ 1 ] = new THREE.TextureLoader().load( ' ./img/nitdgp.png ' );                           
textures[ 2 ] = new THREE.TextureLoader().load( ' ./img/threejs.png ' );                           
textures[ 3 ] = new THREE.TextureLoader().load( ' ./img/youtube.jpg ' );
textures[ 4 ] = new THREE.TextureLoader().load( ' ./img/cricbuzz.png ' );                          
textures[ 5 ] = new THREE.TextureLoader().load( ' ./img/nitdgp.png ' );                           
textures[ 6 ] = new THREE.TextureLoader().load( ' ./img/threejs.png ' );                           
textures[ 7 ] = new THREE.TextureLoader().load( ' ./img/youtube.jpg ' );
textures[ 8 ] = new THREE.TextureLoader().load( ' ./img/cricbuzz.png ' );                          
textures[ 9 ] = new THREE.TextureLoader().load( ' ./img/nitdgp.png ' );                           
textures[ 10 ] = new THREE.TextureLoader().load( ' ./img/threejs.png ' );                           
textures[ 11] = new THREE.TextureLoader().load( ' ./img/youtube.jpg ' );
textures[ 12] = new THREE.TextureLoader().load( ' ./img/cricbuzz.png ' );                          
textures[ 13] = new THREE.TextureLoader().load( ' ./img/nitdgp.png ' );                           
textures[ 14] = new THREE.TextureLoader().load( ' ./img/threejs.png ' );                           
textures[ 15] = new THREE.TextureLoader().load( ' ./img/youtube.jpg ' );
textures[ 16] = new THREE.TextureLoader().load( ' ./img/cricbuzz.png ' );                          
textures[ 17] = new THREE.TextureLoader().load( ' ./img/nitdgp.png ' );                           
textures[ 18] = new THREE.TextureLoader().load( ' ./img/threejs.png ' );                           
textures[ 19] = new THREE.TextureLoader().load( ' ./img/youtube.jpg ' );
textures[ 20] = new THREE.TextureLoader().load( ' ./img/cricbuzz.png ' );                          
textures[ 21] = new THREE.TextureLoader().load( ' ./img/nitdgp.png ' );                           
textures[ 22] = new THREE.TextureLoader().load( ' ./img/threejs.png ' );                           
textures[ 23] = new THREE.TextureLoader().load( ' ./img/youtube.jpg ' );



var materialTtextures = [ ];
for ( var i = 0 ;i < 24 ; i++ )
{
    materialTtextures[ i ] = new THREE.MeshBasicMaterial( { map  : textures[ i ] , transparent : true , opacity : 0.8 , side : THREE.DoubleSide } );
}


var picGeometry = new THREE.CircleGeometry( 70 , 80 );
var pics = [ ];
for ( var i = 0 ; i < 24 ; i++ )
{
    pics[ i ] = new THREE.Mesh( picGeometry , materialTtextures[ i ] );
    
}
pics[0].callback = cricbuzz;
function cricbuzz()
{
    window.open('https://www.cricbuzz.com/');
}
pics[1].callback = nitdgp;
function nitdgp()
{
    window.open('https://www.nitdgp.ac.in/');
}
pics[2].callback = threejs;
function threejs()
{
    window.open('https://threejs.org/');
}
pics[3].callback = youtube;
function youtube()
{
    window.open('https://www.youtube.com/');
}
pics[4].callback = cricbuzz;
function cricbuzz()
{
    window.open('https://www.cricbuzz.com/');
}
pics[5].callback = nitdgp;
function nitdgp()
{
    window.open('https://www.nitdgp.ac.in/');
}
pics[6].callback = threejs;
function threejs()
{
    window.open('https://threejs.org/');
}
pics[7].callback = youtube;
function youtube()
{
    window.open('https://www.youtube.com/');
}
pics[8].callback = cricbuzz;
function cricbuzz()
{
    window.open('https://www.cricbuzz.com/');
}
pics[9].callback = nitdgp;
function nitdgp()
{
    window.open('https://www.nitdgp.ac.in/');
}
pics[10].callback = threejs;
function threejs()
{
    window.open('https://threejs.org/');
}
pics[11].callback = youtube;
function youtube()
{
    window.open('https://www.youtube.com/');
}
pics[12].callback = cricbuzz;
function cricbuzz()
{
    window.open('https://www.cricbuzz.com/');
}
pics[13].callback = nitdgp;
function nitdgp()
{
    window.open('https://www.nitdgp.ac.in/');
}
pics[14].callback = threejs;
function threejs()
{
    window.open('https://threejs.org/');
}
pics[15].callback = youtube;
function youtube()
{
    window.open('https://www.youtube.com/');
}
pics[16].callback = youtube;
function youtube()
{
    window.open('https://www.youtube.com/');
}
pics[17].callback = cricbuzz;
function cricbuzz()
{
    window.open('https://www.cricbuzz.com/');
}
pics[18].callback = nitdgp;
function nitdgp()
{
    window.open('https://www.nitdgp.ac.in/');
}
pics[19].callback = threejs;
function threejs()
{
    window.open('https://threejs.org/');
}
pics[20].callback = youtube;
function youtube()
{
    window.open('https://www.youtube.com/');
}
pics[21].callback = youtube;
function youtube()
{
    window.open('https://www.youtube.com/');
}
pics[22].callback = cricbuzz;
function cricbuzz()
{
    window.open('https://www.cricbuzz.com/');
}
pics[23].callback = nitdgp;
function nitdgp()
{
    window.open('https://www.nitdgp.ac.in/');
}



pics[0].position.set( 301 , 0 , 0 );
pics[1].position.set(  0 , 0 , -301 );
pics[2].position.set( -301 ,0 , 0 );
pics[3].position.set( 0 , 0 , 301 );
pics[4].position.set( -213 , 0 , 213 );
pics[5].position.set( -213 , 0 , -213 );
pics[6].position.set( 213 , 0 , -213 );
pics[7].position.set( 213 , 0 , 213 );
pics[8].position.set( 0 , 213 , 213 );
pics[9].position.set( 0 , -213 , 213 );
pics[10].position.set( 0 , 301 , -301 );
pics[11].position.set( 0 , -301 , 301 );
pics[12].position.set( 173.8 , 173.8 , 173.8 );
pics[13].position.set( -173.8 , 173.8 , 173.8 );
pics[14].position.set( 173.8 , -173.8 , 173.8 );
pics[15].position.set( -173.8 , -173.8 , 173.8 );
pics[16].position.set( 213 , 0 , -213 );
pics[17].position.set( -213 , 0 , 213 );
pics[18].position.set( 213 , 0 , -213 );
pics[19].position.set( -213 , 0 , 213 );
pics[20].position.set( 173.8 , 173.8 , 173.8 );
pics[21].position.set( 173.8 , 173.8 , -173.8 );
pics[22].position.set( 173.8 , -173.8 , -173.8 );
pics[23].position.set( 173.8 , -173.8 , 173.8 );


for ( i = 0 ; i< 24 ; i++ )
{
    pics[i].lookAt(new THREE.Vector3(0,0,0));
}


for ( i = 0 ; i < 24 ; i++ )
{
    sphere.add( pics[i] );
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
        for (  i = 0 ; i < 24 ; i++  )
        {
            intersects[i].object.callback();
        }
        
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
        for ( var i = 0 ; i < 24 ; i++)
        { 
            intersects[i].object.rotation.y += 0.05; 
        }
        
        canvas.style.cursor = "pointer" ;
    }
    else{ canvas.style.cursor = "default"; }
}
document.addEventListener('mousedown',mouseDown,false);
document.addEventListener('mousemove',mouseMove,false);


var k =0 ;
var l = Math.PI/2 ;
var m = 0 ;
var n = Math.PI/2 ;
function animation()
{
    requestAnimationFrame( animation );
    
    camera.position.z = 900 + 200*( Math.sin( k ) +Math.cos(k)) +  200*Math.cos(l)  ;
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
    
    renderer.render( scene , camera );
}
animation();
