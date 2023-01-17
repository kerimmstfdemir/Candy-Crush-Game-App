/* eslint-disable jsx-a11y/anchor-is-valid */
const Home = () => {
    return (
        <div className="h-screen flex flex-row justify-center items-center">
            <div className="w-full h-[30rem] max-w-2xl max-h-lg ">
                <form className="flex flex-col gap-3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        <label
                            className="block text-[1.5rem] text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username">
                            Username :
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[1.15rem] text-gray-700 leading-tight focus:outline-cyan-600 focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username..."
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Home