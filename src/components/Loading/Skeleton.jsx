import PropTypes from "prop-types";

const Skeleton = ({ width = "100%", height = "100%" }) => {
    return (
        <div
            className="loading-skeleton"
            style={{
                width,
                height,
            }}
        ></div>
    );
};

Skeleton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
};

export default Skeleton;
