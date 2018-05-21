
const StreamList = ( {gameList} ) => {    
  
    const streamListComponent = []
    for (var i = 0; i < gameList.length; i++){
        streamListComponent.push(<StreamElement key={i} name={gameList[i].name} appid={gameList[i].appid} />) //iterated elements in react should have a unique key.
    }
    
    return (
        <div className ="row" style={{width: "100%", margin: 0}}>
            {streamListComponent}
        </div>
    ); 
}