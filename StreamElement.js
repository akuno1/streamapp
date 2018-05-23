class StreamElement extends React.Component {    
    

    render() {
        return (
            <div className="col-4 col-sm-2 col-xl-1 " style={{padding: 0}}>
                <a href="#" onClick={(e) => this.props.chooseGame(this.props.streamid, e)} style={{color: "#303030"}}>
                    <div className="card" style={{size: "100%"}}>
                        <img className="card-img-top" style={{height: "5em"}} src={"https://steamcdn-a.akamaihd.net/steam/apps/"+ this.props.appid +"/header.jpg"} onError={(e)=>{e.target.src="media/placeholder.jpg"}}></img>
                        <div className="card-body" style={{padding: 5}}>
                            <p className="card-text" style={{fontSize: "1em", height: "3em"}}>{this.props.name}</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
    
}