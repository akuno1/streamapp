class SearchSettings extends React.Component {    
    //tag, pages, sortby, start_page
    render() {
        var tags = []
        this.props.tags.forEach(element => {
            tags.push(<button class="dropdown-item"  type="button" onClick={(e) => this.props.changeSettings(element.tag, 'n/a','n/a','n/a', e)}>{element.tagName}</button>);
        });

        
        var currentTag = 'No Tag';
        this.props.tags.forEach(element => { 
            if (element.tag == this.props.searchSettings.tag) { 
                currentTag = element.tagName; 
            } 
        });

        var currentSortby = '';
        (this.props.searchSettings.sortby == 'newest') ? (currentSortby = 'New Releases') : (currentSortby = 'Popularity');
        
        var pagination = [];    
        pagination.push(<li class="page-item"><a class="page-link" href="#" onClick={(e) => this.props.changeSettings('n/a', 'n/a', 'n/a', this.props.searchSettings.start_page - 1, e)}>Previous</a></li>);
        pagination.push(<li class="page-item disabled"><a class="page-link bg-success text-white" >{this.props.searchSettings.start_page}</a></li>);
        pagination.push(<li class="page-item"><a class="page-link" href="#" onClick={(e) => this.props.changeSettings('n/a', 'n/a', 'n/a', this.props.searchSettings.start_page + 1, e)}>Next</a></li>);

        var searchDepth = [];
        var pageNumbers = [];
        for ( var i = 1; i < 101; i++ ) {
            pageNumbers[i] = i;
            searchDepth.push(<button class="dropdown-item"  type="button" onClick={(e) => this.props.changeSettings('n/a',  e.currentTarget.textContent ,'n/a','n/a', e)}>{i}</button>);
        }

        
        return (
            <div className = "container-fluid">
                <div className = "row">
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        
                        
                        <div class="btn-group mr-2" role="group" aria-label="Tags" data-toggle="tooltip" title="The type of games you are looking for." >
                            <div className ="  m-2 p-0">
                                <div class=" rounded dropdown ">
                                    <button class=" btn-primary btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Search by Tag
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button class="dropdown-item" type="button" onClick={(e) => this.props.changeSettings('', 'n/a','n/a','n/a', e)}>No Tag</button>
                                        {tags}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{margin: 10}} data-toggle="tooltip" title="The type of games you are looking for.">
                            <a class="badge badge-pill badge-success m-2"><span class="text-light">{currentTag }</span></a>
                        </div>
                        


                        <div class="btn-group mr-2" role="group" aria-label="Sortby" data-toggle="tooltip" title="The order that results are presented.">
                            <div className =" m-2 p-0">
                                <div class="dropdown">
                                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sort By
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button class="dropdown-item" type="button" onClick={(e) => this.props.changeSettings('n/a', 'n/a', 'newest', 'n/a', e)}>New Releases</button>
                                        <button class="dropdown-item" type="button" onClick={(e) => this.props.changeSettings('n/a', 'n/a', 'relevance', 'n/a', e)}>Popularity</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{margin: 10}} data-toggle="tooltip" title="The order that results are presented.">
                            <a class="badge badge-pill badge-success m-2"><span class="text-light">{currentSortby }</span></a>
                        </div>



                        <div class="btn-group mr-2" role="group" aria-label="Search Depth" data-toggle="tooltip" title="The quantity of games to search. The bigger the value, the longer it takes to load the full list.">
                            <div className =" m-2 p-0">
                                <div class="dropdown">
                                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Search Depth
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2" >
                                        {searchDepth}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{margin: 10}} data-toggle="tooltip" title="The amount of results to load per page.">
                            <a class="badge badge-pill badge-success m-2"><span class="text-light">{this.props.searchSettings.pages}</span></a>
                        </div>


                    </div>

                    
                    <div className ="col-xs-12 col-md-3 m-2">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination mb-0">
                                {pagination}
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        );
    }

}