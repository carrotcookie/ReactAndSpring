import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import ChatMain from "./ChatMain";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<ChatMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
