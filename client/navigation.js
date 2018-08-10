import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const goToMainScreen = () => history.push("/public");
