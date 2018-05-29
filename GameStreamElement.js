class GameStreamElement extends React.Component {    
    
    render() {
        //console.log("GameStreamELEMENT");
        return (
            <div className="col-4 col-sm-2 col-xl-1 " style={{padding: 0}}>
                <a href="#" onClick={(e) => this.props.chooseChannel(this.props.channelId, e)} style={{color: "#303030"}}>
                    <div className="card" style={{size: "100%"}}>
                        <img className="card-img-top" style={{height: "5em"}} src={this.props.thumbnail_url.replace("{height}", "200").replace("{width}", "200")} onError={(e)=>{e.target.src="media/placeholder.jpg"}}></img>
                        <div className="card-body" style={{padding: 5}}>
                            <p className="card-text" style={{height: "7em" }}>
                                {this.props.title} 
                                <br/>
                                {this.props.viewer_count}
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
    
}