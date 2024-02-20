import React, { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import portfolio from '../../portfolio.json';
const LoadingScreen = () => {
    const [showDone, setShowDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDone(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);
    return(
        <div className="mockup-browser border border-base-300">
            <div className="mockup-browser-toolbar">
                <div className="input border border-base-300"><code>                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString(portfolio.LoadingScreen.title)
                                    .start();
                            }}
                            options={{
                                wrapperClassName: "styles.typeWriterText",
                            }}
                        /></code></div>
            </div>
            <div className="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
        </div>
    )
}

export default LoadingScreen;