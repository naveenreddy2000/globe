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
var light = new THREE.PointLight(0xFFFFFF,1);
light.position.set( 500,0,500 );
scene.add(light);
controls = new THREE.OrbitControls( camera , renderer.domElement );

var textures = [ ];
textures[ 0 ] = new THREE.TextureLoader().load( ' ./img/cricbuzz.png ' );                          
textures[ 1 ] = new THREE.TextureLoader().load( ' ./img/nitdgp.png ' );                           
textures[ 2 ] = new THREE.TextureLoader().load( ' ./img/threejs.png ' );                           
textures[ 3 ] = new THREE.TextureLoader().load( ' ./img/youtube.jpg ' );                           
var materialTtextures = [ ];
for ( var i = 0 ;i < 4 ; i++ )
{
    materialTtextures[ i ] = new THREE.MeshLambertMaterial( { map  : textures[ i ] , transparent : true , opacity : 0.8 , side : THREE.DoubleSide } );
}
var picGeometry = new THREE.PlaneGeometry( 80 , 80 );
var pics = [ ];
for ( var i = 0 ; i < 4 ; i++ )
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
pics[0].position.set( 350 , 0 , 0 );
pics[1].position.set(  -200 , -200 , 213 );
pics[2].position.set( -200 ,200 , -213 );
pics[3].position.set( -200 , 200 , 213 );
for ( i = 0 ; i < 4 ; i++ )
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
        intersects[0].object.callback();
        intersects[1].object.callback();
        intersects[2].object.callback();
        intersects[3].object.callback();
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
        intersects[0].object.rotation.y += 0.05;     
        intersects[1].object.rotation.y += 0.05;
        intersects[2].object.rotation.y += 0.05;
        intersects[3].object.rotation.y += 0.05
        canvas.style.cursor = "pointer";
    }
    else{ canvas.style.cursor = "default"; }
}
document.addEventListener('mousedown',mouseDown,false);
document.addEventListener('mousemove',mouseMove,false);
function animation()
{
    requestAnimationFrame( animation );
    sphere.rotation.y += 0.01 ;
    renderer.render( scene , camera );
}
animation();