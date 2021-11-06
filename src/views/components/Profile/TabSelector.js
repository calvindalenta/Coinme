import { Link } from "react-router-dom";

const TabSelector = ({isActive, children, onClick}) => (
    <Link to="#" className={isActive ? "active" : ''} onClick={onClick}>
        {children}
    </Link>
);

export default TabSelector;