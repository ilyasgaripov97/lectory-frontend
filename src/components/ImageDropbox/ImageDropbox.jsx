import './ImageDropbox.css'


const ImageDropbox = ({ onDrop }) => {

  const dropHandler = (e) => {
    console.log('file was dropped');
    e.preventDefault();

    e.dataTransfer.setData("text", e.target.id)
 
  }

  return (
    <input className="image-dropbox">
    </input>
  )
}

export default ImageDropbox
