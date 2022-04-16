import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';


const banner = () => {
  return (
    <ParallaxBanner
    layers={[
      { image: '/static/banner-background.jpg', speed: -20 },
      {
        speed: -15,
        children: (
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin">Hello World!</h1>
          </div>
        ),
      },
      { image: '/static/banner-foreground.png', speed: -10 },
    ]}
    className="aspect-[2/1]"
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="text-8xl text-white font-thin">Hello World!</h1>
    </div>
  </ParallaxBanner>
  )
}

export default banner