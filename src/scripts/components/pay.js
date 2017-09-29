import $ from 'jquery'
import store from '../redux/store'
import actions from '../redux/actions'
class Pay extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
            list:store.getState().list
        }
    }
    render(){
        var sum=0
        var num=0
        var that=this
        this.state.list.forEach(function(item,i,elem){
            sum+=Number(item.num*item.price)
            num+=Number(item.num)
        })
        return (
            <div className='pay'>
                <div className="carspanbox"><span className="glyphicon glyphicon-ok-sign"></span><p>全选</p></div>
                <div className="text">
                    <p>合计(不含运费)：<b className="red">¥{sum.toFixed(2)}</b></p>
                    <span>已优惠: ¥0.00</span>
                </div>
                <div className="btn">
                    <a href="javascript:;">去结算({num})</a>
                </div>
            </div>
        )
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
export default Pay