export const LoadingScreen = () => {
    return (
        <div className="fixed flex items-center justify-center bg-black w-full h-screen top-0 left-0 z-50">
            <div className="w-32 h-32 border-r border-b border-white relative rounded-full animate-spin">
            </div>
            <span className="absolute animate-pulse text-white">Loading...</span>
        </div>
    )
}