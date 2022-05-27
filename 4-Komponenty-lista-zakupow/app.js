class ShoppingList extends React.Component {
    state = {
        item_1: 'Marchew',
        item_2: 'Ogórek',
        item_3: 'Pomidor',
        
    }

    render(){
        return (
            <>
                <h1>Lista Zakupów</h1>
                <ul>
                    <ItemList name={this.state.item_1}/>
                    <ItemList name={this.state.item_2}/>
                    <ItemList name='oko' />
                    
                </ul>
            </>

        )
    }
}

// const itemList = (props) => {
//     return (
//         <li>{props.name} oko</li>
//     )
// }

class ItemList extends React.Component {
    render () {
        return (
            <li>{this.props.name}</li>
        )

    }
}

ReactDOM.render(<ShoppingList />, document.getElementById('root'))