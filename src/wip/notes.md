if you pass style like spring- you need to ...spread it

./Preloader.index
titleanim gets called multiple times?
const titleAnimation = useCallback(() => {
	ref.current.map(clearTimeout)
	ref.current = []
	ref.current.push(setTimeout(() => setTitle('TONY HO'), 500))// brings it back- (delay)when to bring it back
	ref.current.push(setTimeout(() => setTitle(''), 2700))// brings it back- (delay)when to bring it back
	setTimeout(() => setColor(false), 2700)
	// 4000 total
}, [])

can make shit shorter
  // const [aniPropsPink, setPink] = useSpring(() => ({ x: 0, y: 0, scale: 1 }))

USECALLBACK
Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).

- useTtransition first arg is the thing that it looks at to change, second needs a key for each array item, or obj, else it can be null. so if first arg isnt a bool you need it

- the item in
{transitions.map(({ item, props, key }) => (
	is whatever value is in here   
	const [titleAnim, setTitleAnim] = useState([])
setTitleAnim(['1'])
- also it has to be called item


================
- to get the length of the path using js to play with the svg

import React, {useEffect} from 'react';
import styles from './overlayNav.module.css'

const ChangingNumber = () => {
	// useEffect(() => {
	// 	const logo = document.querySelectorAll("#changingNumberSVG path")
	// 	console.log(logo);
	// 	for (var i = 0; i < logo.length; i++) {
	// 		console.log("YOOOO", logo[i].getTotalLength())
	// 	}
  // })

	return(
		<svg id="changingNumberSVG" className={styles.changingNumberSVG} x="0" y="0"
			width="55.2" height="25.574" viewBox="0 0 55.2 25.574">
			 <path fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" d="M4.392,3.296h6.24l22.554,11.96
				c1.127,0.606,2.113,0.953,2.958,1.04c0.845,0.086,1.896,0.13,3.152,0.13c0.563,0,1.159-0.011,1.788-0.032
				c0.627-0.022,1.18-0.142,1.657-0.357c0.476-0.218,0.878-0.543,1.202-0.976c0.325-0.434,0.488-1.062,0.488-1.885
				c0-0.997-0.283-1.787-0.846-2.372c-0.563-0.585-1.387-0.878-2.47-0.878h-3.771v-6.63h3.641c1.387,0,2.686,0.26,3.9,0.78
				c1.212,0.52,2.274,1.234,3.185,2.145c0.909,0.866,1.635,1.906,2.177,3.12c0.542,1.213,0.812,2.513,0.812,3.9
				c0,1.732-0.314,3.217-0.941,4.452c-0.629,1.235-1.485,2.264-2.568,3.088c-1.084,0.779-2.318,1.354-3.705,1.723
				c-1.387,0.367-2.859,0.552-4.42,0.552c-1.127,0-2.069-0.022-2.827-0.064c-0.759-0.044-1.485-0.13-2.178-0.261
				c-0.693-0.13-1.388-0.347-2.079-0.649c-0.694-0.304-1.539-0.715-2.535-1.235l-18.786-9.75v11.96H4.392V3.296z"/>
		</svg>
	)
}

export default ChangingNumber


Throttling will delay executing a function. It will reduce the notifications of an event that fires multiple times.

Debouncing will bunch a series of sequential calls to a function into a single call to that function. It ensures that one notification is made for an event that fires multiple times.

if i scroll @ home, it will change if i click in quickly
-scroll, clickin (fast)


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  const body = document.body;
  const html = document.documentElement;
  const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  const handleScroll =
	_.throttle(() => {
     const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
     const windowBottom = windowHeight + window.pageYOffset;
     // console.log(windowBottom/docHeight)
     // if (windowBottom >= docHeight) {
     //    console.log("bot")
     // } else {
     //   console.log("not bot")
     // }
     setLineHeight(5 * windowBottom/docHeight)
     // windowBottom/docHeight
     // console.log(windowBottom/docHeight);
   },200)


use-transition -
