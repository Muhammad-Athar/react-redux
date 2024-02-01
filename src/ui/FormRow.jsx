/* eslint-disable react/prop-types */

function FormRow({ name, type, value, setValue }) {
    function hadelSetValue(e) {
        setValue(e.target.value);
    }

    return (
        <div className="space-x-3">
            <label htmlFor="password" name={type}>
                {name}
            </label>
            <input
                className="outline-none rounded-full px-4 py-2 text-[10px]"
                type={type}
                name={type}
                value={value}
                onChange={hadelSetValue}
            />
        </div>
    );
}

export default FormRow;
