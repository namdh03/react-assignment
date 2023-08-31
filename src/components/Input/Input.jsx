import PropTypes from "prop-types";

const Input = ({ label, type, name, id, ...props }) => {
    return (
        <div className="flex flex-col gap-y-3">
            <input
                {...props}
                type={type}
                name={name}
                id={id}
                className="px-[27px] w-[110px] h-[59px] border border-solid border-[#DBDBDB] rounded
                text-[--text-color] text-[45px] text-center bg-white outline-none
                dark:bg-[#011C2C] dark:text-white"
            />
            <label
                htmlFor={id}
                className="text-[--text-color] dark:text-white text-xs"
            >
                {label}
            </label>
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
};

export default Input;
