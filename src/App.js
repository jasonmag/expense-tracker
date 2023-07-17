import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider
} from 'react-router-dom';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Expenses } from "./pages/Expenses";
import { NewExpense } from "./pages/NewExpense";
import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { AccountsTable } from "./pages/AccountsTable";
import { Account } from "./pages/Account";
import { AccountType } from "./pages/AccountType";



function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/expenses" element={<Expenses />}/>
        <Route path="/new-expense" element={<NewExpense />}/>
        <Route path="/accounts" element={<AccountsTable />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/account-type" element={<AccountType />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/registration" element={<Registration />}/>
      </Route>
    )
  )

  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </div>
  );

};

const Root = () => {
  return (
    <>
      {/* <div>
        <Link to="/">Home</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/new-expense">New Expenses</Link>
        <Link to="/about">About</Link>
      </div> */}

      <div>
        <Outlet/>
      </div>
    </>
  );
};

export default App;
