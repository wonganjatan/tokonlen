import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import { useAuthContext } from "./context/AuthContext";
import Products from "./pages/product/Products";
import ProductDetails from "./pages/product/ProductDetails";
import Cart from "./pages/cart/Cart";

export default function App() {
  const { loggedInUser, loading } = useAuthContext()

  if (loading) {
    return <div>Loading...</div>
  }
  
  return (
    <Routes>
      <Route path="/" element={loggedInUser ? <Layout><Home/></Layout> : <Navigate to="/login" replace/>}/>
      <Route path="/register" element={loggedInUser ? <Navigate to="/" replace/> : <Layout><SignUp/></Layout>}/>
      <Route path="/login" element={loggedInUser ? <Navigate to="/" replace/> : <Layout><SignIn/></Layout>}/>
      <Route path="/products" element={loggedInUser ? <Layout><Products/></Layout> : <Navigate to="/login" replace/>}/>
      <Route path="/products/:id" element={loggedInUser ? <Layout><ProductDetails/></Layout> : <Navigate to="/login" replace/>}/>
      <Route path="/cart" element={loggedInUser ? <Layout><Cart/></Layout> : <Navigate to="/login" replace/>}/>
      {/* <Route path="/orders" element={loggedInUser ? <Navigate to="/" replace/> : <Layout><Products/></Layout>}/> */}
    </Routes>
  )
}