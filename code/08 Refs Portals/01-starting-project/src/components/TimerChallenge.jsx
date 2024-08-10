import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTIme}) {
    const timer= useRef();
    const dialog = useRef();

    const [timerStart, setTimerStart] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const [timeRemaining, setTimeRemaining] = useState(targetTIme * 1000);
    const  timerIsActive = timeRemaining > 0 && timeRemaining < targetTIme *1000;
    if( timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTIme*1000);
    }
    function handleStart() {
        timer.current = setInterval(()=> {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining -10);
            dialog.current.showModal();
        }, 10);

        setTimerStart(true);
    };

    function handleStop() {
        clearInterval(timer.current)
    }

    function handleReset() {
        setTimeRemaining(targetTIme*1000);
    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTIme} remainingTime={timeRemaining} onReset={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>You lose!</p> }
                <p className="challenge-time">
                    {targetTIme} second{targetTIme > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ?'stop' : 'start' } challenge
                    </button>
                </p>
                <p className={timerIsActive? 'active' : undefined}>
                    <button>
                        {timerIsActive? 'timer is running' : 'timer is unactive'}
                    </button>
                </p>
            </section>
        </>
    )
}