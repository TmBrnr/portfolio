

export default function Container({ children }) {
    return (
        <div className=" max-w-screen-2xl sm:px-5 w-full flex flex-col" style={{ animation: "textShadow 2.6s infinite" }}>
        {children}
        </div>
    )
    }