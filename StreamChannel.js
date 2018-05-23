function TwitchChannel(props) {
    new Twitch.Embed("root", {
        width: "100%",
        height: screen.height - 76,
        channel: props.channel//props.channel,
        //layout: "video",
    });
}

class StreamChannel extends React.Component {
    
    componentDidMount(){
        TwitchChannel(this.props);
    }

    render() {
        
        return (
            <div className="twitchClass">

            </div>
        );
    }
}

