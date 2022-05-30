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
                <MathButton 
                    name='-10' 
                    number='10' 
                    type='sub' 
                    click={this.handleClick}
                />
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

const MathButton = (props) => {
    console.log(props)
    return (
        <button>-10</button>
    )
}

ReactDOM.render(<Message />, document.getElementById('root'));
