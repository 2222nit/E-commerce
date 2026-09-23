import {useState} from 'react'
import axios from 'axios'

export default function Task1() {

 const [data,setData] = useState([])

    const getDataFromSrver = async()=>{
        try{
            const APIUrl = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10'

            const data = await axios.get(APIUrl)
            console.log(data.data.data.data[0].picture.large)
            setData(data.data.data.data)
        }
        catch(err){
            console.error(err)
        }
    }
  return (
    <div className="bg-black min-h-screen text-white">

        <button onClick={getDataFromSrver}>click </button>

        <div className="flex flex-wrap">

           {
            data.map((v,i)=>(
                <div key={i}>
                    <h1>hello</h1>
                    <img src={v.picture.large} alt="" />
                </div>
            ))
           }
        </div>
    </div>
  )
}