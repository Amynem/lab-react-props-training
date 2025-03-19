import { useState } from "react";

function Counter({ className= "" }) {
    const [count, setCount] = useState(0);
    
    return (
        <div className={`rounded border p-3 bg-body-secondary d-flex gap-1 flex-column ${className}`}>
            <p className="m-0 fs-2 fw-lighter text-center">{count}</p>
            <div className="d-flex gap-2">
                <button className="btn btn-secondary btn-sm flex-fill">-</button>
                <button className="btn btn-primary btn-smflex-fill">+</button>
            </div>
        </div>
    )
}

export default Counter;