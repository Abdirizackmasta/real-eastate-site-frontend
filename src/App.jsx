import { useLocation } from "react-router-dom";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./components/auth/signup/signup";
import Login from "./components/auth/login/Login";
import Footer from "./components/footer/Footer";
import Newsletter from "./components/news-letter/NewsLetter";
import AdminLayout from "./components/admin-layout/AdminLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users";
import Posts from "./pages/posts/Posts";
import Clients from "./pages/clients/Clients";
import UserProfilePage from "./components/user-profile/UserProfile";
import SavedProperties from "./components/saved-properties/SavedProperties";
import AgentLayout from "./components/agent/agent-layout/AgentLayout";
import AgentDashboard from "./pages/agent-dashboard/AgentDashboard";
import UploadPost from "./pages/upload-posts/UploadPosts";
import AgentPosts from "./pages/posts/Posts";
import Visitors from "./pages/visitors/Visitors";
import AgentEnquiries from "./pages/enquiries/Enquiries";
import PropertyDetails from "./components/property-details/PropertyDetails";
import PropertiesPage from "./pages/Properties";
function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isAgentRoute = location.pathname.startsWith("/agent");

  return (
    <div>
      {!isAdminRoute && <Nav />}

      <Routes>
        {/* public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userprofile" element={<UserProfilePage />} />
        <Route path="/saved-properties" element={<SavedProperties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/latestproperties" element={<PropertiesPage />} />

        {/* admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="posts" element={<Posts />} />
          <Route path="enquiries" element={<Clients />} />
        </Route>

        {/* agent */}
        <Route path="/agent" element={<AgentLayout />}>
          <Route index element={<AgentDashboard />} />
          <Route path="upload" element={<UploadPost />} />
          <Route path="manage" element={<AgentPosts />} />
          <Route path="visitors" element={<Visitors />} />
          <Route path="enquiries" element={<AgentEnquiries />} />
        </Route>
      </Routes>

      <>
        <Newsletter />
        <Footer />
      </>
    </div>
  );
}
export default App;
