function intersectLists(listGames, listStreams){
    var resultList = [];
    if (listGames.length > 0 && listStreams.length > 0) {
        console.log("render gamelist element: " + listGames[0]);
        console.log("render streamlist element: " + listStreams[0]);

        for ( var i in listGames) {
            for ( var j in listStreams){
                if (listGames[i].name == listStreams[j].name) {
                    resultList.push({ "name": listGames[i].name, "appid": listGames[i].appid, "streamid": listStreams[j].id  })
                }
            }
        }
    }
    return resultList;
}

// Create a function to wrap up your component
//<NavBar name="test string"/>
//<SideBar name="test string"/>
//<StreamList> 
//<StreamElement>
//<StreamChannel channel="monstercat" id="twitch-embed"/>
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            gameList: [],
            streamList: []
        }
    }
    

    componentDidMount( ) {
        fetch("./datafetcherSteam.php").then(function(response) { //fetching data from steam, only works on deployed server
        //fetch("./steam.json").then(function(response) { // fetching data from a mimic local file 
            return response.json();
        }).then( (json) => {
            console.log('steam:'+ json);
            this.setState({gameList: json.applist.apps});
        });

        fetch("./datafetcherTwitch.php").then(function(response) {
        //fetch("./twitch.json").then(function(response) {
            return response.json();
        }).then( (json) => {
            console.log('twitch:'+json);
            this.setState({streamList: json.data}); 
        });
    }
    
    
    
    render () {
        var filteredList = []
       
        filteredList = intersectLists(this.state.gameList, this.state.streamList);
        console.log("filtered list: " + JSON.stringify(filteredList));
        
        return (
            <div>
                <NavBar name="test string"/>
                <SideBar name="test string"/>
                
                {filteredList.length? (
                    <StreamList gameList = {filteredList}/>
                ) : (
                    <Loading/>
                )}
                
                
            </div>
        )
        
    }
}

ReactDOM.render(
<App />,
document.getElementById('root')
);
 

   