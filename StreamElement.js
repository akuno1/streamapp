const StreamElement = (props) => {    

    return (
        <div className="col-1">
            <div className="card" style={{width: "10em"}}>
                <img className="card-img-top" style={{height: "5em"}} src={"https://steamcdn-a.akamaihd.net/steam/apps/"+ props.appid +"/header.jpg"} onError={(e)=>{e.target.src="media/placeholder.jpg"}}></img>
                <div className="card-body">
                    <p className="card-text">{props.name}</p>
                </div>
            </div>
        </div>
    );
    
}