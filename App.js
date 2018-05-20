

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
        fetch("./steamsmall.json").then(function(response) {
            return response.json();
        }).then( (json) => {
            this.setState({gameList: json.applist.apps});
        });
    }
    
    
    render () {
        var filteredList = []
        filteredList = this.state.gameList;


        /*console.log("render gamelist: " + filteredList);
        console.log("render gamelist element: " + filteredList[0]);
        console.log("stringfy: " + JSON.stringify(filteredList[0]));
        */

        if (filteredList.length === 0) {
            return <h1> Loading </h1>
        } else{
            return (
                <div>
                    <NavBar name="test string"/>
                    <SideBar name="test string"/>
                    
                    
                    <StreamList gameList = {filteredList}/>
                </div>
            )
        }
    }
}

ReactDOM.render(
<App />,
document.getElementById('root')
);
 

   