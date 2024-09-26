import { useRoutes } from 'react-router-dom'
import Layout from './components/Layout'
import Chat from './components/Chat'

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'chat', element: <Chat /> },
        { path: 'properties', element: <></> },
        { path: 'documents', element: <></> },
        { path: 'offers', element: <></> },
        { path: 'settings', element: <></> },
        { path: 'calendar', element: <></> }
      ]
    }
  ])
  return routeElement
}
