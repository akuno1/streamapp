const StreamElement = (props) => {    

    return (
            <div className="col-4 col-sm-2 col-xl-1 " style={{padding: 0}}>
                <a href="http://example.com">
                    <div className="card" style={{size: "100%"}}>
                        <img className="card-img-top" style={{height: "5em"}} src={"https://steamcdn-a.akamaihd.net/steam/apps/"+ props.appid +"/header.jpg"} onError={(e)=>{e.target.src="media/placeholder.jpg"}}></img>
                        <div className="card-body" style={{padding: 5}}>
                            <p className="card-text" style={{fontSize: "1em"}}>{props.name}</p>
                        </div>
                    </div>
                 </a>
            </div>
            
    );
    
}