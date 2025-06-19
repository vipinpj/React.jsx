import { createRoot } from "react-dom/client";
import App from "./App";
import Main from "./Main";
import Entry from "./Entry";
const root= createRoot(document.getElementById("root"))
root.render(
    <>
            <App />
            <Main />
            <Entry />
   </>
   
)