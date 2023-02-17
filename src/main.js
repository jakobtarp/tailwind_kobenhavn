import "./style.css";
import { darkMode } from "./darkmode";

darkMode();

/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

animate("body", { opacity: [0, 1] }, { duration: 5 });
scroll(animate(".progress-bar", { scaleX: [0, 1] }));
