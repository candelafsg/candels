import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation, useOutlet } from 'react-router';
import './page-transition.css';

const PageTransition = () => {
  const location = useLocation();
  const outlet = useOutlet();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isGoingHome, setIsGoingHome] = useState(false);
  const [transitionMode, setTransitionMode] = useState('forward');
  const [prevOutlet, setPrevOutlet] = useState(null);
  const [currentOutlet, setCurrentOutlet] = useState(outlet);
  const transitionTimerRef = useRef(null);

  useLayoutEffect(() => {
    if (currentOutlet === outlet) return;

    const goingToHome = location.pathname === '/' || location.pathname === '/home';
    setIsGoingHome(goingToHome);

    const navMode = location.state && typeof location.state === 'object' ? location.state.transition : undefined;
    setTransitionMode(navMode === 'back' ? 'back' : 'forward');

    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = null;
    }

    setPrevOutlet(currentOutlet);
    setIsTransitioning(true);

    transitionTimerRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setPrevOutlet(null);
      setCurrentOutlet(outlet);
      transitionTimerRef.current = null;
    }, 600);
  }, [location.key, outlet, location.pathname, currentOutlet]);

  useEffect(() => {
    if (!currentOutlet) setCurrentOutlet(outlet);
  }, [currentOutlet, outlet]);

  return (
    <div className="page-transition-wrapper">
      {isTransitioning && prevOutlet ? (
        <>
          <div className="page-transition-layer layer-prev">{prevOutlet}</div>
          <div
            className={`page-transition-layer layer-next ${isTransitioning ? 'transitioning' : ''} ${transitionMode === 'back' ? 'mode-back' : 'mode-forward'} ${isGoingHome ? 'going-home' : 'going-to-page'}`}
          >
            {outlet}
          </div>
        </>
      ) : (
        <div className="page-transition-layer layer-current">{currentOutlet}</div>
      )}
    </div>
  );
};

export default PageTransition;
