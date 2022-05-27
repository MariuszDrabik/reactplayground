class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            messageIsOn: false,
            btn: 'Pokarz',
        }
    }
    
    showMessage() {
        this.setState({
            messageIsOn: !this.state.messageIsOn,
            btn: this.state.btn == 'Pokarz' ? 'Schowaj' : 'Pokarz'
        });
    }
    
    render() {
        console.log(this.state.messageIsOn)
        const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut autem quas sequi illo velit vitae quo cumque dolor? Qui omnis ipsum minima non culpa error quisquam. Beatae, quia architecto.'
        return (
            <>
            <button onClick={this.showMessage.bind(this)}>{this.state.btn}</button>
            {this.state.messageIsOn ? <PanelResult text={this.state.messageIsOn && text} /> : null}
            
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
