import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

export const ConfettiComponent = () => {
    const [ cantConfetti, setCantConfetti ] = useState(70);

    useEffect(() => {
        const interval = setInterval(() => {
            if ( cantConfetti > 0 ) {
                setCantConfetti( cantConfetti - 40 );
            }
        }, 1500);

        return () => clearInterval( interval );
    }, [ cantConfetti ]);

    return (
        <div>
            <Confetti numberOfPieces={ cantConfetti } />
        </div>
    );
};
