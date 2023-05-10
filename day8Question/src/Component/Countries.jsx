import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "../Component/CountriesCard"
import Pagination from "../Component/Pagination"


const nameofCountry = ({page=1})=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)
  .then((res)=>res.json())
}


function Countries() { 

  const [loading , setLoading] = useState(false)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)


  useEffect(()=>{
   handleCountry(page)
  },[page])


  const handleCountry =(page)=>{
    setLoading(true)
    nameofCountry({page}).then((res)=>{
      console.log(res)
      setData(res)
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false)
    })
  }
 
  if(loading){

    return <LoadingIndicator />;
  }


  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
        {
        data?.data?.map((item)=>(<CountriesCard key={item.id} {...item}/>))
        }
          
      </div>
      <div>
        {/* Pagination */}
        {
          <Pagination current={page} onChange={(value)=>setPage(value)} total = {data.totalPage}/>
        }
      </div>
    </div>
  );
}

export default Countries;
