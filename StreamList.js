

function SimpleFetch() {
    fetch('https://api.steampowered.com/ISteamApps/GetAppList/v2'
        , {mode: 'no-cors'}
        )
        .then(response => response.json())
        //.then(json => console.log(json))
        //.then(response => console.log(response))
}


const StreamList = (props) => {    
    //SimpleFetch();

    return (
        <div className=''>
            STREAMLIST
        </div>
    );
    
}