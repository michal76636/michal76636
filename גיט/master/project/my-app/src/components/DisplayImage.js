import React, { useState } from "react";
import { Card , Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import {createImage} from './service'
import { withRouter} from 'react-router-dom'
import {imgAction} from './redux/actions/imgAction'

import { Link } from 'react-router-dom'
function mapStateToProps(state) {
  return {
      user: state.userReducer.user,
      img: state.userReducer.images,
  };
}
  const mapDispatchToProps = (dispatch) => ({
      setImg: (url) => dispatch(imgAction.setImg(url)),
      setDate: (date) => dispatch(imgAction.setDate(date)),
      setTitle: (title) => dispatch(imgAction.setTitle(title)),
  })
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function DisplayImage(props) {
    
    const [url, setImg] = useState("");
    const [title, setTitle] = useState('')
    const date=new Date();

    function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImg(URL.createObjectURL(img));
      setTitle(url);
    }
   
  };

  function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImg(URL.createObjectURL(img));
      setTitle(url);

    }
   
  };
  
    return (
      <div>
           <Card body style={{ margin: "auto", width: "50%", border: "3px solid green", padding: "10px", height: '450px' }}>                        
            <Card.Header as="h1" style={{ color: "rgb(115, 131, 115)"}}> My collection pictures</Card.Header>
            <Card.Text as="h3" style={{  textAlign: "center", color:"green"}}>Add Image</Card.Text>
            <input type="file" name="myImage" onChange={(event) =>onImageChange(event)} />
           <img style={{ width: 200, height: 200 }} src={url} />
           <Button variant="outline-success" onClick={createImage({url: url, date: date,title: title }) } type="button">
        save
    </Button> <br></br>
    <Link to="/history">
            <Button variant="info" type="button">
            history     </Button>
               </Link>
          </Card>
      </div>
     ) 
  }
))
