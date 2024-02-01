import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../ui/Button";
import FormRow from "../ui/FormROw";

import { setAuthenticatedUser } from "../features/user/userSlice";

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    function handelSubmit() {
        if (user === "" || password === "") {
            setError(true);
        } else {
            setError(false);
            dispatch(setAuthenticatedUser({ user, password }));
            navigate("/");
        }
    }

    return (
        <div className="flex justify-center items-center">
            <form
                onSubmit={handelSubmit}
                className="flex flex-col items-center justify-center bg-slate-300 w-fit px-14 py-8 space-y-5"
            >
                <div className="space-x-3">
                    <FormRow
                        name="UserName"
                        type="username"
                        value={user}
                        setValue={setUser}
                    />
                </div>
                <div className="space-x-3">
                    <FormRow
                        name="Password "
                        type="password"
                        value={password}
                        setValue={setPassword}
                    />
                </div>
                {error && (
                    <p className="text-[10px] text-red-600">
                        username or password does not match
                    </p>
                )}

                <Button type="submit">sign in</Button>
            </form>
        </div>
    );
}

export default Login;
