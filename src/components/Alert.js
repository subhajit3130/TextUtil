import React from 'react'

export default function Alert(props) {

    const capitalizeWord = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div className="lh-1 fst-italic" style={{ height: "30px", fontSize: "13px" }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalizeWord(props.alert.type)}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}
