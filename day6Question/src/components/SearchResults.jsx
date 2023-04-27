const SearchResults = ({ data }) => {
  console.log("data", data);
  return (
    <table>
      {/* add columnsheadings */}
      <thead>
        <tr>
          <th>DEPARTURE</th>
          <th>DURATION</th>
          <th>DESTINATION</th>
          <th>ARRIVAL</th>
          <th>PRICE</th>
        </tr>
      </thead>
      <tbody data-testid="flight-results">
        {
          //  map through the results and display as rows
          data?.map((item) => (
            <tr key={item.id}>
              <td>{item.departure}</td>
              <td>{item.duration}</td>
              <td>{item.destination}</td>
              <td>{item.arrival}</td>
              <td>{item.price}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};
export default SearchResults;
