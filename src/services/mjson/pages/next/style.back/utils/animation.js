import { applyResponsiveRule, applyRule, withUnits } from './utils'
import includes from 'lodash/includes'

const getAnimationDirection = (ruleset, selector, { direction, type }) => {
  if(type === 'slide') {
    if(direction === 'center') applyRule(ruleset.standard, selector, { transform: 'scale3d(0.5, 0.5, 0.5)' })
    if(direction === 'right') applyRule(ruleset.standard, selector, { transform: 'translate3d(-100%, 0, 0)' })
    if(direction === 'left') applyRule(ruleset.standard, selector, { transform: 'translate3d(100%, 0, 0)' })
    if(direction === 'up') applyRule(ruleset.standard, selector, { transform: 'translate3d(0, 100%, 0)' })
    if(direction === 'down') applyRule(ruleset.standard, selector, { transform: 'translate3d(0, -100%, 0)' })
  }
  if(includes(['zoom','fold'], type)) {
    applyRule(ruleset.standard, selector, { transform: 'scale3d(0.5, 0.5, 0.5)' })
    if(direction === 'center') applyRule(ruleset.standard, selector, { transformOrigin: 'center' })
    if(direction === 'right') applyRule(ruleset.standard, selector, { transformOrigin: 'left' })
    if(direction === 'left') applyRule(ruleset.standard, selector, { transformOrigin: 'right' })
    if(direction === 'up') applyRule(ruleset.standard, selector, { transformOrigin: 'bottom' })
    if(direction === 'down') applyRule(ruleset.standard, selector, { transformOrigin: 'top' })
  }
  if(type === 'flip') {
    if(includes(['center','down'], direction)) applyRule(ruleset.standard, selector, { transform: 'perspective(2000px) rotateX(45deg)' })
    if(direction === 'right') applyRule(ruleset.standard, selector, { transform: 'perspective(2000px) rotateY(-45deg)' })
    if(direction === 'left') applyRule(ruleset.standard, selector, { transform: 'perspective(2000px) rotateY(45deg)' })
    if(direction === 'up') applyRule(ruleset.standard, selector, { transform: 'perspective(2000px) rotateX(-45deg)' })
  }
  if(type === 'fold') {
    if(includes(['center','left'], direction)) applyRule(ruleset.standard, selector, { transform: 'perspective(2000px) rotateY(-45deg)' })
    if(direction === 'right') applyRule(ruleset.standard, selector, { transform: 'perspective(2000px) rotateY(45deg)' })
    if(direction === 'up') applyRule(ruleset.standard, selector, { transform: 'perspective(2000px) rotateX(45deg)' })
    if(direction === 'down') applyRule(ruleset.standard, selector, { transform: 'perspective(2000px) rotateX(-45deg)' })
  }
  if(type === 'roll') {
    if(includes(['left','right','down'], direction)) applyRule(ruleset.standard, selector, { transform: 'rotateZ(180deg)' })
    if(includes(['left','up'], direction)) applyRule(ruleset.standard, selector, { transform: 'rotateZ(-180deg)' })
  }
}

const getAnimationDuration = (ruleset, selector, animationDuration) => {
  applyRule(ruleset.standard, selector, { animationDuration })
}

const getAnimationDelay = (ruleset, selector, animationDelay) => {
  applyRule(ruleset.standard, selector, { animationDelay })
}

const getAnimationIntensity = (ruleset, selector, intensity) => {}

const getAnimationOpacity = (ruleset, selector, value) => {
  const opacity = parseInt(value) / 100
  applyRule(ruleset.standard, selector, { opacity })
}

const getAnimationCurve = (ruleset, selector, curve) => {
  applyRule(ruleset.standard, selector, { animationTimingFunction: curve })
}

const getAnimationRepeat = (ruleset, selector, repeat) => {
  applyRule(ruleset.standard, selector, { animationIterationCount: repeat === 'loop' ? 'infinite' : 1 })
}

const getAnimationName = (ruleset, selector, { direction, type }) => {
  const animationName = type + (includes(['flip','bounce','fold','roll'], type) ? (direction !== 'center' ? direction : '') : '')
  applyRule(ruleset.standard, selector, { animationName })
}

const getAnimation = (ruleset, selector, animation) => {
  applyRule(ruleset.standard, selector, { animationFillMode: 'forwards' })
  getAnimationDuration(ruleset, selector, animation.duration)
  getAnimationDelay(ruleset, selector, animation.delay)
  getAnimationOpacity(ruleset, selector, animation.opacity)
  getAnimationCurve(ruleset, selector, animation.curve)
  getAnimationRepeat(ruleset, selector, animation.repeat)
  if(!includes(['fade','bounce'], animation.type)) {
    getAnimationDirection(ruleset, selector, animation)
    getAnimationIntensity(ruleset, selector, animation.intensity)
  }
  getAnimationName(ruleset, selector, animation)
}

export const applyAnimation = (rulesets, selector, animation) => {
  if(!animation || !animation.type) return
  applyResponsiveRule(rulesets, selector, animation, getAnimation)
}
