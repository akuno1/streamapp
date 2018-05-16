function TwitchChannel(props) {
    new Twitch.Embed(props.id, {
        width: "100%",
        height: "900em",
        channel: props.channel,
        //layout: "video",
    });
}

const StreamChannel = (props) => {
    
    TwitchChannel(props);

    return (
        <div className={props.id}>

        </div>
    );
}

