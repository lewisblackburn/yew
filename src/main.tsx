import { render } from "preact";
import { App } from "./app";
import "./index.css";
import { appWindow } from "@tauri-apps/api/window";

appWindow.setDecorations(false);
appWindow.setAlwaysOnTop(false);

render(<App />, document.getElementById("app")!);
