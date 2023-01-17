import { useContext } from "react"
import { UserContext } from "../context/context"
import { useNavigate } from "react-router-dom"
import candycrush from "../assests/candy-crush.png"

/* eslint-disable jsx-a11y/anchor-is-valid */
const Home = () => {
    const { userInfos, setUserInfos } = useContext(UserContext)
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault();
        if (userInfos?.username) {
            navigate("/candycrush")
        } else {
            alert("Please enter a username!!")
        }
        
    }

    console.log(userInfos);
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-8">
            <img className="w-[18.5rem]" src={candycrush} alt="candycrush" />
            <div className="w-full h-[30rem] max-w-2xl max-h-lg ">
                <form className="flex flex-col gap-3 bg-white drop-shadow-[10px_-8px_46px_rgba(0,0,0,0.25)] rounded px-8 pt-6 pb-8 mb-4">
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
                            value={userInfos?.username}
                            placeholder="Enter your username..."
                            onChange={(e) => setUserInfos({...userInfos, username:e.target.value})}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="text-[1.2rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                            type="button" onClick={handleClick}>
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Home