// Create a ES6 class component    
class SideBar extends React.Component { 
    // Use the render function to return JSX component      
    render() { 
        return (
            <div id="wrapper">
                <div id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                    <li className="sidebar-brand"><a href="#">Home</a></li>
                    <li><a href="#">Another link</a></li>
                    <li><a href="#">Next link</a></li>
                    <li><a href="#">Last link</a></li>
                    </ul>
                </div>
                <div id="page-content-wrapper">
                    <div className="page-content">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <p>
                            Content of page.
                            </p>
                            <p>
                            Menu will appear collapsed on smaller screens &ndash; resize me!
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    } 
}