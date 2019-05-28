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
function animation()
{
    requestAnimationFrame( animation );
    sphere.rotation.y += 0.01 ;
    renderer.render( scene , camera );
}
animation();
