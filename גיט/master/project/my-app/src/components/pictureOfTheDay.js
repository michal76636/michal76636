import React from 'react';
import { Button, Card } from 'react-bootstrap';
//import User from '../mongo/models.js/index.js'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { createImage } from './service'
import { imgAction } from './redux/actions/imgAction'

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        img: state.userReducer.images,
    };
}
const mapDispatchToProps = (dispatch) => ({
    setImg: (url) => dispatch(imgAction.setImgName(url)),
    setDate: (date) => dispatch(imgAction.setDate(date)),
    setTitle: (title) => dispatch(imgAction.setTitle(title)),
    addImage: (image) => dispatch(imgAction.addImage(image)),
})
export default connect(mapStateToProps, mapDispatchToProps)(
    class PictureOfThaDay extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                url: '',
                date: '',
                title: ' ',
            }
        }
        componentDidMount() {
            fetch('https://api.nasa.gov/planetary/apod?api_key=BqWaYMtpN8beM1jx004uFGXayz3Z9CW3xF4viwnx')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        url: data.url,
                        date: data.date,
                        title: data.title,
                    });
                })
                .catch((err) => {
                    console.log('error:' + err);
                });
        }

        newImage = async () => {
            const image = await createImage({ url: this.state.url, date: this.state.date, title: this.state.title })
            this.props.addImage(image);
        }


        render() {
            return (
                <>
                    <Card body style={{ margin: "auto", width: "50%", border: "3px solid green", padding: "10px", height: '450px' }}>
                        <br></br><br></br>
                        <Card.Header as="h1" style={{ color: "rgb(115, 131, 115)" }}>The picture of the day</Card.Header>
                        <br></br>

                        <img style={{ width: 100, height: 100 }} src={this.state.url} />
                        <Button variant="outline-success" onClick={this.newImage} type="button">
                            save
    </Button> <br></br>

                        <Link to="/DisplayImage">
                            <Button variant="info" type="button">
                                my collection pictures
     </Button>
                        </Link>
                    </Card>

                </>

            );
        }
    }
)
// export default PictureOfThaDay;
