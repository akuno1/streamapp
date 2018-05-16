

// Create a function to wrap up your component
//<NavBar name="test string"/>
//<SideBar name="test string"/>
//<StreamList> 
//<StreamElement>
function App(){
    return(
        <div>
            <NavBar name="test string"/>
            <SideBar name="test string"/>
            <StreamElement name="test string" email="test@string" id='1'/>
        </div>
    );
}


// Use the ReactDOM.render to show your component on the browser
    ReactDOM.render(
    <App />,
    document.getElementById('root')
    );
 

   