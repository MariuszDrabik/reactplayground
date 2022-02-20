const header = <h1 className="title">Witaj Świecie</h1>

const classBig = 'big'

const main =(
    <div>
        <h1 onClick={ () => {alert("KLICK")}} className="red">Pierwszy artykuł</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam odit perferendis quae sequi accusamus facere. Tempore eius necessitatibus fuga, minima, corrupti est commodi quod voluptatem obcaecati quidem iste eos?</p>
    </div>
)

const footer = (
    <footer>
        <p className={classBig}>Stopka</p>
    </footer>
)

const app = [header, main, footer]

ReactDOM.render(app, document.getElementById('root'))