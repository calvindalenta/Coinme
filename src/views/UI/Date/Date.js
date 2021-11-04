import moment from "moment";
import Time from "../../styled/Time";

export default function Date() {
    const date = moment().format("MMM DD, YYYY")
    return <Time>Today {date}</Time>
}