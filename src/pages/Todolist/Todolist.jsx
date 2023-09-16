import { useStore } from "@/hooks";
import { actions } from "@/Store";
import { BinIcon, EditIcon } from "@/components/Icons";
import { useRef } from "react";
import Header from "@/components/Header";

// Bài này chủ yếu áp dụng kiến thức học được từ trên mạng
// của React.Context, useContext và useReducer để thực hành
// cách thức của các hook hoạt động như thế nào? :)
// Thấy hay nên áp dụng thử luôn
// https://www.notion.so/fullstackwebapp/F8-X-y-D-ng-Website-v-i-ReactJS-f9593490c85d4939bb84f729c5903039?pvs=4#cfa4e6c75c33456e8971dc90a7647452
const TodoList = () => {
    const [state, dispatch] = useStore();
    const inputRef = useRef(null);

    const handleSetJob = (e) => {
        const value = e.target.value;

        if (!value.startsWith(" ")) {
            dispatch(actions.setJob(value));
        }
    };

    const handleAddJob = () => {
        if (state.job.length > 0) {
            dispatch(actions.addJob(state.job));
            dispatch(actions.setJob(""));
        }

        inputRef.current.focus();
    };

    const handleEditJob = (index) => {
        dispatch(actions.setJob(state.jobs[index]));
        dispatch(
            actions.setEdit({
                index,
                status: true,
            })
        );
        inputRef.current.focus();
    };

    const handleUpdateJob = () => {
        if (state.job.length > 0) {
            dispatch(
                actions.updateJob({
                    index: state.isEdit.index,
                    job: state.job,
                })
            );
            dispatch(actions.setJob(""));
            dispatch(
                actions.setEdit({
                    status: false,
                })
            );
        } else {
            inputRef.current.focus();
        }
    };

    return (
        <>
            <Header />
            <div id="todo" className="mt-[118px]">
                <div className="w-[700px] mx-auto p-20 bg-[#fcfcfc]">
                    <h1 className="text-[40px] text-center">MY TO DO LIST</h1>

                    <div className="flex items-center mt-[20px] shadow-[0px_10px_20px_0px_#F0F0F0]">
                        <input
                            ref={inputRef}
                            type="text"
                            className="w-full px-[20px] py-[16px] rounded-[10px_0px_0px_10px] bg-white outline-none
                        text-[--text-color] text-xl
                        placeholder:text-[#5A5A5A]"
                            placeholder="F-Code to do list"
                            value={state.job}
                            onChange={handleSetJob}
                        />
                        <button
                            className="flex items-center justify-center w-[94px] h-[57px] leading-[57px] px-[16px] py-[10px]
                        rounded-[0px_10px_10px_0px]
                        text-xl text-white bg-blue-400 hover:opacity-90"
                            onClick={
                                state.isEdit.status
                                    ? handleUpdateJob
                                    : handleAddJob
                            }
                        >
                            {state.isEdit.status ? "Update" : "Add"}
                        </button>
                    </div>

                    {state.jobs?.length > 0 && (
                        <ul className="flex flex-col gap-y-[12px] mt-5 w-full">
                            {state.jobs.map((job, index) => {
                                if (typeof job === "object") return;

                                return (
                                    <li
                                        key={index}
                                        className="flex items-center justify-between h-[57px] p-5 border border-solid border-[#D9D9D9]
                                    bg-white shadow-[0px_10px_20px_0px_rgba(240,240,240,0.25)]"
                                    >
                                        <p className="text-[#5A5A5A] text-xl break-all text-line">
                                            {job}
                                        </p>
                                        <div className="flex items-center">
                                            <button
                                                className="p-[5px] cursor-pointer"
                                                onClick={() =>
                                                    dispatch(
                                                        actions.removeJob(index)
                                                    )
                                                }
                                            >
                                                <BinIcon />
                                            </button>
                                            <button
                                                className="p-[5px] cursor-pointer"
                                                onClick={() =>
                                                    handleEditJob(index)
                                                }
                                            >
                                                <EditIcon />
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
};

export default TodoList;
