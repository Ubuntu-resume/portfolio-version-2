import React from "react";
import { OS_NAME, OS_SUBDESCRIPTION } from "../../contents/os";
import styles from "./Taskbar.module.css";

class Taskbar extends React.Component {

    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className={styles.taskbar}>
                <div className="flex">
                    <h5>{OS_NAME}</h5>
                    <span className={styles.taskbarSubDescription}>{OS_SUBDESCRIPTION}</span>
                </div>
            </div>
        );
    }
};

export default Taskbar;