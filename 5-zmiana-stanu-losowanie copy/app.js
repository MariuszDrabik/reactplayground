class App extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            text: '',
            number: '2',
        }
        this.handleNumClick = this.handleNumClick.bind(this)
    }

    handleNumClick() {
        const number = Math.floor(Math.random() * 10)
        this.setState({
            number: this.state.number + number
        })
    }

    handleClick() {
        this.setState({
            text: this.state.text + 'a'
        })
    }
    render() {
        return (
            <>
            <button onClick={this.handleClick.bind(this)}>Dodaj A</button>
            <button onClick={this.handleNumClick}>Dodaj Cyfrę</button>
            <PanelResult text={this.state.text} />    
            <PanelResult text={this.state.number} />    
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
