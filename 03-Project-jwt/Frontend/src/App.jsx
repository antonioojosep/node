import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <Outlet />
    </div>
  );
};

export default App;
