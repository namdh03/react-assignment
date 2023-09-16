import { useState, useEffect } from "react";

import Header from "@/components/Header";
import { MoonIcon, SunIcon } from "@/components/Icons";
import Input from "./Input";
import Button from "./Button";
import { useInputNumber } from "@/hooks";

const Countdown = () => {
    const [hour, setHour] = useInputNumber(0);
    const [minute, setMinute] = useInputNumber(0);
    const [second, setSecond] = useInputNumber(0);
    const [active, setActive] = useState(false);

    const inputs = [
        {
            id: 1,
            label: "Hours",
            type: "number",
            name: "hour",
            htmlId: "hour",
            value: hour,
            onChange: (e) => setHour(e.target.value),
            readOnly: active,
        },
        {
            id: 2,
            label: "Minutes",
            type: "number",
            name: "minute",
            htmlId: "minute",
            value: minute,
            onChange: (e) => setMinute(e.target.value),
            readOnly: active,
        },
        {
            id: 3,
            label: "Seconds",
            type: "number",
            name: "second",
            htmlId: "second",
            value: second,
            onChange: (e) => setSecond(e.target.value),
            readOnly: active,
        },
    ];

    const [darkMode, setDarkMode] = useState(
        localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    const handleChangeMode = () => {
        setDarkMode(!darkMode);
    };

    const handleStart = () => setActive(true);

    const handleStop = () => setActive(false);

    const handleReset = () => {
        setActive(false);
        setHour(0);
        setMinute(0);
        setSecond(0);
    };

    useEffect(() => {
        darkMode
            ? (localStorage.theme = "dark")
            : (localStorage.theme = "light");

        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    useEffect(() => {
        if (!active) return;

        let id = setTimeout(() => {
            // console.log("Start", id);
            second === 0
                ? minute === 0
                    ? hour === 0
                        ? (clearInterval(id), setActive(false))
                        : (setHour(hour - 1), setMinute(59), setSecond(59))
                    : (setMinute(minute - 1), setSecond(59))
                : setSecond(second - 1);
        }, 1000);

        // Cleanup func
        return () => {
            // Resolve problem memory leak when component unmounted
            // console.log("Stop", id);
            clearInterval(id);
        };
    }, [active, hour, minute, second, setHour, setMinute, setSecond]);

    return (
        <>
            <Header dark />
            <div
                id="countdown"
                className="flex items-center justify-center w-[100vw] h-[100vh] bg-white transition-all dark:bg-[#01131E]"
            >
                <div className="relative px-6 py-[18px] w-[431px] h-[313px] rounded bg-[#F9F9F9] transition-all dark:bg-[#011C2C] text-center">
                    <h1 className="text-[--text-color] transition-all dark:text-white text-[22px]">
                        TIMER
                    </h1>

                    <div className="flex justify-center gap-x-[30px] mt-[35px]">
                        {inputs.map((input) => (
                            <Input
                                key={input.id}
                                label={input.label}
                                type={input.type}
                                name={input.name}
                                id={input.htmlId}
                                value={input.value}
                                onChange={(e) => input.onChange(e)}
                                readOnly={active}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center gap-x-[15px] mt-11">
                        <Button primary onClick={handleStart}>
                            START
                        </Button>
                        <Button onClick={handleStop}>PAUSE</Button>
                        <Button secondary onClick={handleReset}>
                            RESET
                        </Button>
                    </div>

                    <div className="absolute left-0 bottom-0 w-[431px] h-2 rounded-[0px_0px_4px_4px] bg-[#FD6259]"></div>

                    <Button
                        className="absolute top-0 right-0 flex justify-center items-center min-w-[40px]
                        px-[0px] rounded-[5px] bg-[#E9E9E9] transition-all"
                        onClick={handleChangeMode}
                    >
                        {darkMode ? <SunIcon /> : <MoonIcon />}
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Countdown;
