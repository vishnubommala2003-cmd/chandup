import React, { createContext, useContext, useState, useEffect } from 'react';

const IntroContext = createContext({
  introStatus: 'completed', // 'counting' | 'sliding' | 'completed'
  count: 100,
  heroTriggered: true,
  isCompleted: true
});

export function IntroProvider({ children }) {
  // Start in 'counting' state on initial page load / refresh
  const [introStatus, setIntroStatus] = useState('counting');
  const [count, setCount] = useState(0);
  const [heroTriggered, setHeroTriggered] = useState(false);

  useEffect(() => {
    let current = 0;
    // Exactly matches reference counter timing: 35ms interval, +3 to +8 increment
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 6) + 3;
      if (current >= 100) {
        current = 100;
        setCount(100);
        clearInterval(interval);

        // At 100, wait 350ms, then slowly slide up over 1.8 seconds
        setTimeout(() => {
          setIntroStatus('sliding');

          // After slow 1.8s (1800ms) slide-up finishes, THEN website opens!
          setTimeout(() => {
            setIntroStatus('completed');
            setHeroTriggered(true);
          }, 1800);
        }, 350);
      } else {
        setCount(current);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  const value = {
    introStatus,
    count,
    heroTriggered,
    isCompleted: introStatus === 'completed'
  };

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>;
}

export function useIntro() {
  return useContext(IntroContext);
}
