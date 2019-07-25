
let count = 0;

const addOne = () => {
    renderCounterApp();
    count++;
};

const minusOne = () => {
    renderCounterApp();
    count--;
};

const reset = () => {
    renderCounterApp();
    count = 0;
    reset()
};


const renderCounterApp = () => {
    const templateTwo = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
        </div>
        );

        ReactDOM.render(templateTwo, appRoot);
};


renderCounterApp();