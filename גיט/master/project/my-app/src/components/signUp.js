import React, { useState } from "react";
import { userAction } from './redux/actions/userAction'
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom'
import { signUpUser } from './service'

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    };
}
const mapDispatchToProps = (dispatch) => ({
    setName: (name) => dispatch(userAction.setName(name)),
    setPassword: (password) => dispatch(userAction.setPassword(password)),
    setEmail: (email) => dispatch(userAction.setEmail(email)),
    //id from mongo
    setId: (id) => dispatch(userAction.setId(id)),
    //  setUserName:(user) => dispatch(userAction.setUserName(user)),
    addUser: (user) => dispatch(userAction.addUser(user)),
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function SignUp(props) {
    const { addUser } = props;

    const [name, setUserName] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return (email !== "" && password !== "" && name !== "")
    }
    function add() {
        let result = signUpUser({ name: name, password: password, email: email })
        console.log("result" + result)
        let resultnewUser = JSON.parse(result)
        //setId(resultnewUser.user._id)
        addUser(resultnewUser)
        alert(`welcome${name} !`)
    }
    return (
        <>
            <Card body style={{ margin: "auto", width: "50%", border: "3px solid green", padding: "10px", height: '450px' }}>
                <Card.Header as="h1" style={{ color: "rgb(115, 131, 115)" }}>Connect</Card.Header>
                <Card.Text as="h3" style={{ textAlign: "center", color: "green" }}>enter name</Card.Text>
                <input type="text" value={name} onChange={(e) => setUserName(e.target.value)}   ></input>
                <Card.Text as="h3" style={{ textAlign: "center", color: "green" }}>enter password</Card.Text>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                <Card.Text as="h3" style={{ textAlign: "center", color: "green" }}>enter email</Card.Text>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>

                {/* <Button block size="lg" onClick={addUser1} type="submit" disabled={!validateForm()} style={{background: "LightGrey"}}>
                    Submit
                </Button> */}
                <Button variant="outline-success" onClick={add} type="button" disabled={!validateForm()}>
                    sign up
               </Button>                 <br></br>  <br></br>
                <Link to="/pictureOfTheDay">
                    <Button variant="outline-success" type="button">
                        picture Of The Day
               </Button>
                </Link>
            </Card>
        </>
    );

}))
