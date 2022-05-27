class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            count: 0,
            result: 0,
        }
    }
    
    handleClick(type, number) {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
        if (type === 'sub') {
            this.setState((prevState) => ({
                result: prevState.result - number
            }))
        } else if(type === 'reset') {
            this.setState(() => ({
                result: 0
            }))
        } else if(type === 'add') {
            this.setState((prevState) => ({
                result: prevState.result + number
            }))   
        }
    }
    
    
    render() {
        return (
            <>
                <button onClick={this.handleClick.bind(this, 'sub', 1)}>-1</button>   
                <button onClick={this.handleClick.bind(this, 'reset', 1)}>reset</button>   
                <button onClick={this.handleClick.bind(this, 'add', 1)}>+1</button>   
                <h1>Liczba kliknięć:  {this.state.count}</h1>
                <h1>Wynik: {this.state.result}</h1>
            </>

        )
    }
}

const PanelResult = (props) => {
    return (
        <p>{props.text}</p>
    )
}

ReactDOM.render(<Message />, document.getElementById('root'));
