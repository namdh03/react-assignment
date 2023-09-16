import config from "@/config";

import Countdown from "@/pages/Countdown";
import Form from "@/pages/Form";
import TodoList from "@/pages/TodoList";
import CallAPI from "@/pages/CallAPI";

const routes = [
    { path: config.routes.countdown, component: Countdown },
    { path: config.routes.form, component: Form },
    { path: config.routes.todo, component: TodoList },
    { path: config.routes.profile, component: CallAPI },
];

export { routes };
