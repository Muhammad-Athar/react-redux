import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchProductsFromAPI } from "./productSlice";
import DIsplayData from "./DIsplayData";

import Button from "../../ui/Button";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Products() {
    const [id, setId] = useState(1);

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);
    const { data, status } = useSelector((state) => state.products);

    const navigate = useNavigate();

    useEffect(
        function () {
            if (user === "") navigate("/login");
        },
        [user, navigate]
    );

    useEffect(
        function () {
            dispatch(fetchProductsFromAPI(id));
        },
        [dispatch, id]
    );

    return (
        <div>
            <h1
                onClick={() => setId(1)}
                className="text-5xl font-bold hover:underline hover:text-[49px] duration-300 cursor-pointer flex justify-center py-8"
            >
                Quotes
            </h1>

            <div className="flex flex-col justify-center items-center px-9 py-10 rounded-md space-y-6 bg-slate-300 border border-slate-500">
                <h4 className="text-lg ">quote # {id}</h4>

                <div className="flex flex-col justify-center items-center w-[60%]">
                    {status === "Loading" ? (
                        <p>Loading...</p>
                    ) : (
                        data &&
                        [data].map((quote) => (
                            <DIsplayData
                                key={quote.id}
                                quote={quote.quote}
                                author={quote.author}
                            />
                        ))
                    )}

                    <div className="flex items-center justify-between w-[100%] pt-7">
                        <Button
                            isDisabled={id === 1}
                            onClick={() =>
                                setId((id) => (id === 1 ? id : id - 1))
                            }
                        >
                            <GrLinkPrevious />
                            <span>Previous</span>
                        </Button>
                        <Button onClick={() => setId((id) => id + 1)}>
                            <span>Next</span>
                            <GrLinkNext />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
