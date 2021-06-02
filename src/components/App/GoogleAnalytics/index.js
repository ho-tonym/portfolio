import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const trackingId = "UA-151451202-1"; // Replace with your Google Analytics tracking ID

const GoogleAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize(trackingId);
  },[])
  return <></>
}

export default GoogleAnalytics
