import { Routes, Route } from "react-router-dom";
import { NotificationContainer } from 'react-notifications';

import withAuth from "../utilities/hoc/withAuth";
import withGuest from "../utilities/hoc/withGuest";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";

import DefaultRoute from "../routes/default";

import 'react-notifications/lib/notifications.css';

const GuestLoginPage = withGuest(LoginPage)
const GuestRegisterPage = withGuest(RegisterPage)
const PrivateProfilePage = withAuth(ProfilePage)

export function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<DefaultRoute />} />
                <Route path="/login" element={<GuestLoginPage />} />
                <Route path="/register" element={<GuestRegisterPage />}/>
                <Route path="/profile" element={<PrivateProfilePage />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
            <NotificationContainer />
        </>
    );
} 

export default App;
