class GameStreamList extends React.Component {    
  
    render() {
        var streamListComponent = []
        for (var i = 0; i < this.props.gameStreamList.length; i++){
            streamListComponent.push(<GameStreamElement 
                key={i} //iterated elements in react should have a unique key.
                channelId = {this.props.gameStreamList[i].user_id} 
                chooseChannel={this.props.chooseChannel} 
                title = {this.props.gameStreamList[i].title} 
                appid = {this.props.appid}
                thumbnail_url = {this.props.gameStreamList[i].thumbnail_url}
                viewer_count = {this.props.gameStreamList[i].viewer_count}
            />) 
        }
        if (this.props.gameStreamList.length < 1 ) {
            console.log("this.props.loaded" + this.props.loaded + "/ ");
            if (this.props.loaded == false) {
                streamListComponent.push(<Loading/>);
            }else{
                streamListComponent.push(<div className="col-12"><h2> There are no active streams for this game :(</h2></div>);
            }
        }

        
        //console.log("GameStreamList");
        return (
            <div className ="row" style={{width: "100%", margin: 0}}>
                {streamListComponent} 
            </div>
        ); 
    }
}