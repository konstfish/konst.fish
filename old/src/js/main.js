// load in particles
particlesJS.load('particles-js', 'src/json/particles.json', function() {
  console.log('particles.js loaded - callback');
});

// wait 1.25 seconds, then move loader
setTimeout(
function()
  {
    $(".loader").css({"right":"0%"}).animate({"right":"100%"}, "slow");
  }, 1250);
