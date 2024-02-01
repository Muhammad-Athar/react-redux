import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

import { GrLinkNext } from "react-icons/gr";
import { useSelector } from "react-redux";

function Main() {
    const navigate = useNavigate();

    const user = useSelector((state) => state.user.user);

    function handelClick() {
        if (user === "") navigate("login");
        else navigate("product-details");
    }

    return (
        <div className="flex justify-center items-center">
            <Button onClick={handelClick}>
                <span>Go to Products</span>
                <GrLinkNext />
            </Button>
        </div>
    );
}

export default Main;
