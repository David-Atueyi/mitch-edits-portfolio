import { Route, Routes } from "react-router-dom";
import { GlobalPageLayout } from "./layout/GlobalPageLayout";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" element={<GlobalPageLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
