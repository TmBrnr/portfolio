

export default function Container({ children }) {
    return (
        <div className=" max-w-screen-2xl px-5 w-full flex flex-col">
        {children}
        </div>
    )
    }