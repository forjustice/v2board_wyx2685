(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{SGa5:function(e,t,a){"use strict";a.r(t);a("/zsF");var o=a("PArb"),n=(a("Pwec"),a("CtXQ")),s=a("q1tI"),r=a.n(s),i=a("/MKj"),c=a("3a4m"),l=a.n(c),d=a("t3Un");class m extends r.a.Component{constructor(e){super(e),this.state={loading:!1},this.keyDown=this.keyDown.bind(this)}keyDown(e){13===e.keyCode&&this.onLogin()}componentDidMount(){var e=this.props.location.query.verify,t=this.props.location.query.redirect;e&&Object(d["a"])("/passport/token2Login",{verify:e}).then(e=>{if(200===e.code)return e.data?l.a.push(t||"dashboard"):void 0}),Object(d["a"])("/passport/check").then(e=>{if(200===e.code)return e.data?l.a.push(t||"dashboard"):void 0}),window.addEventListener("keydown",this.keyDown,!1)}componentWillUnmount(){window.removeEventListener("keydown",this.keyDown,!1)}onLogin(){this.setState({loading:!0}),this.props.dispatch({type:"auth/login",action:{email:this.refs.email.value,password:this.refs.password.value},complete:e=>{if(console.log(e.code),200!==e.code)return this.setState({loading:!1});e.data&&(this.setState({loading:!1}),l.a.push("/dashboard"),this.props.dispatch({type:"header/getUserInfo"}))}})}render(){return r.a.createElement("div",{id:"page-container"},r.a.createElement("main",{id:"main-container",className:"v2board-background",style:{backgroundImage:window.v2board.background&&"url(".concat(window.v2board.background,")")}},r.a.createElement("div",{className:"no-gutters",style:{height:"100%"}},r.a.createElement("div",{className:"",style:{maxWidth:450,top:"calc(50% - 182.5px)",position:"absolute",right:0,left:0,margin:"auto"}},r.a.createElement("div",{className:"block block-rounded block-transparent block-fx-pop w-100 mb-0 overflow-hidden bg-image",style:{boxShadow:"0 0.5rem 2rem #0000000d"}},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-12 order-md-1 bg-white"},r.a.createElement("div",{className:"block-content block-content-full px-lg-4 py-md-4 py-lg-4"},r.a.createElement("div",{className:"mb-2 text-center"},r.a.createElement("a",{className:"link-fx font-w700 font-size-h1",href:"javascript:void(0)"},r.a.createElement("span",{className:"text-dark"},window.v2board.title?window.v2board.title:"V2Board")),r.a.createElement("p",{className:"text-uppercase font-w700 font-size-sm text-muted"},"\u8be5\u9875\u9762\u662f\u88ab\u52a0\u5bc6\u7684")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-alt",placeholder:"\u90ae\u7bb1",ref:"email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control form-control-alt",placeholder:"\u5bc6\u7801",ref:"password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{disabled:this.state.loading,type:"submit",className:"btn btn-block btn-hero-primary",onClick:()=>this.onLogin()},this.state.loading?r.a.createElement(n["a"],{type:"loading"}):r.a.createElement("span",null,r.a.createElement("i",{className:"si si-login mr-1"}),"\u767b\u9646")),r.a.createElement("div",{className:"text-center mt-3"},r.a.createElement("a",{className:"font-w700 font-size-sm text-muted",href:"javascript:void(0)",onClick:()=>l.a.push("/register")},"\u6ce8\u518c"),r.a.createElement(o["a"],{type:"vertical"}),r.a.createElement("a",{className:"font-w700 font-size-sm text-muted",href:"javascript:void(0)",onClick:()=>l.a.push("/forgetpassword")},"\u5fd8\u8bb0\u5bc6\u7801")))))))))))}}t["default"]=Object(i["c"])()(m)}}]);