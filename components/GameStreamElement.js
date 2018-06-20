class GameStreamElement extends React.Component {    
    
    render() {
        //console.log("GameStreamELEMENT");
        return (
            <div className=" col-6 col-sm-4 col-lg-3 col-xl-2" style={{padding: 10}}>
                <a href="#" onClick={(e) => this.props.chooseChannel(this.props.channelId, e)} style={{color: "#303030"}}>
                    <div className="shadow card" style={{size: "100%"}}>
                        <img className="card-img-top" style={{height: "10em"}} src={this.props.thumbnail_url.replace("{height}", "200").replace("{width}", "400")} onError={(e)=>{e.target.src="media/placeholder.jpg"}}></img>
                        <div className="card-body" style={{padding: 5}}>
                            <p className="card-text text-truncate "  style={{height: "3em" }}>
                                {this.props.title} 
                                <br/>
                                <i className="icon-eye icon text-secondary "> {this.props.viewer_count} </i>
                                
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
    
}