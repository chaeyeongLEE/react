export default function Calculator({labelName}) {
    return (
        <div className="input-group">
            <label for={labelName}>{labelName}</label>
            <input id={labelName} type="number" />
        </div>
    );
}