import $ from 'jquery'
class Eat extends React.Component {
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
            <div className="eat">
                {this.state.issuccess?<Componenta res={this.state.data.RspData.ArticleList.List}/>:""}
            </div>            
        )
    }
    componentDidMount(){
        let that=this
        $.ajax({
            url:"/c.json",
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
        console.log(this.props.res)
        return (
            <div>
                {this.createEle(this.props.res)}
            </div>
        )
    }
    createEle(arr){
        let brr=[]
        arr.forEach((item)=>{
            brr.push(
                <div className="onecom">
                    <div className="eat-img"><img src={item.PictureUrl}/></div>
                    <h2>{item.EfruitArticleTitle}</h2>
                    <p>{item.EfruitArticleSummary}</p>
                    <div className="border"></div>
                    <div className="boxitem">
                        <div><img src={item.AuthorPicture}/>{item.Author}</div>
                        <span>{item.PublishedTimed}</span>
                    </div>
                </div>
            )
        })
        return brr
    }
}

export default Eat