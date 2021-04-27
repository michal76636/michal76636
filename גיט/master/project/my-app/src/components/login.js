import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { loginUser } from './service'
import { Link } from 'react-router-dom'
import { imgAction } from './redux/actions/imgAction'
import { connect } from 'react-redux';



const mapDispatchTopProps = (dispatch) => ({
    addImage: (image) => dispatch(imgAction.addImage(image))
})
export default connect(null, mapDispatchTopProps)(

    class Login extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                name: ' ',
                password: ' '
            }
        }
        setUserName = (value) => {
            this.setState({ name: value });
        }
        setPassword = (value) => {
            this.setState({ password: value });
        }
        onClickLogin = async () => {
            try {
                const data = await loginUser({ name: this.state.name, password: this.state.password });
                localStorage.setItem('token', data.token);
                this.props.addImage(data.user.Images)
                window.location.href = '/pictureOfTheDay';
            } catch (error) {
                alert("is not valid password")
            }
        }
        render() {
            return (
                <div>
                    <Card body style={{ margin: "auto", width: "50%", border: "3px solid green", padding: "10px", height: '450px' }}>
                        <br></br><br></br>
                        <Card.Header as="h1" style={{ color: "rgb(115, 131, 115)" }}>Login</Card.Header>
                        <Card.Text as="h3" style={{ textAlign: "center", color: "green" }}>enter name</Card.Text>
                        <input type="text" onChange={(e) => this.setUserName(e.target.value)}   ></input>
                        <Card.Text as="h3" style={{ textAlign: "center", color: "green" }}>enter password</Card.Text>
                        <input variant="outline-success" type="text" onChange={(e) => this.setPassword(e.target.value)} ></input>
                        <br></br><br></br>
                        <Button variant="info" onClick={this.onClickLogin} type="button">
                            login
           </Button>
                        <br></br><br></br>
                        <Link to="/signUp">
                            <Button variant="info" type="button">
                                sign up
               </Button>
                        </Link>
                    </Card>
                </div>
            )
        }
    });
