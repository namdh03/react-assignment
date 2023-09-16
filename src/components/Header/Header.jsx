import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import config from "@/config";
import { FCodeIcon } from "@/components/Icons";

const Header = ({ dark = false }) => {
    const links = [
        {
            id: 1,
            page: config.routes.countdown,
            title: "Countdown",
        },
        {
            id: 2,
            page: config.routes.form,
            title: "Form",
        },
        {
            id: 3,
            page: config.routes.todo,
            title: "Todo List",
        },
        {
            id: 4,
            page: config.routes.profile,
            title: "Call API",
        },
    ];

    return (
        <header
            className={`fixed top-0 left-0 z-10 w-full bg-white transition-all ${
                dark && "dark:bg-[#01131e]"
            }`}
        >
            <div className="w-[1170px] mx-auto">
                <div className="flex items-center justify-between py-4 h-[118px]">
                    <div className="flex items-center">
                        <Link
                            to={config.routes.countdown}
                            className="flex items-center"
                        >
                            <FCodeIcon />
                            <span className="text-2xl font-bold text-primary">
                                F-Code
                            </span>
                        </Link>
                    </div>

                    <nav>
                        <ul className="flex items-center">
                            {links.map((link) => (
                                <li key={link.id}>
                                    <NavLink
                                        to={link.page}
                                        className={({ isActive }) =>
                                            `p-4 text-[#170F49] text-lg leading-[1.11111] transition-all ${
                                                dark && "dark:text-white"
                                            } ${
                                                isActive &&
                                                "text-primary drop-shadow-sm"
                                            }`
                                        }
                                    >
                                        {link.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    dark: PropTypes.bool,
};

export default Header;
