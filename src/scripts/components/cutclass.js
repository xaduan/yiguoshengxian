import {Head} from './index'
import $ from 'jquery'
class Cutclass extends React.Component {
    constructor(props,context){
        super(props,context)

        this.state={
          list:[],
          ind:0,
          ppp:false
        }
    }
    addList(arr){
        var brr=[];
        var that=this;
        arr.forEach(function(item,i){
            if(i==0){
                brr.push(  
                    <li className='Liactive'>{item.CategoryName}</li> 
                )
            }else{
                brr.push(  
                    <li>{item.CategoryName}</li>
                )
            }
                
           
        })
        return brr;
    }
    addContent(arr){
        var brr=[];
        var that=this;
        console.log(this.state.ind)
        console.log(this.state.list)
        var ind=this.state.ind
        
        arr[ind].Childs.forEach(function(item,i){
            brr.push(<a href='#/xiangqing' className='cA'>
                        <img className='cImg' src={item.PictureUrl} alt=""/>
                        <p>{item.CategoryName}</p>
                    </a>) 
        })
        return brr;
    }
    getNews(){
        let that = this
        $.ajax({
            url:'/b.json',
            type:'get',
            success(results){
                // console.log(results)
                that.setState({
                    list:results.RspData.data
                })
                that.setState({
                    ppp:true
                })
            }
            
        })
    }
    componentDidMount(){
        this.getNews()
        var that=this;
        $(".navList").on('click','li',function(){
            $('.navList li').removeClass('Liactive')
            $(this).addClass('Liactive')
            that.setState({
                ind:$(this).index()
            })
            
        })
    }
    render(){
        return (
            <div className='box'>
               <Head/>
               <div className='cutList'>
                   <div className="nav">
                        <ul className="navList">
                            {this.addList(this.state.list)} 
                        </ul>
                    </div>
                    <div className='listContent'>
                        {this.state.ppp?this.addContent(this.state.list):''} 
                    </div>
               </div>
               
            </div>
        )
    }
}
export default Cutclass