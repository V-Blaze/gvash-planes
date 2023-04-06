import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // clear the alert and notice for every page change

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <header>
        <nav>
          {/* Navigation links go here */}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
};

export default AuthLayout;
