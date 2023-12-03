import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "@/router/router";

const NotFound = lazy(() => import("@/pages/not-found/not-found"));
const Main = lazy(() => import("@/pages/main/main"));
const Description = lazy(() => import("@/pages/description/description"));

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <Suspense>
            <Main />
          </Suspense>
        }
        />
          <Route
        path={`${AppRoutes.Description}/:id`}
        element={
          <Suspense>
            <Description />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};


