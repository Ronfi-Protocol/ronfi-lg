import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Footer from 'components/Layouts/Footer'
import { useIsDarkMode } from 'hooks/store/state/useDarkMode'
import Loading from 'theme/Loading'
import { Box } from 'theme/base'
import ROUTES from 'utils/routes'

import Home from './Home'
import QSReader from './QSReader'
import ScrollToTop from './ScrollToTop'

function App() {
  const isDarkMode = useIsDarkMode()
  return (
    <>
      <Box minHeight="calc(100vh - 100px)">
        <Suspense
          fallback={
            <Box p={4}>
              <Loading />
            </Box>
          }
        >
          <ScrollToTop />
          <QSReader />
          <Routes>
            <Route path={ROUTES.HOME.path} element={<Home />}></Route>
          </Routes>
        </Suspense>
      </Box>

      <Footer />
      <ToastContainer theme={isDarkMode ? 'dark' : 'light'} limit={3} />
    </>
  )
}

export default App
