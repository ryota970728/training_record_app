import { Routes, Route, Navigate } from 'react-router-dom'
import { TrainingHome } from '../pages/TrainingHome'
import { TrainingReference } from '../pages/TrainingReference'
import { TrainingRecord } from '../pages/TrainingRecord'
import { TrainingSearch } from '../pages/TrainingSearch'
import { Layout } from '../components/Layout'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/training-home" replace />} />
    <Route element={<Layout />}>
      <Route path="/training-home" element={<TrainingHome />} />
      <Route path="/training-reference" element={<TrainingReference />} />
      <Route path="/training-record" element={<TrainingRecord />} />
      <Route path="/training-search" element={<TrainingSearch />} />
    </Route>
    <Route path="*" element={<Navigate to="/training-home" replace />} />
  </Routes>
)

export default AppRoutes