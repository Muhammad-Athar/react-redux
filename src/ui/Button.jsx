/* eslint-disable react/prop-types */

function Button({ children, type, onClick, isDisabled }) {
    function handleClick() {
        if (onClick) {
            onClick();
        }
    }

    return (
        <button
            type={type}
            disabled={isDisabled}
            onClick={handleClick}
            className="flex items-center space-x-4 cursor-pointer text-sm w-fit bg-blue-600 px-5 py-1 rounded-full hover:bg-blue-500 duration-300 disabled:bg-blue-100 disabled:cursor-not-allowed"
        >
            {children}
        </button>
    );
}

export default Button;
