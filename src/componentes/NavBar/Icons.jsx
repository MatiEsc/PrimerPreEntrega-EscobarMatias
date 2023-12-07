import { FaBaby, FaChildren } from "react-icons/fa6";
import { RiBearSmileFill } from "react-icons/ri";

const iconStyle = { color: "#f5a524" };

export const Activity = ({ fill, size, height, width, ...props }) => {
    return (
        <svg
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <FaChildren style={iconStyle} />
        </svg>
    );
};

export const Flash = ({ fill = "currentColor", size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <RiBearSmileFill style={iconStyle} />
        </svg>
    );
};

export const Scale = ({ fill = "currentColor", size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <FaBaby style={iconStyle} />
        </svg>
    );
};
