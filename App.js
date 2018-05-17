

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
        fetch("./steam.json").then(function(response) {
            return response.json();
          }).then(function(json) {
            console.log('fetched data: '+ json.applist.apps[0].name);
          });
           
    }
    
    render () {
        return(
            <div>
                <NavBar name="test string"/>
                <SideBar name="test string"/>
                <StreamList/>
                
            </div>
        );
    }
}

ReactDOM.render(
<App />,
document.getElementById('root')
);
 

   