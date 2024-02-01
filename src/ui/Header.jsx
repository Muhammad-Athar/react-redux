import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeAuthenticatedUser } from "../features/user/userSlice";

function Header() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);

    function handelLogout() {
        dispatch(removeAuthenticatedUser());
        navigate("/");
    }

    return (
        <div className="flex items-center justify-between py-4 bg-slate-300 px-6">
            <div
                onClick={() => navigate("/")}
                className="text-2xl font-bold flex items-center space-x-2 cursor-pointer"
            >
                <img
                    src="/logo.png"
                    alt="logo"
                    className="h-[40px] sm:h-[30px]"
                />
                <span className="hidden sm:block">
                    <span className="tracking-widest text-3xl">RTK</span>
                    Query
                </span>
            </div>
            <div className="space-x-4 flex items-center">
                {user === "" ? (
                    <Button onClick={() => navigate("login")}>Login</Button>
                ) : (
                    <>
                        <span className="text-lg font-semibold bg-slate-400 px-3 py-1 rounded-full">
                            Welcome, {user}
                        </span>
                        <Button onClick={handelLogout}>Logout</Button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
