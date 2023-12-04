import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "@/router/router";
import { TableLoader } from "@/components/loaders/table-loader/table-loader";
import { ImageLoader } from "@/components/loaders/image-loader/image-loader";
import { GridLoader } from "@/components/loaders/grid-loader/grid-loader";

const NotFound = lazy(() => import("@/pages/not-found/not-found"));
const Main = lazy(() => import("@/pages/main/main"));
const Login = lazy(() => import("@/pages/login/login"));

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <Suspense fallback={<TableLoader />}>
            <Main />
          </Suspense>
        }
      />
      <Route
        path={AppRoutes.Login}
        element={
          <Suspense fallback={<GridLoader />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<ImageLoader />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};




