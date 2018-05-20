
const StreamList = ( {gameList} ) => {    
  
    const streamListComponent = []
    for (var i = 0; i < gameList.length; i++){
        streamListComponent.push(<StreamElement key={i} name={gameList[i].name}/>) //iterated elements in react should have a unique key.
    }
    
    return (
        <div className ="row">
            {streamListComponent}
        </div>
    ); 
}