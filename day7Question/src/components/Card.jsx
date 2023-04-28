const Card=({data=[]})=>{
    return (
    
        <div data-testid="data-list">
            {data.map((item)=>{
                return(
                    <div data-testid="superhero-list">
                        {/*All the content of the card has to be added over here*/}
                        <h4>Name:</h4>
                        <p>Height:</p>
                        <p>Weight:</p>
                        <p>Power Level:</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
