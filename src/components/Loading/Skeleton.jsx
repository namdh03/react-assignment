import PropTypes from "prop-types";

const Skeleton = (props) => {
    return (
        <div
            className="loading-skeleton"
            style={{
                width: props.width || "100%",
                height: props.height || "100%",
            }}
        ></div>
    );
};

Skeleton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
};

export default Skeleton;
