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

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            gameList: [], //list of games on steam
            streamList: [], //list of twitch streams
            streamGame: "", // will search for streams of this game
            streamChannel: "", //id of current channel being watched
            channelName: "", //name of the channel to use with twitch player
            gameStreamList: []//{"data":[{"id":"1","id":"2","id":"3","id":"5","id":"5"}]}
            
        }
        this.getGameStreamList = this.getGameStreamList.bind(this);
    }
    
    getChannelName = (userid) => {// get a list containing streams for the game with gameid
        if (location.hostname === "") {
            this.setState({channelName: 'monstercat'});
            return;
        }
        var simpledata;

        var form = new FormData();
        form.append("userid", userid);
    
        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://aestheticscult.com/react/datafetcherChannelFromId.php",
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
    
        $.ajax(settings).done( (response) => {
            //console.log('CHANNEL NAME ajax stringfy parse:' + JSON.stringify( JSON.parse(response).data) );
            simpledata =  JSON.parse(response).data;
            //console.log('simpledata[0].id: ' + simpledata[0].id);
            this.setState({channelName: simpledata[0].display_name});
            return response.data;
        });
    }

    getGameStreamList = (gameid) => {// get a list containing streams for the game with gameid
        if (location.hostname === "") {
            this.setState({gameStreamList:[{"id":"28879721440","user_id":"30816637","game_id":"29595","community_ids":[],"type":"live","title":"Last stream until 12 june (going to super major) | [A] @AdmiralBulldog","viewer_count":11608,"started_at":"2018-05-29T08:59:33Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_admiralbulldog-{width}x{height}.jpg"},{"id":"28879964224","user_id":"46571894","game_id":"29595","community_ids":[],"type":"live","title":"reabilitation by fusion.bet","viewer_count":7398,"started_at":"2018-05-29T09:52:39Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_alohadancetv-{width}x{height}.jpg"},{"id":"28879297296","user_id":"21802540","game_id":"29595","community_ids":[],"type":"live","title":"РОЛЕВЫЕ ИГРЫ МИД/КЕРИ","viewer_count":3324,"started_at":"2018-05-29T07:21:03Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_versuta-{width}x{height}.jpg"},{"id":"28879644976","user_id":"83675234","game_id":"29595","community_ids":["e05ab438-a66f-4970-876d-e604475b20bc"],"type":"live","title":"[EN] Highground vs TNC Tigers. - Bo2 | ProDota Cup SEA | @PTdota2","viewer_count":1428,"started_at":"2018-05-29T08:41:52Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_prodotaeu-{width}x{height}.jpg"},{"id":"28880099056","user_id":"87065447","game_id":"29595","community_ids":[],"type":"live","title":"Ruhub | Smile","viewer_count":913,"started_at":"2018-05-29T10:20:01Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_arsartone-{width}x{height}.jpg"},{"id":"28879580448","user_id":"32536070","game_id":"29595","community_ids":[],"type":"live","title":"7.16, nice jokes, volvo","viewer_count":713,"started_at":"2018-05-29T08:26:44Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_y0nd-{width}x{height}.jpg"},{"id":"28879259168","user_id":"113222782","game_id":"29595","community_ids":[],"type":"live","title":"ЛАДДЕР 1Х1 СЕГОДНЯ В 18:00 https://bit.ly/2r15TR3","viewer_count":589,"started_at":"2018-05-29T07:12:36Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_stasikpwnz-{width}x{height}.jpg"},{"id":"28879907376","user_id":"28062280","game_id":"29595","community_ids":["e05ab438-a66f-4970-876d-e604475b20bc"],"type":"live","title":"MPGL Asian Championship - TaskUs Titans vs BOOM ID w/ @MautDota and @braxlikesdota","viewer_count":550,"started_at":"2018-05-29T09:40:27Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_met_esports-{width}x{height}.jpg"},{"id":"28879966128","user_id":"83195409","game_id":"29595","community_ids":[],"type":"live","title":"Cuvinte, nu mai am cuvinte.\n","viewer_count":528,"started_at":"2018-05-29T09:53:05Z","language":"en-gb","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_canceldota-{width}x{height}.jpg"},{"id":"28879751344","user_id":"38461708","game_id":"29595","community_ids":[],"type":"live","title":"~7200mmr.  Розыгрыш 8-ми аркан на выбор!","viewer_count":500,"started_at":"2018-05-29T09:05:41Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_xakoh-{width}x{height}.jpg"},{"id":"28879435760","user_id":"153670212","game_id":"29595","community_ids":[],"type":"live","title":"irrelevant","viewer_count":439,"started_at":"2018-05-29T07:53:19Z","language":"fi","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_topsonous-{width}x{height}.jpg"},{"id":"28880217904","user_id":"39411368","game_id":"29595","community_ids":["2785a0f0-2a67-4840-a1c3-7ad5e60a7d1f"],"type":"live","title":"Execration vs Entity - So2 - joinDOTA League Season 13 SEA w/ @dragondropdota","viewer_count":432,"started_at":"2018-05-29T10:43:31Z","language":"de","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_joindotared-{width}x{height}.jpg"},{"id":"28879412320","user_id":"36389882","game_id":"29595","community_ids":[],"type":"live","title":"main(15) / smurf(350) TRYHARD, mostly PANGO","viewer_count":427,"started_at":"2018-05-29T07:47:27Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_funn1k-{width}x{height}.jpg"},{"id":"28880005568","user_id":"22230083","game_id":"29595","community_ids":["009e484a-6f60-425a-9f0d-75b7c2b29fcc","e460229e-2100-4c42-894c-d758651f06c6"],"type":"live","title":"Boom ID vs Task US Titans | Group Stage Best of 2 | MPGL Asian Championship Dota 2 Week 2","viewer_count":363,"started_at":"2018-05-29T10:01:11Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_mineskitv-{width}x{height}.jpg"},{"id":"28877332768","user_id":"68465758","game_id":"29595","community_ids":[],"type":"live","title":"Road to 7300 clinkz tiny sky gameplay (заказать бк/буст https://vk.com/snessh)","viewer_count":352,"started_at":"2018-05-29T02:24:50Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_snessh-{width}x{height}.jpg"},{"id":"28879519392","user_id":"29578325","game_id":"29595","community_ids":["e05ab438-a66f-4970-876d-e604475b20bc"],"type":"live","title":"RERUN: Fnatic vs FRIENDS Game 1 - SL i-League S2 LAN - Maut & Fogged","viewer_count":334,"started_at":"2018-05-29T08:12:23Z","language":"en","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_beyondthesummit-{width}x{height}.jpg"},{"id":"28879749712","user_id":"146813379","game_id":"29595","community_ids":[],"type":"live","title":"🔴 Игра в имитацию - Dota 2 | Игры за Twitch Prime !прайм","viewer_count":299,"started_at":"2018-05-29T09:05:20Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_gamesprouttv-{width}x{height}.jpg"},{"id":"28880465200","user_id":"184273711","game_id":"29595","community_ids":[],"type":"live","title":"Прохождение пещер в турбо моде","viewer_count":265,"started_at":"2018-05-29T11:29:16Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_d2gull-{width}x{height}.jpg"},{"id":"28879288704","user_id":"112236984","game_id":"29595","community_ids":[],"type":"live","title":"level 22 Injoker","viewer_count":185,"started_at":"2018-05-29T07:19:07Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_inv0kergirl-{width}x{height}.jpg"},{"id":"28879650640","user_id":"189571348","game_id":"29595","community_ids":[],"type":"live","title":"1K лвл Компендиума","viewer_count":168,"started_at":"2018-05-29T08:43:03Z","language":"ru","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_timshob-{width}x{height}.jpg"}]});
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
    
        $.ajax(settings).done( (response) => {
            //console.log('ajax parse:' + JSON.stringify( JSON.parse(response).data) );
            this.setState({gameStreamList: JSON.parse(response).data});
            return response.data;
        });
    }

    chooseGame = (streamGame) => {
        this.setState({ streamGame: streamGame});
        this.getGameStreamList(streamGame);
        //console.log('choose Game:' + streamGame );
        
    }

    chooseChannel = (streamChannel) => {
        this.setState({ streamChannel: streamChannel});
        this.getChannelName(streamChannel);
        //console.log('choose Channel:' + streamChannel );
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
        
        
        
        console.log('state - streamgame:' + this.state.streamGame + // will search for streams of this game
                    'streamchannel:' + this.state.streamChannel +//current channel being watched
                    'channel Name:' + this.state.channelName  //name of the channel to send to twitch player
        );
        

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
                            <GameStreamList appid = {this.state.streamGame} gameStreamList ={this.state.gameStreamList} chooseChannel = {this.chooseChannel}/>
                        ):(
                            (this.state.channelName == '')?
                                <Loading/>
                            :
                                <StreamChannel channel = {this.state.channelName}/>
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
 

   