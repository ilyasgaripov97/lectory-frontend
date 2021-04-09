import '../ImageUploader/ImageUploader.css'


import React, { Component } from 'react'

export default class ImageUploader extends Component {

  uploadHandler(event) {
    const data = new FormData();
    data.append('preview_image', event.target.files[0])
    console.log(data);

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <input type="file" name="photo" onChange={this.uploadHandler}/>
        <input type="submit" value="Send"/>
      </div>
    )
  }
}
