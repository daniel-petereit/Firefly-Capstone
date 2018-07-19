import React from 'react';
import axios from 'axios'
let getRecentImagesUrl = 'http://localhost:8080/pics/recentUploads'

class HomePageContent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      imageKeys: [],
    }
  }

  componentWillMount() {
    console.log(this)
    axios.get(getRecentImagesUrl)
      .then((response) => {
        this.setState({imageKeys: response.data.keys})
      })
  }

  render(){
    return (

      <div className='outer-div'>
        <div className='inner-div'>
          {
            this.state.imageKeys.reverse().filter(url => url.includes('')).map((key, id) => {
              let link = 'http://localhost:8080/pics/show/' + key
              let tnSrc = 'http://localhost:8080/pics/show/' + 'tn.' + key
              return <a key={id} href={link}><img src={tnSrc} /></a>
            })}
        </div>
      </div>
    )
  }

}


export default HomePageContent
