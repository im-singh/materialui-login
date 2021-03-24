import { useEffect, useState } from "react";

function Dashboard(props) {
    const [user, setUser] = useState({});
    const [isAuth, setAuth] = useState(false);

    useEffect(() => {
        let isAuth = localStorage.getItem("isAuth");
        if (isAuth) {
            let user = localStorage.getItem("user");
            if (user) {
                user = JSON.parse(user);
                setUser(user);
                setAuth(true);
            }
        }
        else {
            props.history.push('/login');
        }
    }, [isAuth])
    const handleLogout = () => {
        localStorage.removeItem('isAuth');
        setAuth(false);
    }
    return (
        <div className="dashboard">
            {isAuth && <button onClick={handleLogout}>Logout</button>}
            <p>Hello {user.name}</p>
        </div>
    );
}

export default Dashboard;
