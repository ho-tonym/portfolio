import * as easings from 'd3-ease'
// var easing = BezierEasing(0.645, 0.045, 0.355, 1);
// easing allows to project x in [0.0,1.0] range onto the bezier-curve defined by the 4 points (see schema below).
// console.log(easing(0.0)); // 0.0
// console.log(easing(0.5)); // 0.3125
// console.log(easing(1.0)); // 1.0
// cubic-bezier(0.645, 0.045, 0.355, 1);

export const myConfig = {
  mass: 1,
  tension: 300,
  friction: 60,
  // easing: easing
}
// easeInOutCubic
//duration based - not spring
export const overLayConfig = {
  mass: 1,
  tension: 300,
  friction: 60,
  easing: easings.easeCubicInOut,
  duration: 800
}


// export const imgConfig = {
//   mass: 1,
//   tension: 300,
//   friction: 60,
//   delay:3000
// }

export const delayAnimTime = 1000
export const imageAnimTime = 1200

// useSpring({
//   from: { width: 10, height: 10 },
//   to: async (next) => {
//     // Create a delayed animation
//     next({ width: 100, height: 100, delay: 2000 }) // 2 seconds
//
//     // Immediately override the width animation
//     next({ width: 50 }) // This creates a new animation which starts immediately,
//                         // and it prevents the delayed animation from changing
//                         // the width. The height will still animate in 2 seconds.
//   }
// })
