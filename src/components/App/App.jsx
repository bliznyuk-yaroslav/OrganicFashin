import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../../page/HomePage/HomePage";
import Loader from "../Loader/Loader";
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
