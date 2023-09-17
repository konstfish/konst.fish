/*
 * David Fischer - https://konst.fish
 */

countUpFromTime("Aug 23, 2002 12:38:11", 'age');

var tween_in = null;
var tween_out = null;

var indicatedown = true;

var mobilecheck = window.innerWidth || document.documentElement.clientWidth;

setTimeout(function () {
  if(indicatedown){
    var indicatedownfade = KUTE.to('#indicate-down',{opacity: 1});
    indicatedownfade.start()
  }
}, 4000);

var fp = new fullpage('#fullpage', {
  anchors: ['1', '2', '3', '4', '5', '6'],
  scrollOverflow: true,

  onLeave: function(origin, destination, direction){
      var leavingSection = this;
      console.log("[i] from " + origin.index + " to " + destination.index + "(" + direction + ")")
      if(tween_in != null){
        tween_in.stop()
      }
      if(tween_out != null){
        tween_out.stop()
      }

      if(origin.index == 0){
        var indicatedownfade = KUTE.to('#indicate-down',{opacity: 0});
        indicatedownfade.start()
        indicatedown = false;
      }

      if(destination.index == 0){
        var tween_in = KUTE.allFromTo('.me-slc',{opacity:0, translateY:100},{opacity:1, translateY: 0},{easing:'easingQuinticInOut', duration: 800, offset: 90});
        tween_in.start()
      }
      if(origin.index == 0){
        var tween_out = KUTE.allFromTo('.me-slc',{opacity:1, translateY:0},{opacity:0, translateY: 100},{easing:'easingQuinticInOut'});
        tween_out.start()
      }

      if(destination.index == 1){
        var tween_in = KUTE.allFromTo('.github-repo-selector',{opacity:0, translateY:100},{opacity:1, translateY: 0},{easing:'easingQuinticInOut', duration: 1000, offset: 90});
        tween_in.start()
      }
      if(origin.index == 1){
        var tween_out = KUTE.allFromTo('.github-repo-selector',{opacity:1, translateY:0},{opacity:0, translateY: 100},{easing:'easingQuinticInOutch', duration: 100, offset: 90});
        tween_out.start()
      }

      if(destination.index == 2){
        var tween_in = KUTE.allFromTo('.skills-container',{opacity:0, translateY:100},{opacity:1, translateY: 0},{easing:'easingQuinticInOut', duration: 800, offset: 90});
        tween_in.start()
      }
      if(origin.index == 2){
        var tween_out = KUTE.allFromTo('.skills-container',{opacity:1, translateY:0},{opacity:0, translateY: 100},{easing:'easingQuinticInOut'});
        tween_out.start()
      }

      if(destination.index == 3){
        var tween_in = KUTE.allFromTo('.blog-post-selector',{opacity:0, translateY:100},{opacity:1, translateY: 0},{easing:'easingQuinticInOut', duration: 800, offset: 90});
        tween_in.start()
      }
      if(origin.index == 3){
        var tween_out = KUTE.allFromTo('.blog-post-selector',{opacity:1, translateY:0},{opacity:0, translateY: 100},{easing:'easingQuinticInOut'});
        tween_out.start()
      }

      if(destination.index == 4){
        var tween_in = KUTE.allFromTo('.footer-slc',{opacity:0, translateY:100},{opacity:1, translateY: 0},{easing:'easingQuinticInOut', duration: 800, offset: 90});
        tween_in.start()
      }
      if(origin.index == 4){
        var tween_out = KUTE.allFromTo('.footer-slc',{opacity:1, translateY:0},{opacity:0, translateY: 100},{easing:'easingQuinticInOut'});
        tween_out.start()
      }
    }
});
