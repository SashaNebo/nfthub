import { Route, Routes } from 'react-router-dom'

import { MainLayout } from '../../layouts/MainLayout'
import { Home } from '../../pages/Home/Home'
import { baseUrl } from '../../routes'

const AppRouter = () => {

  return (
    <Routes>
      <Route path={baseUrl} element={<MainLayout />}>
        <Route index={true} element={<Home />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  )
}

export { AppRouter }
