require('./styles/app.scss')
import Login from './scripts/components/Login'
import Root from "./scripts/components/root";
import Index from "./scripts/components/index";
import Car from "./scripts/components/shopcar";
import Cutclass from "./scripts/components/cutclass";
import Eat from "./scripts/components/eat";
import Mine from "./scripts/components/mine";
import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Root}> 
            <IndexRoute component={Index}/>
            <Route path="/index" component={Index}></Route>
            <Route path="/car" component={Car}></Route>
            <Route path="/cut" component={Cutclass}></Route>
            <Route path="/eat" component={Eat}></Route>
            <Route path="/mine" component={Mine}></Route>
            <Route path="*" component={Index}></Route>
        </Route>
    </Router>
    
    ,document.getElementById("show"))