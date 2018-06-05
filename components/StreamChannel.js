function TwitchChannel(props) {
    var height = screen.height * 0.80;

    new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: height, //"800em",
        channel: props.channel,//props.channel,
        theem: "dark"
    });
    //console.log("screen height - x:" + height );
}

class StreamChannel extends React.Component {
    
    componentDidMount(){
        TwitchChannel(this.props);
    }

    render() {
        
        return (
            <div id="twitch-embed">
            </div>
        );
    }
}

