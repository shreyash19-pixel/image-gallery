import React, {useContext, useEffect, useRef, useState} from 'react'
import AppContext from '../../utils/AppContext'
import { AddImgBtn, HiddenInput, Icons, ImageGallery, ImagePreview, ImageWrap, NameInput, NameInputWrap, SelUpload, SelectSect, Switch, UploadImgWrap, UploadSec } from '../../styles/Upload'
import { FaPlus } from "react-icons/fa6";

const Upload = () => {

  const {setSection,info,setInfo} = useContext(AppContext)
  const imageRef = useRef(null)
  const inputRef = useRef(null)
  const [image, setImage] = useState(null)
  const [name, setName] = useState("")


  useEffect(() => {
     localStorage.setItem("info",JSON.stringify(info))
  },[info])
 

  const handleSections = (sect) => {
    setSection(sect)
  }

  const handleImageClick = () =>{
      imageRef.current.click()
  }

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            setImage(event.target.result);
        };
        reader.readAsDataURL(file);
    }
  }

  const handleInfo = () => {

    if(image && name)
    {
      const imgInfo = {
        image : image,
        name : name
      }

      setInfo([...info, imgInfo])
      setImage(null)
      setName("")
      inputRef.current.value = ''
    }
    else
    {
      alert("Please fill all the fields")
    }

  }

  return (
   <ImageGallery>
      <SelectSect>
        <SelUpload onClick = {() => handleSections('upload')}> 
          upload
        </SelUpload>
        <SelUpload onClick = {() => handleSections('gallery')}>
          gallery
        </SelUpload>
      </SelectSect>
      <UploadSec>
        <UploadImgWrap>
          <ImageWrap onClick={handleImageClick}>
            {image ? (
            <ImagePreview src = {image}/>
            ) : 
            (<Icons>
              <FaPlus />
            </Icons>) }
            <HiddenInput ref = {imageRef} type = "file" accept = "image/*" onChange = {handleImage}/>
          </ImageWrap>
          <NameInputWrap>
            <NameInput ref = {inputRef} placeholder='Image name...' onChange = {(e) => setName(e.target.value)}/>
          </NameInputWrap>
          <AddImgBtn onClick = {handleInfo}>
            Add Image
          </AddImgBtn>
        </UploadImgWrap>
      </UploadSec>
   </ImageGallery>
  )
}

export default Upload