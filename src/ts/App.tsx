import {render, version} from 'inferno';
import Component from 'inferno-component';
import {ComponentA, ComponentB} from "./TestPack";

const container : any = document.getElementById('app');

import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

class MyComponent extends Component<any , any> {

    constructor(props) {
        super(props);
        this.state = {
            counter: 10
        }
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

const Home = ()=> <div>Home</div>
const NoMatch = ()=> <div>NoMatch</div>

const routes = (
    <Router history={ browserHistory }>
        <Route component={ MyComponent }>
            <IndexRoute component={ Home }/>
            <Route path="*" component={ NoMatch }/>
        </Route>
    </Router>
);

render(routes , container);