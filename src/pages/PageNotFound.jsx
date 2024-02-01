import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button";

function PageNotFound() {
    return (
        <div className="text-xl space-x-3">
            <span className="font-semibold text-red-600">ERROR 404:</span>
            <span>page not found :(</span>
            <Button onClick={() => navigate("/")}>Go Back<Botton/>
        </div>
    );
}

export default PageNotFound;
