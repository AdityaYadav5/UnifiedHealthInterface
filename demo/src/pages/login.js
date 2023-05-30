import "./login.css"
const Login = () => {

    return (
    <div className="m-5 p-5">
        <div id="formDiv">
        <div>
        <form className="login-form" action="/login" method="post">
            <label>Hospital ID</label>
            <input type="text" placeholder="Enter Hospital ID" name="hid"></input>
            <label>Enter Password</label>
            <input type="password" placeholder="Enter Password" name="hpass"></input>
            <button type="submit">Login</button>
        </form>
        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
    );

}

export default Login;