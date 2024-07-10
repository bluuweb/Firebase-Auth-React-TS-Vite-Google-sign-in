import { router } from "@/config/router";
import { getAuth } from "firebase/auth";
import { RouterProvider } from "react-router-dom";
import { AuthProvider, useFirebaseApp } from "reactfire";

const App = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return (
    <AuthProvider sdk={auth}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
export default App;
