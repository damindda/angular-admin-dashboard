import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

/**
 *
 * pages
 */
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import TopNavbar from './components/top-navbar/Topnavbar';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

/**
 *
 * global styles
 */
import './styles/styles.scss';

const App = () => {
  const Layout = () => {
    return (
      <div className="main-layout">
        <TopNavbar />
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="content-container">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  /**
   *
   * router paths
   */
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: '/products',
          element: <Products />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
