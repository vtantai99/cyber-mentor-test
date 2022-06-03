import React, { Fragment, lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

// layouts
import { MainLayout } from 'Layouts'

// guards
import { ROUTES_NAME } from './constans'
import { PrivateRoute, PublicRoute } from 'Guards'
import { useAuth } from 'Hooks'

// pages
const SignInScreen = lazy(() => import('Pages/sign_in'))
const SignUpScreen = lazy(() => import('Pages/sign_up'))
const CreateProjectScreen = lazy(() => import('Pages/create_project'))
const ProjectsScreen = lazy(() => import('Pages/projects'))
const NotFoundScreen = lazy(() => import('Pages/not_found'))

function RoutesMain() {
  const { auth } = useAuth()

  const routes = [
    {
      path: ROUTES_NAME.SIGN_IN,
      element: SignInScreen,
      title: 'Sign in screen',
      guard: PublicRoute
    },
    {
      path: ROUTES_NAME.SIGN_UP,
      element: SignUpScreen,
      title: 'Sign up screen',
      guard: PublicRoute
    },
    {
      path: ROUTES_NAME.CREATE_PROJECT,
      element: CreateProjectScreen,
      title: 'Create project screen',
      guard: PrivateRoute
    },
    {
      path: ROUTES_NAME.PROJECTS,
      title: 'Projects screen',
      element: ProjectsScreen,
      guard: PrivateRoute
    },
    {
      path: '/',
      element: () => auth ? <Navigate to={ROUTES_NAME.PROJECTS} /> : <Navigate to={ROUTES_NAME.SIGN_IN} />
    },
    {
      path: '*',
      element: () => <NotFoundScreen />
    }
  ]

  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Routes>
          {routes.map((routeItem, routeIndex) => {
            let { element, guard, path, title } = routeItem
            const Component = element
            const Guard = guard || Fragment

            return (
              <Route
                key={routeIndex}
                path={path}
                element={
                  <Guard>
                    <MainLayout title={title}>
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
