var res;

function SimpleFetch() {
    fetch('./steam.json')
        .then(response => response.json())
        .then(response => res = response)
        //.then(json => console.log(json))
        //.then(response => console.log(response))
}


const StreamList = (props) => {    
    SimpleFetch();

    return (
        <div className=''>
            {res}
        </div>
    );
    
}