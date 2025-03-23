/**
 @copyright  2021 Chann Vichea
  @license    apache-2.0
  @Author: Firstname Lastname <https://github.com/ChannVichea>
  @repo       https://github.com/ChannVichea/portfolio
 */

/**node modules*/
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/**css files*/
import "./index.css";
import "lenis/dist/lenis.css";
/**components*/
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
