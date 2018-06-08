
class NavBar extends React.Component {    
    render() { 
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand clickable" onClick={(e) => this.props.clear(e)} >
                        <img src="media/logo.svg"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link clickable mx-2" onClick={(e) => this.props.clear(e)}>Start<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link clickable mx-2" data-toggle="collapse" data-target="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link clickable mx-2" data-toggle="collapse" data-target="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                    <div class = "">
                        <div class="collapse m-3" id="about">
                            <div class="card card-body">
                                <p>Sometimes, finding streamers playing certain types of games is difficult.</p>
                                <p>This App was built to help people find streams of games according to their preferences.</p>
                            </div>
                        </div>
                        <div class="collapse m-3" id="contact">
                            <div class="card card-body">
                                You may send your messages to felipergr@hotmail.com
                            </div>
                        </div>
                    </div>
            </div>
        );
    } 
}



    