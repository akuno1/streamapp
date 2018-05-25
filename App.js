function intersectLists(listGames, listStreams){//returns the intersection lists of games that have the same name on steam and on twitch
    var resultList = [];
    if (listGames.length > 0 && listStreams.length > 0) {
        for ( var i in listGames) {
            for ( var j in listStreams){
                if (listGames[i].name == listStreams[j].name) {
                    resultList.push({ "name": listGames[i].name, "appid": listGames[i].appid, "twitchGameId": listStreams[j].id  })
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
            gameList: [], //list of games on steam
            streamList: [],
            streamGame: "",
            streamChannel: "CHANNEL100",
            gameStreamList: {"data":[{"id":"28818809824","id":"333309824","id":"111119824","id":"222209824","id":"5151515109824"}]}
        }
    }
    

    chooseGame = (streamGame) => {
        this.setState({ streamGame: streamGame});
        console.log('choose Game:' + streamGame );
        this.getGameStreamList(streamGame);
    }

    getGameStreamList = (gameid) => {// get a list containing streams for the game with gameid
        if (location.hostname === "") {
            //this.setState({gameStreamList: {"data":[{"id":"28818809824","user_id":"110690086","game_id":"33214","community_ids":["744287c2-341d-4fe9-bd51-4687265d08d6"],"type":"live","title":"It's my birfday :3","viewer_count":50339,"started_at":"2018-05-24T19:32:53Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_tsm_myth-{width}x{height}.jpg"},{"id":"28818079040","user_id":"24147592","game_id":"33214","community_ids":[],"type":"live","title":"[FR] GOTAGA ► Training ft. MANE pour l'ESL Montpellier (!multitwitch)","viewer_count":34267,"started_at":"2018-05-24T18:34:49Z","language":"fr","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_gotaga-{width}x{height}.jpg"},{"id":"28815439328","user_id":"2083752","game_id":"33214","community_ids":[],"type":"live","title":"Good Morning :) Former !Halo Pro. Solos/Duos Free Sub - !Prime ","viewer_count":18160,"started_at":"2018-05-24T14:05:26Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_fearitself-{width}x{height}.jpg"},{"id":"28817632816","user_id":"17337557","game_id":"33214","community_ids":[],"type":"live","title":"Friday Fortnite Practice | !prime @DrDisRespect","viewer_count":17839,"started_at":"2018-05-24T17:58:24Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_drdisrespectlive-{width}x{height}.jpg"},{"id":"28814896288","user_id":"29829912","game_id":"33214","community_ids":[],"type":"live","title":"WORLD'S MOST AVERAGE // !gc !giveaway","viewer_count":15968,"started_at":"2018-05-24T12:50:56Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_drlupo-{width}x{height}.jpg"},{"id":"28817288880","user_id":"36717908","game_id":"33214","community_ids":[],"type":"live","title":"DUO Z WIDZAMI W FORTNITE!","viewer_count":6624,"started_at":"2018-05-24T17:27:04Z","language":"pl","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_izakooo-{width}x{height}.jpg"},{"id":"28817634400","user_id":"32140000","game_id":"33214","community_ids":["fd0eab99-832a-4d7e-8cc0-04d73deb2e54"],"type":"live","title":"Pro-Player #1 Solo Kills 🏆1,900+ Solo Wins🏆 | NEW !Schedule | Subscribe with !prime !primeperks","viewer_count":6579,"started_at":"2018-05-24T17:58:31Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_sypherpk-{width}x{height}.jpg"},{"id":"28818912560","user_id":"40580009","game_id":"33214","community_ids":[],"type":"live","title":"KEEMSTAR 20k TOURNEY PRACTICE","viewer_count":4085,"started_at":"2018-05-24T19:41:32Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ricegum-{width}x{height}.jpg"},{"id":"28815214496","user_id":"49303276","game_id":"33214","community_ids":[],"type":"live","title":"FORTNITE TOURNAMENT PRACTICE | Day 111 | Twitter: @Nick28T","viewer_count":3188,"started_at":"2018-05-24T13:35:29Z","language":"en-gb","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_nick28t-{width}x{height}.jpg"},{"id":"28815675760","user_id":"43899589","game_id":"33214","community_ids":["e1379454-d29b-4a6f-89da-e21df98d24e4"],"type":"live","title":"Завтра DETROIT by Lootbet","viewer_count":3137,"started_at":"2018-05-24T14:35:45Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_c_a_k_e-{width}x{height}.jpg"},{"id":"28813354672","user_id":"198506129","game_id":"33214","community_ids":[],"type":"live","title":"LUNARY \u0026 SOLARY - EVENEMENT COMMUNAUTAIRE WAR LEGEND","viewer_count":2877,"started_at":"2018-05-24T07:33:00Z","language":"fr","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_solaryfortnite-{width}x{height}.jpg"},{"id":"28816761984","user_id":"179131805","game_id":"33214","community_ids":[],"type":"live","title":"*NEUES* JETPACK IST DA! Das wars dann mal wieder Komplett GUTTTT [DEUTSCH] | Steel ","viewer_count":2818,"started_at":"2018-05-24T16:36:52Z","language":"de","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_kohtito-{width}x{height}.jpg"},{"id":"28818229168","user_id":"101572475","game_id":"33214","community_ids":["5add036f-2931-4c94-9317-ab471cd64a17","cbbe055a-f800-4fc8-888d-2e67544d30d9","fdd6c721-60ed-493c-9214-414b29d6bb63"],"type":"live","title":"Rothaarig macht hartrohrig.","viewer_count":2420,"started_at":"2018-05-24T18:47:29Z","language":"de","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_mckytv-{width}x{height}.jpg"},{"id":"28814825536","user_id":"30709418","game_id":"33214","community_ids":[],"type":"live","title":"MICKALOW - GOTAGA - AKYTIO - CARBON / Tournoi War Legend","viewer_count":2144,"started_at":"2018-05-24T12:39:31Z","language":"fr","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_mickalow-{width}x{height}.jpg"},{"id":"28816696576","user_id":"194954209","game_id":"33214","community_ids":["015516d8-18dc-417f-8b3d-6774f4a4e871","558ffafb-6f75-44ff-8cb7-a4f045d2399f","9f395dfb-0c31-4db3-9a79-94b01c4109e2"],"type":"live","title":"Zkouška streamu duo /w ARTIX","viewer_count":2082,"started_at":"2018-05-24T16:30:07Z","language":"cs","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_alkanhraje-{width}x{height}.jpg"},{"id":"28817503392","user_id":"78005819","game_id":"33214","community_ids":["015516d8-18dc-417f-8b3d-6774f4a4e871","558ffafb-6f75-44ff-8cb7-a4f045d2399f","f9579833-1559-4882-aa16-ddd118e809db"],"type":"live","title":"PRŠÍ PRŠÍ JEN SE CÁKÁ, OD 9 KVALIFIKACE NA SOLO TURNAJ","viewer_count":1912,"started_at":"2018-05-24T17:47:11Z","language":"cs","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_artix_-{width}x{height}.jpg"},{"id":"28817538304","user_id":"67650991","game_id":"33214","community_ids":[],"type":"live","title":"TSM Kraftyy | hello it me !Youtube ","viewer_count":1884,"started_at":"2018-05-24T17:50:22Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_realkraftyy-{width}x{height}.jpg"},{"id":"28815987712","user_id":"58098825","game_id":"33214","community_ids":[],"type":"live","title":"Happy THURSDAY :) SUPER SAIYAN FOO","viewer_count":1769,"started_at":"2018-05-24T15:13:00Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_fooya-{width}x{height}.jpg"},{"id":"28816961824","user_id":"56040562","game_id":"33214","community_ids":[],"type":"live","title":"Neue Empfindlichkeit \u0026 Major Deal IZ DA!! :D","viewer_count":1727,"started_at":"2018-05-24T16:57:02Z","language":"de","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_xthesolutiontv-{width}x{height}.jpg"},{"id":"28814064096","user_id":"26857029","game_id":"33214","community_ids":[],"type":"live","title":"[BR] hastad - FORTNITE - FUTURO GOD BR MiniK","viewer_count":1629,"started_at":"2018-05-24T10:18:08Z","language":"pt-br","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_hastad-{width}x{height}.jpg"}],"pagination":{"cursor":"eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MjB9fQ"}}});
            console.log("local json: "+ this.getState(gameStreamList.data));
            console.log("BREAK ");
            return;
        }
        
        var form = new FormData();
        form.append("gameid", gameid);
    
        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://aestheticscult.com/react/datafetcherTwitchGameStreams.php",
        "method": "POST",
        "headers": {
            "cache-control": "no-cache",
            "postman-token": "913ef9da-47cc-c1b9-1702-d79fae72c7ee"
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
        }
    
        $.ajax(settings).done(function (response) {
            console.log('ajax: parse:' + JSON.parse(response).data);
            this.setState({gameStreamList: JSON.parse(response).data});
        });
    }

    chooseChannel = (streamChannel) => {
        this.setState({ streamChannel: streamChannel});
        console.log('choose Channel:' + streamChannel );
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
        
        
    }
    
    
    
    render () {
        var filteredList = []
       
        filteredList = intersectLists(this.state.gameList, this.state.streamList);
        //console.log("filtered list: " + JSON.stringify(filteredList));
        
        //console.log(this.state.streamChannel);
        var gameStreams = []
        

        return (
            <div>
                <NavBar name="test string"/>
                <SideBar name="test string"/>
                
                {(filteredList.length )? (
                    (this.state.streamGame == '')? (
                        <StreamList gameList = {filteredList} chooseGame = {this.chooseGame}/>
                        //<GameStreamList />//twitchGameId={filteredList[streamid]} channel="monstercat"/>

                    ):(
                        (this.state.streamChannel == '')? (
                            <GameStreamList gameid = {this.state.streamGame} gameStreamList ={this.state.gameStreamList}/>
                        ):(
                            <StreamChannel channel="monstercat"/>
                        )
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
 

   