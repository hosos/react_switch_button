import React, { useState } from "react";
import "./index.css";
import classNames from "classnames";

// If you wanna implement by TypeScript (Advanced Requirement 1), then rename this file to index.tsx and remove index.jsx
// Otherwise, remove this file

interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
}

const Switch = (props: Props) => {

    const { onChange, checked, disabled } = props;

    const checkedState = useState(false);
    const disabledState = useState(false);

    const onToggle = () => {
        if (disabled || disabledState[0]) {
            return;
        }
        if (typeof onChange === "function") {
            onChange(typeof checked === "undefined" ? !checkedState[0] : !checked);
        } else {
            checkedState[1](typeof checked === "undefined" ? !checkedState[0] : !checked);
        }
    };

    const switchClasses = {
        active: checked || checkedState[0],
        disabled: disabled || disabledState[0],
    };

    return (
        <div className={classNames("comp-switch", switchClasses)} onClick={onToggle}>
            <span className={classNames("comp-switch-circle", switchClasses)} />
        </div>
    );
};

export default Switch;
