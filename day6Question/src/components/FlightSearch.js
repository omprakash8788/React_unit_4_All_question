import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

// export const fetchData = async () => {
//   // make fetch request to the mentioned api and return the result here
// };

function FlightSearch() {
  // on page load fetch the data (useEffect)
  const [data, setData]=useState([])
  const [name, setName]=useState("")
  const [destination, setDestination]=useState("")
  const [data2, setData2]= useState([])

  useEffect(()=>{
    fetch(` https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`)
    .then((res)=>res.json())
    .then((actualData)=>{
      console.log(actualData);
      setData(actualData)
    })
    .catch((err)=>console.log(err))
  },[])

  const handleSearch = () => {
    // filter the data based on source and destination
    let temp = data.filter(el => el.source == name && el.destination == destination)
    console.log("temp", temp);
    setData2([...data2, ...temp])
    console.log(temp);
  };
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input onChange={(e)=> setName(e.target.value)} data-testid="source-input" placeholder="Source" />
          <br /> <br />
          <input onChange={(e)=> setDestination(e.target.value)} data-testid="destination-input" placeholder="Destination" />
          <br /> <br />
          <button onClick={handleSearch} data-testid="search-button">Search</button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
     
     {data2.length==0 ?  <div data-testid="no-flights" className="">
        No Flights Found
      </div>
      : <SearchResults data={data2}/> 
        }
    </div>
  );
}

export default FlightSearch;
