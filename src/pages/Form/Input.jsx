import PropTypes from "prop-types";
import { ErrorIcon } from "../../components/Icons";

const Input = ({ label, name, email, errorMsg, ...props }) => {
    // console.log(errorMsg);
    return (
        <div className="flex flex-col gap-y-2">
            <label
                htmlFor={name}
                className="text-[#10002E] text-sm font-bold leading-[1.42875] tracking-[0.4px]"
            >
                {label}
            </label>

            <input
                type={email ? "email" : "text"}
                className={`min-w-[328px] h-48px p-3 border border-solid ${
                    errorMsg
                        ? "border-[#C83532] bg-[#FBEFEF]"
                        : "border-[#D5D4DC] bg-white"
                }
                        text-[#10002E] text-base font-normal leading-[1.5] tracking-[0.2px]
                        rounded-lg transition-all outline-none
                        placeholder:text-[#8B849B] placeholder:text-base placeholder:font-normal
                        placeholder:leading-[1.5] placeholder:tracking-[0.2px]
                        hover:bg-[#F5F8FF] hover:border-[#8BB4FF]
                        focus:border-[#0F62FE]
                    `}
                name={name}
                {...props}
            />

            {errorMsg && (
                <div className="flex items-center gap-x-1">
                    <span>
                        <ErrorIcon></ErrorIcon>
                    </span>
                    <p className="text-[#C83532] text-xs leading-[1.5] tracking-[0.2px]">
                        {errorMsg}
                    </p>
                </div>
            )}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    email: PropTypes.bool,
    name: PropTypes.string,
    errorMsg: PropTypes.string,
};

export default Input;
