class GameStreamList extends React.Component {    
  
    render() {
        var streamListComponent = []
            for (var i = 0; i < this.props.gameList.length; i++){
                streamListComponent.push(<StreamElement key={i} name={this.props.gameList[i].name} appid={this.props.gameList[i].appid} streamid={this.props.gameList[i].streamid} chooseGame={this.props.chooseGame} />) //iterated elements in react should have a unique key.
            }

        return (
            <div className ="row" style={{width: "100%", margin: 0}}>
                {streamListComponent} 
            </div>
        ); 
    }
}