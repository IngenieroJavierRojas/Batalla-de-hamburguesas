import { useState } from "react";
import ReactConfetti from "react-confetti";
export const Confetti = () => {
    const [ time, setTime ] = useState(true);
    const [dimension, setDimension ] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const onChangeTime =()=>setTime(false)
    return (
        <div>
            {time && <ReactConfetti numberOfPieces={40} />} 
        </div>
    );
};
