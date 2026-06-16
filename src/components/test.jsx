import { useState } from "react"


export default function Test(){
    
    const [count, setCount] = useState(0)
    return(
        <div className="h-full w-full flex justify-center items-center">
            <div className="w-[400px] h-[400px] shadow-2xl flex justify-center items-center">
                <button className="w-[100px] h-[50px] bg-red-500 text-white "onClick={()=>{setCount(count-1)}}>
                    Decrement
                </button>

                <h1 className="h-[50px] w-[100px] text-[30px] text-center">{count}</h1>

                <button className="w-[100px] h-[50px] bg-blue-500 text-white " onClick={()=>{setCount(count+1)}}>
                    Increment
                </button>

            </div>

        </div>
    )
}