import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import config from "../../config";
import { FCodeIcon } from "../Icons";

const Header = ({ dark = false }) => {
    return (
        <header
            className={`fixed top-0 left-0 z-10 w-full bg-white transition-all ${
                dark ? "dark:bg-[#01131e]" : ""
            }`}
        >
            <div className="w-[1170px] mx-auto">
                <div className="flex items-center justify-between py-4 h-[118px]">
                    <div className="flex items-center">
                        <Link
                            to={config.routes.countdown}
                            className="flex items-center"
                        >
                            <FCodeIcon></FCodeIcon>
                            <span className="text-2xl font-bold text-[rgb(69,206,124)] leading-[]">
                                F-Code
                            </span>
                        </Link>
                    </div>

                    <div className="">
                        <nav>
                            <ul className="flex items-center">
                                <li>
                                    <Link
                                        to={config.routes.countdown}
                                        className={`p-4 text-[#170F49] text-lg leading-[1.11111] transition-all ${
                                            dark ? "dark:text-white" : ""
                                        }`}
                                    >
                                        Countdown
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={config.routes.form}
                                        className={`p-4 text-[#170F49] text-lg leading-[1.11111] transition-all ${
                                            dark ? "dark:text-white" : ""
                                        }`}
                                    >
                                        Form
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={config.routes.todo}
                                        className={`p-4 text-[#170F49] text-lg leading-[1.11111] transition-all ${
                                            dark ? "dark:text-white" : ""
                                        }`}
                                    >
                                        Todo List
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={config.routes.profile}
                                        className={`p-4 text-[#170F49] text-lg leading-[1.11111] transition-all ${
                                            dark ? "dark:text-white" : ""
                                        }`}
                                    >
                                        Call API
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    dark: PropTypes.bool,
};

export default Header;
