import React,{Component} from 'react';

export class LoginComponent extends Component{
    constructor(){
        super();
        this.state = {
            username:"",
            password:""
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value);
        let currentState = this.state;
        currentState[e.target.name]= e.target.value;
        this.setState(currentState);
    }
    render(){
        return <div>
            <h1>Login</h1>
            <div><input type="text" placeholder="User name" name="username" onChange={this.handleChange}/></div><br></br>
            <div><input type="password" placeholder="Password" name="password" onChange={this.handleChange}/></div><br></br>
            <div><input type="text" placeholder="First name" name="firstname" onChange={this.handleChange}/></div><br></br>
            <div><input type="text" placeholder="Last name" name="lastname" onChange={this.handleChange}/></div><br></br>
            <div><input type="email" placeholder="Email" name="email" onChange={this.handleChange}/></div><br></br>
            <div><input type="text" placeholder="age" name="age" onChange={this.handleChange}/></div><br></br>
            <div><label>Gender</label>
            <input type="radio" name="gender" value="Male" onChange={this.handleChange}/>
            <input type="radio" name="gender" value="Female" onChange={this.handleChange}/></div><br></br>
            <div><input type="checkbox" name="agree"/></div><br></br>
            <div><label>I agree with the Terms and Conditions</label></div><br></br>
        <h1>{this.state.username}</h1>
        <h1>{this.state.password}</h1>
        </div>
    }
}