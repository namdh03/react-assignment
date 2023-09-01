import PropTypes from "prop-types";

const Button = ({
    children,
    className,
    primary,
    secondary,
    onClick,
    ...outerProps
}) => {
    let props = {
        onClick,
        ...outerProps,
    };

    const classes = `
        ${className ? className : ""}
        ${outerProps.width ? `min-w-[${outerProps.width}]` : "min-w-[118px]"}
        ${
            outerProps.height
                ? `h-[${outerProps.height}] leading-[${outerProps.height}]`
                : "h-[40px] leading-[40px]"
        }
        ${primary ? "!text-white !border-[#03AE85] !bg-[#03AE85]" : ""}
        ${secondary ? "!text-white !border-[#FD6259] !bg-[#FD6259]" : ""}
        px-4
        text-[#323232] dark:text-white text-lg
        border border-solid border-[#D1D1D1] rounded-[3px] bg-[rgba(234,234,234)]/0
    `;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    onClick: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default Button;
