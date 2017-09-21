import $ from 'jquery'
class Index extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
        }
    }
    render(){
        return (
            <div>
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
            ban:[]
        }
    }
    render(){
        return (
            <div className="body">
                <div className="swiper-container swiper">
                    <div className="swiper-wrapper">
                        {this.createBanner(this.state.ban)}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
    createBanner(arr){
        let brr=[]
        arr.forEach((item)=>{
            brr.push(
                <div className="swiper-slide"><a href={item.hrefValue}><img src={item.pictureUrl}/></a></div>
            )
        })
        return brr
    }
    componentDidMount(){
        let that=this
        $.ajax({
            url:"/a.json",
            success(res){
                console.log(res.data.template.componentList[0].carouselPictures)
                that.setState({ban:res.data.template.componentList[0].carouselPictures})
                console.log(that.state.ban)
                new Swiper ('.swiper',{
                pagination: '.swiper-pagination',
                loop: true
            })
            }  
                 
        })
             
    }
}



export default Index
