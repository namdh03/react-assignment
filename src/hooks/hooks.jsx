import { useContext } from "react";
import Context from "../Store/Context";

const useStore = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
};

export { useStore };
