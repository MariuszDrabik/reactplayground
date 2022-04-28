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
                    this.forEach(element => {
                        
                    });
                    <itemList name=ite/>
                    <itemList />
                    <itemList />
                </ul>
            </>

        )
    }
}

const itemList = (props) => {
    return (
        <li>{props.name}</li>
    )
}

ReactDOM.render(<ShoppingList />, document.getElementById('root'))