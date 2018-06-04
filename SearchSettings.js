class SearchSettings extends React.Component {    
    //tag, pages, sortby, start_page
    render() {
        var tags = []
        this.props.tags.forEach(element => {
            tags.push(<button class="dropdown-item" type="button">{element.tagName}</button>);
        });
        
        return (
            <div className = "container-fluid">
                <div className = "row">
                    <div className ="col-xs-12 col-md-2 m-2">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tags
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">Action</button>
                                {tags}
                            </div>
                        </div>
                    </div>
                    
                    <div className ="col-xs-12 col-md-3 m-2">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination mb-0">
                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className ="col-xs-12 col-md-3 m-2">
                        <a href="#" class="badge badge-pill badge-secondary m-2">Secondary</a>
                    </div>
                </div>
            </div>
        );
    }

}