/* eslint-disable react/prop-types */

function DIsplayData({ quote, author }) {
    return (
        <div className="flex flex-col justify-center items-center space-y-5">
            <h1 className="text-[25px] font-semibold">{quote}</h1>

            <span className="font-bold text-sm underline">{author}</span>
            <hr className="border-slate-600 w-[100%] h-[0.2px]" />
            <div className="space-x-1">
                <span className="text-[10px] font-light">Learn more about</span>
                <a
                    href={`https://et.wikipedia.org/wiki/${author}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-[11px] font-bold"
                >
                    {author}
                </a>
            </div>
        </div>
    );
}

export default DIsplayData;
