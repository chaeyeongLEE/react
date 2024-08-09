import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTIme}) {
    const timer= useRef();
    const dialog = useRef();

    const [timerStart, setTimerStart] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(()=> {
            setTimerExpired(true);
            dialog.current.showModal();
        }, targetTIme * 1000);
        setTimerStart(true);
    };

    function handleStop() {
        clearTimeout(timer.current)
    }

    return (
        <>
            <ResultModal ref={dialog} result="lose" targetTime={targetTIme} />
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>You lose!</p> }
                <p className="challenge-time">
                    {targetTIme} second{targetTIme > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStart ? handleStop : handleStart}>
                        {timerStart ?'stop' : 'start' } challenge
                    </button>
                </p>
                <p className={timerStart? 'active' : undefined}>
                    <button>
                        {timerStart? 'timer is running' : 'timer is unactive'}
                    </button>
                </p>
            </section>
        </>
    )
}