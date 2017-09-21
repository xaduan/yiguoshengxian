
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
                <Footer></Footer>                
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
    render(){
        return (
            <div className="footer">
                <Iconitem iconclass="glyphicon glyphicon-home"spanname="首页"></Iconitem>
                <Iconitem iconclass="glyphicon glyphicon-th-large"spanname="分类"></Iconitem>
                <Iconitem iconclass="glyphicon glyphicon-plane"spanname="吃饭吧"></Iconitem>
                <Iconitem iconclass="glyphicon glyphicon-shopping-cart"spanname="购物车"></Iconitem>
                <Iconitem iconclass="glyphicon glyphicon-user"spanname="我的易果"></Iconitem>
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
            <div className="iconitem"style={this.props.divstyle}>
                <span className={this.props.iconclass}style={this.props.iconstyle}></span>
                <span>{this.props.spanname}</span>
            </div>
        )
    }
}
Iconitem.defaultProps={
    iconclass:"glyphicon glyphicon-home",
    iconstyle:{fontSize:".2rem"},
    divstyle:{fontSize:".12rem",color:"#B8B7B7"},
    spanname:"首页"    
}
export default Root