class Login extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          news:[]
        }
    }


    render(){

        return (


            <div className="warp">
            <form action="">
                <div className="input-item">
                    <Input/>
                    <Input type={'password'} placeholder={'请输入您的密码'} className={'upasslogo'}/>
                    <Input isHide={false} placeholder={'请输入验证码'}/>
                </div>
                <div className="login-options">
                    <span><a href="#">忘记密码？</a></span>
                </div>
                <div className="btn-login">
                    <button>登录</button>
                    <button>立即注册</button>
                </div>
                <div className="login-other">
                    <dl>
                        <dt>-----------&nbsp;合作账号登录&nbsp;-----------</dt>
                        <dd>
                            <a href="#" class="qq" title="使用QQ联合登录">QQ</a>
                            <a href="#" class="weibo" title="使用新浪微博联合登录">新浪微博</a>
                        </dd>
                    </dl>
                </div>
            </form>
            <div className="footer"></div>
        </div>

        )
    }
}
//定义默认属性
Login.defaultProps={

}
//输入框
class Input extends React.Component{
    render(){
        return(
            <div className="input-item-list">
                {this.props.isHide?<span className={this.props.className}></span>:''}
                <input type={this.props.type} placeholder={this.props.placeholder}/>
            </div>
        )
    }
}
Input.defaultProps={
    placeholder:'请输入您的用户名',
    type:'text',
    isHide:true,
    className:'unamelogo'   
}


export default Login
