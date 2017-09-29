import $ from 'jquery'
import store from '../redux/store'
import actions from '../redux/actions'
import Pay from './pay'

class Car extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
            isHas:store.getState().isHas
        }
    }
    render(){
        console.log(this.state.isHas)
        return (
            <div className="box">
                <Head></Head>
                <Body></Body>                
                {this.state.isHas?<Pay/>:''}
            </div>            
        )
    }
    componentDidMount(){
        var that=this
        store.subscribe(function(){
            that.setState({
                isHas:store.getState().isHas
            })
        })
    }
}
class Head extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
        }
    }
    render(){
        return (
            <div className="head">
                <span className="posi">北京 <span className="glyphicon glyphicon-chevron-down"> </span></span><div> <span className="glyphicon glyphicon-search"></span> <input type="text"/></div>
            </div>
        )
    }
}
class Body extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
            data:[],
            issuccess:false,
            content:[]
        }
    }
    render(){
        return (
            <div className="car">
                {this.state.issuccess?<Componentb res={this.state.data.RspData.data.YgActivityFloors[0].ActivityFloorItems}/>:""}
                {this.state.issuccess?<Componenta res={this.state.data.RspData.data.YgActivityFloors[0].ActivityFloorItems}/>:""}
            </div>            
        )
    }
    componentDidMount(){
        let that=this
        $.ajax({
            url:"/d.json",
            success(res){              
                that.setState({data:res})                
                that.setState({issuccess:true}) 
            }                   
        })               
    }
}
class Componenta extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
            list:store.getState().list
        }
    }
    render(){
        return (
            <div className="tuijianbox">
                <div className="margin"></div>
                <h2>-- 猜你喜欢 --</h2>
                <div className="tuijian"> 
                    {this.createItem(this.props.res[5].Commoditys)}
                </div>
            </div>           
        )
    }
    createItem(arr){
        var that=this
        let brr=[]
        arr.forEach((item)=>{
            brr.push(
                <div className="item-box">
                    <img src={item.SmallPic}/>
                    <p>{item.CommodityName}</p>
                    <p className="comp">{item.SubTitle}</p>
                    <div className="divbox"><span>￥{item.CommodityPrice}</span><span><img src="http://img06.yiguoimg.com/e/web/160623/01634/btnbuy.jpg" onClick={that.writeId.bind(item)}/></span></div>
                </div>
            )            
        })
        return brr
    }
    writeId(){
        actions.createNumber(this)
    }
    componentDidMount(){
        let that=this
        store.subscribe(function(){
            that.setState({
                list:store.getState().list
            })
        })
    }
}
class Componentb extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
            list:store.getState().list
        }
    }
    render(){
        return (
            <div className="list">
                <div>{this.state.num}</div> 
                {this.createItem(this.props.res[5].Commoditys)}
            </div>
        )
    }
    createItem(arr){    
        var that=this    
        var brr=[]
        for(var i=0;i<that.state.list.length;i++){
            arr.forEach((item)=>{                
                if(item.CommodityId==that.state.list[i].id){
                    brr.push(
                        <div className="car-item-box">
                            <div className="carspanbox"><span className="glyphicon glyphicon-ok-sign"></span></div>
                            <div className="carimgbox"><img src={item.SmallPic}/></div>
                            <div className="infobox">
                                <div className="topbox"><p>{item.CommodityName}</p><span className="glyphicon glyphicon-trash" onClick={that.removeId.bind(item)}></span></div>
                                <div className="botbox"><span>￥{item.CommodityPrice}</span><div className="numbox"><span className="glyphicon glyphicon-minus" onClick={that.reduceId.bind(item)}></span><span className="spannum">{that.state.list[i].num}</span><span className="glyphicon glyphicon-plus" onClick={that.addId.bind(item)}></span></div></div>
                            </div>                    
                        </div>
                    )  
                    brr.push(<div className="border"></div>)
                }
            })
           
        }
              
        return brr
    }
    addId(){
        actions.addNumber(this)
    }
    reduceId(){
        actions.reduceNumber(this)
    }
    removeId(){
        actions.removeNumber(this)
    }
    componentDidMount(){
        let that=this
        store.subscribe(function(){
            that.setState({
                list:store.getState().list
            })
        })
    }
}
export default Car