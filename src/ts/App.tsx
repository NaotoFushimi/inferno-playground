import {render, version} from 'inferno';
import Component from 'inferno-component';

const container : any = document.getElementById('app');

class MyComponent extends Component<any , any> {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <div>
                <h1>Header!???---------</h1>
                <span>Counter is at: { this.state.counter }</span>
                <button onclick={(e)=>{
                    this.setState({...this.state , counter : this.state.counter +1 })
                }}>aaaaa</button>
            </div>
        );
    }
}

render(<MyComponent /> , container);