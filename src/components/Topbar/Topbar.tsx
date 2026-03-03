import React from "react";
import { OS_NAME, OS_SUBDESCRIPTION } from "../../contents/os";
import styles from "./Topbar.module.css";

class Topbar extends React.Component {

    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className={styles.topbar}>
                <div className="flex">
                    <h5>{OS_NAME}</h5>
                    <span className={styles.topbarSubDescription}>{OS_SUBDESCRIPTION}</span>
                </div>
            </div>
        );
    }
};

export default Topbar;