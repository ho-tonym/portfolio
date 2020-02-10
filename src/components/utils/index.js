import * as easings from 'd3-ease'

export const titleAnimTime = 1000
export const preloaderAnim = 0

const numSvgAnimFirst = 1300
export const numSvgAnim = {
  firstDelay: numSvgAnimFirst,
  secondDelay: 1400, //has to be a bit after numSvgAnimTime
  numConfig: {
    mass: 1,
    tension: 300,
    friction: 60,
    easing: easings.easeCubicInOut,
    duration: numSvgAnimFirst, // same as firstDelay
  }
}

export const homeToProjectAnim = {
  imageDelay: 500,
  doneDelay: 2500,
  imageConfig: {
    mass: 1,
    tension: 300,
    friction: 60,
    easing: easings.easeCubicInOut,
    duration: 1200,
  }
}

export const overLayAnim = {
  showTextDelay: 700,
  closeOverlayDelay: 700
}

export const secondZeroSvgConfig = {
  mass: 1,
  tension: 300,
  friction: 60,
  easing: easings.easeCubicInOut,
  duration: 900,
}
// right, bot links
// title flip
// image enlarge
// overlay enter, exit
export const myConfig = { // about 1 second
  mass: 1,
  tension: 300,
  friction: 60,
}




// redirect

// export const imgConfig = {
//   mass: 1,
//   tension: 300,
//   friction: 60,
//   delay:3000
// }

// easeInOutCubic
// duration based - not spring
