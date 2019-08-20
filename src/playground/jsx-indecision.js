const app = {
    title: 'Indecision App',
    subtitle: 'This is a subtitle',
    options: []
};

const removeAll = (e) => {
    e.preventDefault();
    app.options = [];
    render();
}


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.optionPlaceHolder.value;
    if (option){
        app.options.push(option);
        e.target.elements.optionPlaceHolder.value = '';
        render()
    }

}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const onMakeDecision = () => {
    let randomNum = Math.floor(Math.random() * app.options.length);
    
    const randomPick = app.options[randomNum]
    alert(randomPick)
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
           <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I Do?</button>
         
            <button onClick={removeAll}>RemoveAll</button>
            {
               numbers.map(i => <p key={i}>{i}</p>)
            }
            <ol>
                {app.options.map(i => <li key={i}>{i}</li>)}
            </ol>
      
            <form onSubmit={onFormSubmit}>
                <input type="text" name="optionPlaceHolder"/>
                <button>Add Option</button>
            </form>
        </div>
        );
     ReactDOM.render(template, appRoot)
}

render();