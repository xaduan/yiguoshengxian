import $ from 'jquery'
import store from '../redux/store'
import actions from '../redux/actions'
class Xiangqing extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
        }
    }
    render(){
        return (
            <div className="box">
                <Head></Head>
                <Body></Body>
            </div>            
        )
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
            <div className="xiangqing">
                {this.state.issuccess?<Componenta res={this.state.data.RspData.data.YgActivityFloors[0].ActivityFloorItems}/>:""}
            </div>            
        )
    }
    componentDidMount(){
        let that=this
        $.ajax({
            url:"/d.json",
            success(res){
                console.log(res)                
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
        }
    }
    render(){
        return (
            <div>
                {this.createEle(this.props.res)}
            </div>
        )
    }
    createEle(arr){
        let that=this
        let brr=[]
        arr.forEach((item)=>{
            if(item.FloorItemType==0){
                brr.push(
                    <div className="flex-item">
                        <img src={item.FloorItemImgUrl}/>
                    </div>
                )
            }else if(item.FloorItemType==1){
                brr.push(
                    <div  className="flex-item-last">
                        {that.createItem(item.Commoditys)}
                    </div>
                )
            }
            
        })
        return brr
    }
    createItem(arr){
        let brr=[]
        var that=this
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
        alert("添加成功!")
    }
}
export default Xiangqing