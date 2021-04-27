import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { getHistoryImg , deleteUserImg} from './service';
import { imgAction } from './redux/actions/imgAction'
import { Card, Button } from 'react-bootstrap';


function mapStateToProps(state) {
  return {
    images: state.userReducer.images,
    user: state.userReducer.user,
    historyImages: state.userReducer.images 
  };
}
const mapDispatchToProps = (dispatch) => ({
  setAllImg: (img) => dispatch(imgAction.setAllImg(img)),
  deleteMyImg: (posts) => dispatch(actions.deleteImg(img)),

})



export default connect(mapStateToProps, mapDispatchToProps)(function History(props) {
  const { images, user, setAllImg,setHistoryImages ,deleteMyImg } = props;

  useEffect(() => {             
    getHistoryImg().then(data => { alert(data );
       setHistoryImages(data)
      
       })
    .catch(err => { console.log(err) });
    }  
, [])
function deleteImg(myimg) {
  deleteUserImg(images.myimg).then(data => {
      deleteMyImg(data)

  }, err => { console.log(err); })
}
  return (
    <>
       <h1 style={{ textAlign: 'center', marginBottom: '5%' }}>History images</h1>
            { images ?
                <div>
                    {images.map(item => (
                        <div key={item.url} className="row d-flex justify-content-center">
                            <div className="col-6 post-div">
                                <div><h5>{item.title}</h5></div>
                                <div> <img style={{ width: 200, height: 200 }}  src={item.url} /></div>
                                <br/>
                            </div>
                        </div>
                 ))}
                 
                <label>press name of image to remove</label>
                <input type="email" value={img} onChange={(e) => deleteImg(e.target.value)} ></input>

                </div>

                
                : ''
            }  

{/* <Button variant="outline-success" onClick={ getHistoryImg(user.password) } type="button">
        kkkkk
    </Button> <br></br> */}
    </>
  )
}
)