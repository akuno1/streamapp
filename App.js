function intersectLists(listGames, listStreams){
    var resultList = [];
    if (listGames.length > 0 && listStreams.length > 0) {
        //console.log("render gamelist element: " + listGames[0]);
        //console.log("render streamlist element: " + listStreams[0]);

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
            streamList: [],
            streamGame: "",
            streamChannel: "CHANNEL100"
        }
    }

    chooseGame = (streamGame) => {
        this.setState({ streamGame: streamGame});
        console.log('CLICOU:' + streamGame );
    }
    

    componentDidMount( ) {
        var dataUrl = "";
        (location.hostname === "") ?  dataUrl = "./steam.json" : dataUrl = "./datafetcherSteam.php"; // fetching data mimic local json :OR: from STEAM with php
       
        fetch("./steam.json").then(function(response) { 
            return response.json();
        }).then( (json) => {
            //console.log('steam:'+ json);
            this.setState({gameList: json.applist.apps});
        });
        
        (location.hostname === "") ?  dataUrl = "./twitch.json" : dataUrl = "./datafetcherTwitch.php"; // fetching data mimic local json :OR: from TWITCH with php
        fetch("./twitch.json").then(function(response) { 
            return response.json();
        }).then( (json) => {
            //console.log('twitch:'+json);
            this.setState({streamList: json.data}); 
        });

        (location.hostname === "") ?  dataUrl = "./twitch.json" : dataUrl = "./datafetcherTwitchGameStreams.php"; // fetching data mimic local json :OR: from TWITCH with php
        fetch(dataUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                variable: 'yourValue',
            })
        });
    }
    
    
    
    render () {
        var filteredList = []
       
        filteredList = intersectLists(this.state.gameList, this.state.streamList);
        //console.log("filtered list: " + JSON.stringify(filteredList));
        
       

        //console.log(this.state.streamChannel);

        return (
            <div>
                <NavBar name="test string"/>
                <SideBar name="test string"/>
                
                {(filteredList.length )? (
                    (this.state.streamGame == '')? (
                        <StreamList gameList = {filteredList} chooseGame = {this.chooseGame}/>
                        //<GameStreamList />//twitchGameId={filteredList[streamid]} channel="monstercat"/>
                    ):(
                        <StreamChannel channel="monstercat"/>
                    )
                
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
 

   