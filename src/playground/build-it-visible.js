

let visibility = false;

const toggleVis = () => {
    visibility = !visibility;
    render();
}


const render = () => {
   const jsx = (
       <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVis}>
        {visibility ? 'Hide details' : 'Show details'}
        </button>
        {visibility && <p>Your Program Works</p>}
        </div>
   );
   ReactDOM.render(jsx, document.getElementById('app'))
}

render() 
