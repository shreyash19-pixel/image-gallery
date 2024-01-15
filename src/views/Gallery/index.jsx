import React,{useContext} from 'react'
import { GalleryImg, GalleryWrap, ImageGallery, SelUpload, SelectSect } from '../../styles/Upload'
import AppContext from '../../utils/AppContext'

const Gallery = () => {

  const {setSection,info} = useContext(AppContext)

  const handleSections = (sect) => {
    setSection(sect)
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
      <GalleryWrap>
        {info.map((value) => (
        <GalleryImg src = {value.image}/>
        ))}
      </GalleryWrap>
   </ImageGallery>
  )
}

export default Gallery