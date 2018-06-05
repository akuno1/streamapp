// Create a ES6 class component    
class ShoppingList extends React.Component { 
    // Use the render function to return JSX component      
    render() { 
        return (
        <div className="col">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
        </ul>
        </div>
        );
    } 
}

const Card = (props) => {
    return (
        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={"https://robohash.org/"+ props.id +"?200x200"} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

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
                                <a className="nav-link" href="#">Start<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    } 
}



    