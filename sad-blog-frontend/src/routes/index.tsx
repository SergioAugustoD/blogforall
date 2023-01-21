import { Route } from "react-router";
import { Routes } from "react-router-dom";
import DetailPost from "../pages/DetailPost";
import Home from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post-detail/:id" element={<DetailPost />} />
    </Routes>
  );
};
