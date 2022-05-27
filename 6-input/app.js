class App extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            text: '',
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        const event = e.target.value;
        this.setState({
            text: this.state.text = event
        })
    }

    resetState() {
        this.setState({
        text: ''
        })

    }

    render() {
        return (
            <>
            <input value={this.state.text} placeholder="wpisz..." onChange={this.handleInput} type="text" />
            <button onClick={this.resetState.bind(this)}>reset</button>
            <PanelResult text={this.state.text} />    
            </>

        )
    }
}

const PanelResult = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
