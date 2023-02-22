class Car extends React.Component {
    render() {
        return (
            <div className={'car'}>
                <h2>{this.props.brand}</h2>
                <h3>{this.props.model}</h3>
                <h3>{this.props.year}</h3>
                <h4>s/n: {this.props.sn}</h4>
            </div>
        );
    }
}

class Cars extends React.Component{
    render() {
        return (
            <div className={'cars'}>
                {cars.map(car => <Car sn={car.sn} brand={car.brand} model={car.model} year={car.year}/>)}
            </div>
        );
    }
}

const component = document.getElementById('root');
const root = ReactDOM.createRoot(component);

root.render(<Cars/>);