

// Create a function to wrap up your component
//<NavBar name="test string"/>
//<SideBar name="test string"/>
//<StreamList> 
//<StreamElement>
//<StreamChannel channel="monstercat" id="twitch-embed"/>
function App(){
    
    
    return(
        <div>
            <NavBar name="test string"/>
            <SideBar name="test string"/>
            <StreamList/>
            <StreamChannel channel="monstercat" id="twitch-embed"/>
        </div>
    );
}

ReactDOM.render(
<App />,
document.getElementById('root')
);
 

   