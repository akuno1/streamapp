const StreamElement = (props) => {    

    return (
        <div className="col-1">
            <div className="card" style={{width: "10em"}}>
                <img className="card-img-top" src="http://via.placeholder.com/200x200" alt="Card image cap"></img>
                <div className="card-body">
                    <p className="card-text">{props.name}</p>
                </div>
            </div>
        </div>
    );
    
}