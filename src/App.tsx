import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MyList from "./pages/my-list";
import { GlobalContextProvider } from "./services/global-state/context";
import "./scss/global.scss";

function App() {
  return (
    <GlobalContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-list" element={<MyList />} />
      </Routes>
    </GlobalContextProvider>
  );
}

export default App;
