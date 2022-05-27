class App extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            text: '',
        }
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
            <h1>{this.state.text}</h1>
            </>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
