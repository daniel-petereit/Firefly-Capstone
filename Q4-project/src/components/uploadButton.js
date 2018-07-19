
import React from 'react'
import { Input, Button, Modal } from 'react-materialize'
import axios from 'axios'

class UploadButton extends React.Component {
  constructor(props){
    super(props)
  }

  uploadImage(history, event) {
    event.preventDefault();
    let file = event.target.pic.files[0];
    let formData = new FormData();
    formData.append('pic', file)
    axios.post('http://localhost:8080/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      let imgURL = response.data.replace(' ', '+')
      let newRoute = '/uploadForm/' + imgURL
      history.push(newRoute)
    })
    .catch(console.error)
  }

  render() {
    return (

        <div>
          <div className="upload-button">
            <form onSubmit={(e) => {this.uploadImage(this.props.history, e)}}>
              <Input type='file' name='pic' accept='image/*'></Input>
              <Button className='uploading' type='submit'>Upload</Button>
            </form>
          </div>
        </div>


    )
  }


}


export default UploadButton
