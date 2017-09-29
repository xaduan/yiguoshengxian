import $ from 'jquery'
class Index extends React.Component {
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
            <div className="body">
                {this.state.issuccess?<Componenta res={this.state.data.data.template.componentList}/>:""}
                {this.state.issuccess?<ComponentB res={this.state.data.data.template.componentList}/>:""}
            </div>            
        )
    }
    componentDidMount(){
        let that=this
        $.ajax({
            url:"/a.json",
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
            <div className="swiper-container swiper">
                <div className="swiper-wrapper">
                    {this.createBanner(this.props.res)}
                </div>
                <div className="swiper-pagination"></div>
            </div>        
            <Componentb res={this.props.res}/>
            <Componentc res={this.props.res}></Componentc>
            </div>
        )
    }
    createBanner(arr){
        console.log(arr)
        let brr=[]
        arr[0].carouselPictures.forEach((item)=>{
            brr.push(
                <div className="swiper-slide"><a href="#/xiangqing"><img src={item.pictureUrl}/></a></div>
            )
        })
        return brr
    }
    componentDidMount(){
        new Swiper ('.swiper',{
            pagination: '.swiper-pagination',
            loop: true
        })                
    }
}
class Componentb extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="imgbox">{this.createEle(this.props.res)}</div>
        )
    }
    createEle(arr){
        let brr=[]
        brr.push(
            <a href="#/xiangqing"><img src={arr[0].adPictures[0].pictureUrl}/></a>
        )
        return brr
    }
}
class Componentc extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className="nav">{this.createEle(this.props.res)}</div>
        )
    }
    createEle(arr){
        let brr=[]
        arr[0].componentNavs.forEach((item)=>{
            brr.push(
                <div className="navitem">
                    <img src={item.pictureUrl}/>
                    <span>{item.navName}</span>
                </div>
            )
        })
        return brr
    }
}
class ComponentB extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
        }
    }
    render(){
        return (
            <div className="content">
                {this.createEle(this.props.res)}
            </div>
        )
    }
    createEle(arr){
        let that=this
        let brr=[]
        arr.forEach((item)=>{
            if(item.componentBase.checkCodeName=="floor"){                    
                brr.push(
                    <div className="contentitem">
                        <div className="imgbox"><a href="#/xiangqing"><img src={item.adPictures[0].pictureUrl}/></a></div>
                        <div className="border"></div>
                        <div className="swiper-container itemswiper">
                            <div className="swiper-wrapper">
                                {that.createItem(item.componentCommoditys)}
                            </div>
                        </div>
                    </div>
                )                
            }
        })
        return brr
    }
    createItem(arr){
        let crr=[]
        arr.forEach((item)=>{             
            console.log(item)           
            crr.push(
                <div className="swiper-slide">
                    <div className="item-box"><a href="#/xiangqing"><img src={item.pictureUrl}/></a></div>
                    <p>{item.commodityName}</p>
                    <p>￥{item.commodityPrice}{item.commoditySpec}</p>
                </div>
            )                 
        })
        return crr
    }
    componentDidMount(){
        new Swiper ('.itemswiper',{
            loop:false,
            slidesPerView:3.5
        })  
    }
}
export {Index,Head}