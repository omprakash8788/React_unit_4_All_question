const SearchResults = ({ data}) => {
  console.log("data",data)
   return (
     <table >
       {/* add columns headings */}
       <thead>
         <tr>
           <th>DEPARTURE</th>
           <th>DURATION</th>
           <th>ARRIVAL</th>
           <th>PRICE</th>
         </tr>
       </thead>
       <tbody data-testid="flight-results">
     { data?.map((item) => (
         <tr key={item.id} >
           <td>{item.departure}</td>
           <td>{item.duration}</td>
           <td>{item.arrival}</td>
           <td>{item.price}</td>
         </tr>
       ))}
     </tbody>
     </table>
   );
 };
 export default SearchResults;