class StreamElement extends React.Component {    
    

    render() {
        return (
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2 " style={{padding: 10}}>
                <a href="#" onClick={(e) => this.props.chooseGame(this.props.twitchGameId, e)} style={{color: "#303030"}}>
                    <div className="card" style={{size: "100%"}}>
                        <img className="card-img-top" style={{height: "10em"}} src={"https://steamcdn-a.akamaihd.net/steam/apps/"+ this.props.appid +"/header.jpg"} onError={(e)=>{e.target.src="media/placeholder.jpg"}}></img>
                        <div className="card-body " style={{padding: 5}}>
                            <p className="card-text text-center " style={{fontSize: "1em", height: "3em"}}>{this.props.name}</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
    
}