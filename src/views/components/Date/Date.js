import moment from "moment";

import "./Date.scss";

export default function Date() {
    const date = moment().format("MMM DD, YYYY")

    return (
        <time>Today {date}</time>
    )
}