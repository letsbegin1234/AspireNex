
import { useNavigate } from "react-router-dom"
export default function Failure() {
    const navigate = useNavigate();
    function goBack() {
        navigate("/");
    }
    return (
        <div>

            <div className="bg-black w-full h-screen flex flex-col justify-center items-center">
                <h1 className="text-white text-4xl">Submission Failed ! Please try again</h1>
                <button className="mt-10 text-white border py-2 px-3 border-solid border-white" onClick={goBack}>Go Back</button>
            </div>
        </div>
    )
}