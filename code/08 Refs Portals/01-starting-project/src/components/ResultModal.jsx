import {forwardRef} from "react";

const ResultModal = forwardRef(
    function ResultModal({result, targetTime}, ref) {
        return (
            <dialog ref={ref} className="result-modal">
                <h2>you {result}</h2>
                <p>목표시간은 <strong>{targetTime}</strong>입니다.</p>
                <p>잔여시간은 <strong>X</strong>입니다.</p>
                <form method="dialog">
                    <button>Close</button>
                </form>
            </dialog>
        )}
);

export default ResultModal;