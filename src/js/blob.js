/*
 * David Fischer - https://konst.fish
 *
 */

let config = {
  shapes: [
  {
    fill: '#4ECDC4',
    stroke: '' },

  {
    fill: 'transparent',
    stroke: '#4ECDC4' },

  {
    fill: 'transparent',
    stroke: '#4ECDC4' }],
  duration: 1600,
  morph: 30,
  easing: 'easingQuinticInOut'
};   // http://thednp.github.io/kute.js/easing.html

// let config = {
//   shapes: [
//   {
//     fill: 'transparent',
//     stroke: '#4ECDC4o' },
//
//   {
//     fill: 'transparent',
//     stroke: '#4ECDC4' },
//
//   {
//     fill: 'transparent',
//     stroke: '#4ECDC4' }],
//   duration: 1500,
//   morph: 30,
//   easing: 'easingQuinticInOut' };

let paths = [
  'M977.6-84.7c43.8,75.7,26.5,185.3,23.6,276.3s8.7,163.6-8.8,243.7c-17.5,80-63.9,167.6-139.3,210.3 c-75.4,42.6-180,40.6-253.9-4.2c-73.9-45-117.2-132.6-170.4-217.9S312.3,255.5,313,171.9c0.7-83.4,65-167.3,144.2-236.8 c79.1-69.6,173.1-124.7,272.4-131.3C829-202.6,933.8-160.5,977.6-84.7z',
  'M1006.7-115.2c67.4,134.4,35.1,220.5,26.1,305.8c-10.3,53-2.6,99.6-9.8,269.7 c-15.8,107.6-68.6,196.7-154.1,232.7c-82.1,42.1-195.5,31-281-4.7C490.6,651,450,548.1,399.4,447.1 c-57.7-92.3-128.1-184.4-128.2-278.3c-5-98.2,63.3-194,159.6-262C578.1-190.1,667.2-246,732.3-238.5 C871.9-249.1,963.6-199.7,1006.7-115.2z',
  'M1030.5-138.5c82.3,122.1,46.6,235.4,27.9,326.6c-21.9,127.9,2.6,201.7-10.4,288.1 c-4.5,124.8-62.5,222.3-164.6,248.5c-108.3,20-225.4,27.9-300.1-5c-119.1-41.6-153.8-151.2-201.4-257.6 C327,348.6,248.5,256.7,245,164.8c-17.3-96.6,27.1-192.4,170.4-279.8c178.9-134.3,241.3-169.7,322-155.2 C851.4-266,976.1-219,1030.5-138.5z'
]

let updatePaths = i => {
  document.querySelector(`#blob-path-${i + 1}`).setAttribute('d', paths[i]);
};

// relocates the blob (call with log(tParam[0]) )
let loc = (params) => {
  for (let i = 0; i < 2; i++) {
    KUTE.to(`#blob-path-${i + 1}`,
    {
      path: paths[i],
      svgTransform: params },
    {
      duration: config.duration,
      easing: config.easing,
      morphIndex: config.morph,
     }).
    start();
  }
}

let loader = (params) => {
  for (let i = 0; i < 3; i++) {
    KUTE.to(`#blob-path-${i + 1}`,
    {
      path: paths[i],
      svgTransform: params },
    {
      duration: 0,
      easing: 0,
      morphIndex: 0,
     }).
    start();
  }
}

// coloring blobs
for (let i = 0; i < 3; i++) {
  updatePaths(i);
  let selector = document.querySelector(`#blob-path-${i + 1}`);
  let fillColor = config.shapes[i].fill;
  let strokeColor = config.shapes[i].stroke;
  if (fillColor) { selector.setAttribute('fill', fillColor); }
  if (strokeColor) { selector.setAttribute('stroke', strokeColor); }
}

// transform args
// const tParam = [
// {
//   translate: [-370, -500],
//   rotate: 0,
//   scale: 1.001,
// },
//
// {
//   translate: [390, -180],
//   rotate: 110,
//   scale: 0.9,
// },
//
// {
//   translate: [350, -50],
//   rotate: 45,
//   scale: 1.3,
// },
//
// {
//   translate: [100, 100],
//   rotate: 240,
//   scale: 1.3,
// }
// ];

const tParam = [
//header
{
  translate: [100, 200],
  rotate: -30,
  scale: 1.4,
},
//git
{
  translate: [500, 190],
  rotate: 90,
  scale: 0.9,
},
//skills
{
  translate: [350, -50],
  rotate: 45,
  scale: 1.2,
},
// blog
{
  translate: [-200, 100],
  rotate: 200,
  scale: 1.3,
},
//?
{
  translate: [100, 100],
  rotate: 240,
  scale: 1.3,
},
//up
{
  translate: [300, 135],
  rotate: 240,
  scale: 0.7,
},


];

var l = location.hash.substring(1, location.hash.length);
if(l == ""){ l = 0; }
if(l > 0){ l = l - 1;}
loc(tParam[l]);

// initial blob
// adding page change listener
window.addEventListener('hashchange', function(e){
  var l = location.hash.substring(1, location.hash.length) - 1;
  loc(tParam[l]);
});
