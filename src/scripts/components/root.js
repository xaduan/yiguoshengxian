
class Root extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
        }
    }
    
    render(){
        return (
            <div className="index">
                {this.props.children}
                <Footer pathname={this.props.location.pathname}></Footer>                
            </div>            
        )
    }
}
class Footer extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
        }
    }
    getActive(hash){
        let active = this.props.pathname=='/'?'/main':this.props.pathname       
        return hash==active?'success':''
    }
    render(){
        return (
            <div className="footer">
                <Iconitem iconclass="glyphicon glyphicon-home"spanname="首页"href="#/index"aclass={this.getActive("/index")}></Iconitem>
                <Iconitem iconclass="glyphicon glyphicon-th-large"spanname="分类"href="#/cut"aclass={this.getActive("/cut")}></Iconitem>
                <Iconitem iconclass="glyphicon glyphicon-plane"spanname="吃饭吧"href="#/eat"aclass={this.getActive("/eat")}></Iconitem>
                <Iconitem iconclass="glyphicon glyphicon-shopping-cart"spanname="购物车"href="#/car"aclass={this.getActive("/car")}></Iconitem>
            </div>
        )
    }
}
class Iconitem extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
        }
    }
    render(){
        return (
            <div className="iconitem">
                <a href={this.props.href}className={this.props.aclass}><span className={this.props.iconclass}></span></a>
                <a href={this.props.href}className={this.props.aclass}><span>{this.props.spanname}</span></a>
            </div>
        )
    }
}
export default Root