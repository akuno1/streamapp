class GameStreamList extends React.Component {    
  
    render() {
        var streamListComponent = []
            for (var i = 0; i < this.props.gameStreamList.length; i++){
                streamListComponent.push(<GameStreamElement 
                    key={i} //iterated elements in react should have a unique key.
                    channelId = {this.props.gameStreamList[i].id} 
                    chooseChannel={this.props.chooseChannel} 
                    title = {this.props.gameStreamList[i].title} 
                    appid = {this.props.appid}
                    thumbnail_url = {this.props.gameStreamList[i].thumbnail_url}
                    />) 
            }

        
        //console.log("GameStreamList");
        return (
            <div className ="row" style={{width: "100%", margin: 0}}>
                {streamListComponent} 
            </div>
        ); 
    }
}