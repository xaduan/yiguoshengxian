
import $ from 'jquery'
import NewsComponent from './NewsComponent'
class CollectComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          news:[]
        }
    }
    
    getNews(){
        let that = this
        $.ajax({
            url:'http://localhost:9000/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A135791B7FD75D1&cp=59BF47350D519E1&max_behot_time=1505712711',
            success(results){
                that.setState({news:results.data})
            },
            error:function (err) {
                console.log('error:')
                console.log(err)
            }
        })
    }

    showNews(){
        
        let {news} = this.state
        console.log(news)
        let arr = []
        if(news.length){
            news.forEach((item,i)=>{
                arr.push(<NewsComponent news={item} />)
            })
        }
        return arr
    }

    componentWillMount(){
        this.getNews()
    }

    render(){

        return (


            <div className="content">
                <div className="content">
                    {
                        this.state.news.length==0?<button onClick={this.getNews.bind(this)} type="button" className="btn btn-danger">重新加载</button>:''
                    }
                    
                    
                    {this.showNews()}

                </div>
            </div>

        )
    }
}
//定义默认属性
CollectComponent.defaultProps={

}



export default CollectComponent