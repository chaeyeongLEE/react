import {forwardRef} from "react";

const ResultModal = forwardRef(
    function ResultModal({targetTime, remainingTime, onReset}, ref) {

       const userLost = remainingTime <= 0;
       const formattedRemainingTime = (remainingTime/1000).toFixed(2);
       const score = Math.round((1-remainingTime/(targetTime * 1000)) * 100);
        return (
            <dialog ref={ref} className="result-modal">
                {userLost && <h2>you lost</h2>}
                {!userLost && <p>점수:{score} 점 입니다.</p>}
                <p>목표시간은 <strong>{targetTime}</strong>입니다.</p>
                <p>잔여시간은 <strong>{formattedRemainingTime}</strong>초 입니다.</p>
                <form method="dialog" onSubmit={onReset}>
                    <button>Close</button>
                </form>
            </dialog>
        )}
);

export default ResultModal;