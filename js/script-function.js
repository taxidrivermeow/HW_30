function Car (props) {
    return <div className={'car'}>
                <h2>{props.brand}</h2>
                <h3>{props.model}</h3>
                <h3>{props.year}</h3>
                <h4>s/n: {props.sn}</h4>
           </div>
}

function Cars () {
    return <div className={'cars'}>
                {cars.map(car => <Car brand={car.brand} year={car.year} model={car.model} sn={car.sn}/>)}
           </div>
}

const component = document.getElementById('root');
const root = ReactDOM.createRoot(component);

root.render(<Cars/>);