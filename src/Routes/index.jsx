import React, { Fragment, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// configs
import { PATH_NAME } from 'configs'

// layouts
import { MainLayout } from 'Layouts'

// guards
import AuthGuard from 'guards/AuthGuard'
import GuestGuard from 'guards/GuestGuard'
import { ROUTES_NAME } from './constans'

// pages
const Dashboard = lazy(() => import('Pages/Dashboard'))
const SignInScreen = lazy(() => import('Pages/sign_in'))
const NotFound = lazy(() => import('Pages/NotFound'))
const routes = [
  {
    path: PATH_NAME.ROOT,
    element: () => <Navigate to="/dashboard" />
  },
  {
    path: ROUTES_NAME.SIGN_IN,
    element: SignInScreen,
    guard: GuestGuard
  },
  {
    path: PATH_NAME.DASHBOARD,
    element: Dashboard,
    guard: AuthGuard
  },
  {
    path: '*',
    element: () => <NotFound />
  }
]

function RoutesMain() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Routes>
          {routes.map((routeItem, routeIndex) => {
            let { element, guard, path } = routeItem
            const Component = element
            const Guard = guard || Fragment

            return (
              <Route
                key={routeIndex}
                path={path}
                element={
                  <Guard>
                    <MainLayout>
                      <Component />
                    </MainLayout>
                  </Guard>
                }
              />
            )
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default RoutesMain
