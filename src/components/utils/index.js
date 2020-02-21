import * as easings from 'd3-ease'

export const titleAnimTime = 1000
export const preloaderAnim = 4000 // 0
export const copyAnimTime = 1500
const numSvgAnimFirst = 1300
export const numSvgAnim = {
  firstDelay: numSvgAnimFirst,
  secondDelay: 1400, // has to be a bit after numSvgAnimTime
  numConfig: {
    mass: 1,
    tension: 300,
    friction: 60,
    easing: easings.easeCubicInOut,
    duration: numSvgAnimFirst, // same as firstDelay
  },
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
  },
}

export const overLayAnim = {
  showTextDelay: 700,
  closeOverlayDelay: 700,
}

export const secondZeroSvgConfig = {
  mass: 1,
  tension: 300,
  friction: 60,
  easing: easings.easeCubicInOut,
  duration: 900,
}

export const myConfig = { // about 1 second
  mass: 1,
  tension: 300,
  friction: 60,
}
