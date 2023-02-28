import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Van pages/Homepage";
import About from "./pages/Van pages/About";
import Vans, { loader as vansLoader } from "./pages/Van pages/Vans";

import "./server";
import VanDetail from "./pages/Van pages/VanDetail";
import Layout from "./components/Layout";
import Dashboard, { loader as dashboardLoader } from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import Hostlayout from "./components/Hostlayout";

import HostVans, { loader as HostVansLoader } from "./pages/host/HostVans";
import HostVanDetails from "./pages/host/HostVanDetails";

import Host_Van_Details from "./components/Host_Van_Details";
import HostVanPricing from "./components/HostVanPricing";
import HostVanPhotos from "./components/HostVanPhotos";
import HostVanDetailsLayout from "./components/HostVanDetailsLayout";
import Page404 from "./pages/Page404";
import ErrorPage from "./components/ErrorPage";
import Login, { action as loginActions } from "./pages/host/Login";
import AuthRequired from "./components/AuthRequired";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} action={loginActions} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<ErrorPage />}
      />
      <Route path="vans/:id" element={<VanDetail />} />
      <Route element={<AuthRequired />}>
        <Route path="host" element={<Hostlayout />}>
          <Route index element={<Dashboard />} loader={dashboardLoader} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" loader={HostVansLoader} element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetails />}>
            <Route index element={<Host_Van_Details />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
