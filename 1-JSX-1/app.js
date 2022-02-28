const header = <h1 className="title">Witaj Świecie</h1>

const classBig = 'big'

const App = () => {
    <div>
        <h1>Pierwszy komponent</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, deserunt illum, aperiam quaerat voluptatibus nulla aliquid esse saepe totam aut laboriosam ex ab dicta laudantium reprehenderit, dolores officiis ad neque.*5</p>
    </div>
}


const main =(
    <div>
        <h1 onClick={ () => {alert("KLICK")}} className="red">Pierwszy artykuł</h1>
        <p>Loremd ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam odit perferendis quae sequi accusamus facere. Tempore eius necessitatibus fuga, minima, corrupti est commodi quod voluptatem obcaecati quidem iste eos?</p>
    </div>
)

const footer = (
    <footer>
        <p className={classBig}>Stopka</p>
    </footer>
)

const app = [header, main, footer]

ReactDOM.render(app, document.getElementById('root'))