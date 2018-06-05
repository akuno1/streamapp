function intersectLists(listGames, listStreams){//returns the intersection lists of games that have the same name on steam and on twitch
    var resultList = [];
    if (listGames.length > 0 && listStreams.length > 0) {
        for ( var i in listGames) {
            for ( var j in listStreams){
                if (listGames[i].title == listStreams[j].name) {
                    resultList.push({ "name": listGames[i].title, "appid": listGames[i].appid, "twitchGameId": listStreams[j].id  })
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
            gameStreamList: [],// list of stream channels from a specific game
            loadedGameStreamList: false, // did gameStreamList has finished loading from the ajax request?
            searchSettings: {
                tag: '',
                pages: '',
                sortby: '',
                start_page: '',
                active_page: ''
            },
            steamTags: []
            
        }
        this.getGameStreamList = this.getGameStreamList.bind(this);
    }
    
    getChannelName = (userid) => {// get the display_name of the stream for a given userid
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
            this.setState({loadedGameStreamList: true});
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
            this.setState({loadedGameStreamList: true});
            return response.data;
        });
    }

    getSteamList = (tag, pages, sortby, start_page) => {// get a list of steam games based on tags and sortby(release date(empty) OR relevance(relevance))
        this.setState({gameList:[]});
        if (location.hostname === "") {
            this.setState({gameList:[{"appid":"6969","title":"PLACEHOLDER GetSteamList","date":"Jul 9, 2013"},{"appid":"570","title":"Dota 2","date":"Jul 9, 2013"},{"appid":"594570","title":"Total War: WARHAMMER II","date":"Sep 28, 2017"},{"appid":"648800","title":"Raft","date":"May 23, 2018"},{"appid":"718670","title":"Cultist Simulator","date":"May 31, 2018"},{"appid":"225540","title":"Just Cause\u2122 3","date":"Nov 30, 2015"},{"appid":"730","title":"Counter-Strike: Global Offensive","date":"Aug 21, 2012"},{"appid":"364360","title":"Total War: WARHAMMER","date":"May 24, 2016"},{"appid":"570940","title":"DARK SOULS\u2122: REMASTERED","date":"May 23, 2018"},{"appid":"230410","title":"Warframe","date":"Mar 25, 2013"},{"appid":"252950","title":"Rocket League\u00ae","date":"Jul 6, 2015"},{"appid":"681660","title":"Bless Online","date":"May 30, 2018"},{"appid":"359550","title":"Tom Clancy's Rainbow Six\u00ae Siege","date":"Dec 1, 2015"},{"appid":"613100","title":"House Flipper","date":"May 17, 2018"},{"appid":"578080","title":"PLAYERUNKNOWN'S BATTLEGROUNDS","date":"Dec 21, 2017"},{"appid":"413150","title":"Stardew Valley","date":"Feb 26, 2016"},{"appid":"440","title":"Team Fortress 2","date":"Oct 10, 2007"},{"appid":"552500","title":"Warhammer: Vermintide 2","date":"Mar 8, 2018"},{"appid":"236390","title":"War Thunder","date":"Aug 15, 2013"},{"appid":"606150","title":"Moonlighter","date":"May 29, 2018"},{"appid":"401850","title":"Just Cause\u2122 3 DLC: Air, Land &amp; Sea Expansion Pass","date":"Nov 30, 2015"},{"appid":"527430","title":"Warhammer 40,000: Inquisitor - Martyr","date":"Aug 31, 2017"},{"appid":"582660","title":"Black Desert Online","date":"May 24, 2017"},{"appid":"620980","title":"Beat Saber","date":"May 1, 2018"},{"appid":"238960","title":"Path of Exile","date":"Oct 23, 2013"},{"appid":"242760","title":"The Forest","date":"Apr 30, 2018"}]});
            //console.log('getSteamList LOCAL:' + this.state.gameList);
            this.getStreamsForGames();
            return;
        }
        $.ajax({
            type:'POST',
             url:'http://aestheticscult.com/react/datafetcherSteamPage.php',
             data:{ 
                 "tag": tag,
                 "pages": pages,
                 "sortby": sortby,
                 "start_page": start_page
                },
             dataType: 'JSON',
             success: (data) => {
              //console.dir(data);
              this.setState({gameList: data});
              this.getStreamsForGames(data);
             }
            });
    }

    getStreamsForGames = () => {// get a list of stream ids based on game ids from GameList
        if (location.hostname === "") {
            this.setState({streamList: [{"id":"461492","name":"Keep Talking and Nobody Explodes","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Keep%20Talking%20and%20Nobody%20Explodes-{width}x{height}.jpg"},{"id":"498000","name":"House Flipper","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/House%20Flipper-{width}x{height}.jpg"},{"id":"494839","name":"Deep Rock Galactic","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Deep%20Rock%20Galactic-{width}x{height}.jpg"},{"id":"15062","name":"Vampire: The Masquerade - Bloodlines","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Vampire:%20The%20Masquerade%20-%20Bloodlines-{width}x{height}.jpg"},{"id":"460630","name":"Tom Clancy's Rainbow Six: Siege","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Tom%20Clancy%27s%20Rainbow%20Six:%20Siege-{width}x{height}.jpg"},{"id":"55","name":"Baldur's Gate","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Baldur%27s%20Gate-{width}x{height}.jpg"},{"id":"263490","name":"Rust","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Rust-{width}x{height}.jpg"},{"id":"29307","name":"Path of Exile","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Path%20of%20Exile-{width}x{height}.jpg"},{"id":"416436","name":"Bless Online","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Bless%20Online-{width}x{height}.jpg"},{"id":"10407","name":"Counter-Strike: Source","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Counter-Strike:%20Source-{width}x{height}.jpg"},{"id":"495323","name":"Pillars of Eternity II: Deadfire","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Pillars%20of%20Eternity%20II:%20Deadfire-{width}x{height}.jpg"},{"id":"493399","name":"Wizard of Legend","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Wizard%20of%20Legend-{width}x{height}.jpg"},{"id":"66366","name":"War Thunder","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/War%20Thunder-{width}x{height}.jpg"},{"id":"31376","name":"Terraria","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Terraria-{width}x{height}.jpg"},{"id":"32982","name":"Grand Theft Auto V","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Grand%20Theft%20Auto%20V-{width}x{height}.jpg"},{"id":"488634","name":"Don't Starve Together","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Don%27t%20Starve%20Together-{width}x{height}.jpg"},{"id":"491513","name":"Portal Knights","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Portal%20Knights-{width}x{height}.jpg"},{"id":"493549","name":"Frostpunk","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Frostpunk-{width}x{height}.jpg"},{"id":"490757","name":"BattleTech","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/BattleTech-{width}x{height}.jpg"},{"id":"497711","name":"Moonlighter","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Moonlighter-{width}x{height}.jpg"},{"id":"24241","name":"FINAL FANTASY XIV Online","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/FINAL%20FANTASY%20XIV%20Online-{width}x{height}.jpg"},{"id":"369075","name":"A Hat in Time","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/A%20Hat%20in%20Time-{width}x{height}.jpg"},{"id":"94073","name":"The Binding of Isaac: Rebirth","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/The%20Binding%20of%20Isaac:%20Rebirth-{width}x{height}.jpg"},{"id":"490713","name":"Undertale","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Undertale-{width}x{height}.jpg"},{"id":"490384","name":"Planet Coaster","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Planet%20Coaster-{width}x{height}.jpg"},{"id":"30028","name":"The Elder Scrolls V: Skyrim","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/The%20Elder%20Scrolls%20V:%20Skyrim-{width}x{height}.jpg"},{"id":"498345","name":"Monster Prom","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Monster%20Prom-{width}x{height}.jpg"},{"id":"460090","name":"Subnautica","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Subnautica-{width}x{height}.jpg"},{"id":"32399","name":"Counter-Strike: Global Offensive","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Counter-Strike:%20Global%20Offensive-{width}x{height}.jpg"},{"id":"459064","name":"Cuphead","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Cuphead-{width}x{height}.jpg"},{"id":"505991","name":"Bloodstained: Curse of the Moon","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Bloodstained:%20Curse%20of%20the%20Moon-{width}x{height}.jpg"},{"id":"489904","name":"Total War: WARHAMMER","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Total%20War:%20WARHAMMER-{width}x{height}.jpg"},{"id":"490292","name":"Dark Souls III","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Dark%20Souls%20III-{width}x{height}.jpg"},{"id":"23453","name":"Fallout: New Vegas","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Fallout:%20New%20Vegas-{width}x{height}.jpg"},{"id":"492763","name":"Rising Storm 2: Vietnam","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Rising%20Storm%202:%20Vietnam-{width}x{height}.jpg"},{"id":"489635","name":"ARK","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/ARK-{width}x{height}.jpg"},{"id":"493551","name":"Conan Exiles","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Conan%20Exiles-{width}x{height}.jpg"},{"id":"7022","name":"The Forest","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/The%20Forest-{width}x{height}.jpg"},{"id":"499380","name":"Ancestors Legacy","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Ancestors%20Legacy-{width}x{height}.jpg"},{"id":"489776","name":"Fallout 4","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Fallout%204-{width}x{height}.jpg"},{"id":"491757","name":"Overload","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Overload-{width}x{height}.jpg"},{"id":"32345","name":"Borderlands 2","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Borderlands%202-{width}x{height}.jpg"},{"id":"29595","name":"Dota 2","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Dota%202-{width}x{height}.jpg"},{"id":"493815","name":"Oxygen Not Included","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Oxygen%20Not%20Included-{width}x{height}.jpg"},{"id":"66170","name":"Warframe","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Warframe-{width}x{height}.jpg"},{"id":"488492","name":"Icewind Dale: Enhanced Edition","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Icewind%20Dale:%20Enhanced%20Edition-{width}x{height}.jpg"},{"id":"19731","name":"Portal 2","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Portal%202-{width}x{height}.jpg"},{"id":"68063","name":"Armello","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Armello-{width}x{height}.jpg"},{"id":"130942","name":"Factorio","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Factorio-{width}x{height}.jpg"},{"id":"18846","name":"Garry's Mod","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Garry%27s%20Mod-{width}x{height}.jpg"},{"id":"503116","name":"Beat Saber","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Beat%20Saber-{width}x{height}.jpg"},{"id":"271304","name":"7 Days to Die","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/7%20Days%20to%20Die-{width}x{height}.jpg"},{"id":"496902","name":"Slay the Spire","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Slay%20the%20Spire-{width}x{height}.jpg"},{"id":"33945","name":"Starbound","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Starbound-{width}x{height}.jpg"},{"id":"417749","name":"Tabletop Simulator","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Tabletop%20Simulator-{width}x{height}.jpg"},{"id":"16676","name":"Team Fortress 2","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Team%20Fortress%202-{width}x{height}.jpg"},{"id":"32742","name":"Kerbal Space Program","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Kerbal%20Space%20Program-{width}x{height}.jpg"},{"id":"386821","name":"Black Desert Online","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Black%20Desert%20Online-{width}x{height}.jpg"},{"id":"461449","name":"Cities: Skylines","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Cities:%20Skylines-{width}x{height}.jpg"},{"id":"394568","name":"RimWorld","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/RimWorld-{width}x{height}.jpg"},{"id":"505420","name":"Cultist Simulator","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Cultist%20Simulator-{width}x{height}.jpg"},{"id":"24193","name":"Left 4 Dead 2","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Left%204%20Dead%202-{width}x{height}.jpg"},{"id":"493057","name":"PLAYERUNKNOWN'S BATTLEGROUNDS","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-{width}x{height}.jpg"},{"id":"498668","name":"Warhammer: Vermintide 2","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Warhammer:%20Vermintide%202-{width}x{height}.jpg"},{"id":"491177","name":"Slime Rancher","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Slime%20Rancher-{width}x{height}.jpg"},{"id":"459327","name":"Hearts of Iron IV","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Hearts%20of%20Iron%20IV-{width}x{height}.jpg"},{"id":"31750","name":"Arma 3","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Arma%203-{width}x{height}.jpg"},{"id":"491878","name":"BeamNG.Drive","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/BeamNG.Drive-{width}x{height}.jpg"},{"id":"494925","name":"Raft","box_art_url":"https:\/\/static-cdn.jtvnw.net\/ttv-boxart\/Raft-{width}x{height}.jpg"}] });            
            //console.log(' getStreamsForGames LOCAL:' + this.state.streamList);
            return;
        }

        $.ajax({
            type:'POST',
             url:'http://aestheticscult.com/react/datafetcherTwitchGetGames.php',
             data:{ 
                 gameList : JSON.stringify(this.state.gameList)
                },
             dataType: 'JSON',
             success: (data) => {
                //console.log(' getStreamsForGames SERVER:');
                //console.dir(data);
                this.setState({streamList: data});
             }
            });
    }

    getSteamTags = () => {// get a list of steam games based on tags and sortby(release date(empty) OR relevance(relevance))
        
        if (location.hostname === "") {
            this.setState({steamTags:[{ "tag": "1662", "tagName": "Survivoaumrls" },{"tag":"492","tagName":"Indie"},{"tag":"19","tagName":"Action"},{"tag":"21","tagName":"Adventure"},{"tag":"597","tagName":"Casual"},{"tag":"9","tagName":"Strategy"},{"tag":"599","tagName":"Simulation"},{"tag":"122","tagName":"RPG"},{"tag":"113","tagName":"Free to Play"},{"tag":"4667","tagName":"Violent"},{"tag":"4182","tagName":"Singleplayer"},{"tag":"128","tagName":"Massively Multiplayer"},{"tag":"701","tagName":"Sports"},{"tag":"4345","tagName":"Gore"},{"tag":"699","tagName":"Racing"},{"tag":"3859","tagName":"Multiplayer"},{"tag":"1756","tagName":"Great Soundtrack"},{"tag":"4166","tagName":"Atmospheric"},{"tag":"1664","tagName":"Puzzle"},{"tag":"6650","tagName":"Nudity"},{"tag":"3871","tagName":"2D"},{"tag":"1667","tagName":"Horror"},{"tag":"21978","tagName":"VR"},{"tag":"4085","tagName":"Anime"},{"tag":"1742","tagName":"Story Rich"},{"tag":"4026","tagName":"Difficult"},{"tag":"12095","tagName":"Sexual Content"},{"tag":"1684","tagName":"Fantasy"},{"tag":"1695","tagName":"Open World"},{"tag":"3942","tagName":"Sci-fi"},{"tag":"1774","tagName":"Shooter"},{"tag":"1685","tagName":"Co-op"}] });
            return;
        }
        
        $.ajax({
            type:'GET',
             url:'http://aestheticscult.com/react/datafetcherSteamTags.php',
             dataType: 'JSON',
             success: (data) => {
              this.setState({steamTags: data});
             }
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

    clear = () => {//clear streamGame and streamChannel and channelName
        this.setState({streamGame :""});
        this.setState({streamChannel : ""});
        this.setState({channelName : ""});
        this.setState({gameStreamList: []});
        this.setState({loadedGameStreamList: false});
    }

    changeSettings = (tag, pages, sortby, start_page) => {
        if (tag == 'n/a') {
            tag = this.state.searchSettings.tag;
        }
        if (pages == 'n/a') {
            pages = this.state.searchSettings.pages;
        }
        if (sortby == 'n/a') {
            sortby = this.state.searchSettings.sortby;
        }
        if (start_page == 'n/a') {
            start_page = this.state.searchSettings.start_page;
        }
        if (start_page < 1) {
            start_page = 1;
        }
        
        //start_page = start_page * pages; //multiply pagination by factor
        console.log ({tag, pages, sortby, start_page});
        this.setState({ searchSettings : {tag, pages, sortby, start_page}});
        this.getSteamList( tag, pages, sortby, (start_page - 1 )*pages);
    }
    
    

    componentDidMount( ) {
        
        this.changeSettings("", 5, "relevance", 1);//"relevance");
        //this.getSteamList("1662", 5, "newest", 1);//"relevance");
        this.getSteamTags();
    }
    
    
    
    render () {
        var filteredList = []
        
        filteredList = intersectLists(this.state.gameList, this.state.streamList);
        //console.log("filtered list: " + JSON.stringify(filteredList));
       
        /* 
        if (this.state.gameList.length > 0 ) {
            console.log('gameList RENDER()');
            console.dir(this.state.gameList);
        }

        if (this.state.streamList.length > 0 ) {
            console.log('streamList RENDER())');
            console.dir(this.state.streamList);
        }
*/         
        console.log (this.state.searchSettings);
        console.log('________________________________');
        /*
        console.log(
            'STATE - streamgame: ' + this.state.streamGame + // will search for streams of this game
            '/ streamchannel: ' + this.state.streamChannel +//current channel being watched
            '/ channel Name: ' + this.state.channelName + //name of the channel to send to twitch player
            '/ loadedGameStreamList: ' + this.state.loadedGameStreamList
        );
        */

        return (
            <div>
                <NavBar name="test string" clear = {this.clear}/>
                <SearchSettings tags = {this.state.steamTags} changeSettings = {this.changeSettings} searchSettings = {this.state.searchSettings}/>
                
                {(filteredList.length )? (
                    (this.state.streamGame == '')? (
                        <div>
                            
                            <StreamList gameList = {filteredList} chooseGame = {this.chooseGame}/>
                        </div>
                    ):(
                        (this.state.streamChannel == '')? (
                            <GameStreamList appid = {this.state.streamGame}  gameStreamList ={this.state.gameStreamList} chooseChannel = {this.chooseChannel} loaded = {this.state.loadedGameStreamList} />
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
 

   