import { Outlet, Link } from "react-router";

export default function MainLayout() {
    return (
        <div>
            <nav>
                <Link to="/chat">Chat</Link>
                <Link to="/voice">Voice</Link>
            </nav>

            <Outlet />
        </div>
    );
}