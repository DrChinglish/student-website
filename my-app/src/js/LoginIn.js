import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Redirect } from 'react-router-dom';
import { Button, Input } from 'antd';
import Body from './Body';
import '../asserts/css/App.css';
import '../asserts/css/Logo.css';
import '../asserts/css/Info.css';
import Title from './Title';

class LoginIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag:1,
            username:"",
            password:"",
            type:"",
            isLogin:false,
        };
    }

    GetUsername=(e)=>{
        this.setState({
            username:e.target.value,
        })
    }

    GetCode=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }

    AppData=()=>{
        // fetch(backendUrl+"user/login/post/",{
        //     method:"post",
        //     mode:"cors",
        //     body:JSON.stringify(this.state),
        //     headers:{
        //         'content-type': 'application/json'
        //     },
        //     credentials: 'include',
        // })
        //     .then(res => res.json())
        //     .then((result)=>{
        //         this.setState({
        //             isLogin:result.isSuccess,
        //             type:result.group,
        //         })
        //         alert(result.message)
        //         if(result.isSuccess){
        //             //alert(result.session_id
        //             setCookie("sessionid",result.session_id)
        //         }


        //     },
        // (error)=>{
        //     console.log(error);
        // })
        
        if(this.state.type === "common"&&this.state.isLogin){
            this.setState({
                flag:3,
            })
        }else if(this.state.type === "admin"&&this.state.isLogin){
            this.setState({
                flag:4,
            })
        }else if(this.state.type === "superAdmin"&&this.state.isLogin){
            this.setState({
                flag:5,
            })
        }else{
            alert("用户名和密码错误!");
        }
    }

    Back=()=>{
        this.setState({
            flag:0,
        })
    }

    render(){
        if(this.state.flag === 1){
            return (
                <div>
                    <Title></Title>
                    <div className = "Logo_Login" style={{float:'left'}}>
                        <Body></Body>
                    </div>
                    <div className = "Info_Login" style={{float:'left'}}>
                        <div>
                            <form>
                                <div>
                                    <div>
                                        <Input id = "text" type = "text" name = "用户名" placeholder = "用户名" ref = "name" onChange = {(e)=>this.GetUsername(e)}/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <Input id = "text" type = "password" name = "密码" placeholder = "密码" ref = "code" onChange = {(e)=>this.GetCode(e)}/>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <Button onClick = {this.AppData}>
                                    登录
                                </Button>
                            </div>
                            <div>
                                <Button onClick = {this.Back}>
                                    返回
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else if(this.state.flag === 0){
            return <Redirect to = {{pathname:'/'}} />
        }else if(this.state.flag === 3){
            return <Redirect to = {{pathname:'/User'}} />
        }
        
    }
}

export default LoginIn;