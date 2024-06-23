'use client'

import { useState, useEffect } from 'react';

// Custom hook to get the window size
const useWindowSize = () => {
    // Initialize state with null width/height so server-side rendering works correctly
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
};

export default useWindowSize;