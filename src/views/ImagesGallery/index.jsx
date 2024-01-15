import React,{useContext} from 'react'
import Gallery from '../Gallery'
import Upload from '../Upload'
import { Container, Wrapper } from '../../styles/Upload'
import AppContext from '../../utils/AppContext'

const ImagesGallery = () => {
 
  const {section} = useContext(AppContext)
   
  return (
        <Container>
            <Wrapper>
              {section === 'upload' &&  (<Upload/>) }
              {section === 'gallery' && (<Gallery />) }
            </Wrapper>
        </Container>
  )
}

export default ImagesGallery