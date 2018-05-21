

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
            gameList: []
            
        }
    }
    

    componentDidMount( ) {
        //fetch("./datafetcherSteam.php").then(function(response) { //fetching data from steam, only works on deployed server
        fetch("./steamsmall.json").then(function(response) { // fetching data from a mimic local file 
            return response.json();
        }).then( (json) => {
            this.setState({gameList: json.applist.apps});
        });

        fetch("./datafetcherTwitch.php").then(function(response) {
            return response.json();
        }).then( (json) => {
            console.log(JSON.parse(json));
        });
    }
    
    
    render () {
        var filteredList = []
        filteredList = this.state.gameList;


        /*console.log("render gamelist: " + filteredList);
        console.log("render gamelist element: " + filteredList[0]);
        console.log("stringfy: " + JSON.stringify(filteredList[0]));
        */

        
        return (
            <div>
                <NavBar name="test string"/>
                <SideBar name="test string"/>
                
                {filteredList.length? (
                    <StreamList gameList = {filteredList}/>
                ) : (
                    <h1> Loading </h1>
                )}
                
                
            </div>
        )
        
    }
}

ReactDOM.render(
<App />,
document.getElementById('root')
);
 

   