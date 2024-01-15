import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 15px;
`

export const ImageGallery = styled.div`
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const SelectSect = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 15px;
`

export const SelUpload = styled.div`
    cursor: pointer;
    padding: 5px;
    border: 1px solid black;
`
export const UploadSec = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const UploadImgWrap = styled.div`
    width: 100%;
    max-width: 290px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const ImageWrap = styled.div`
    width: 100%;
    height: 200px;
    border: 1px solid black;
    cursor: pointer;
`

export const ImagePreview = styled.img`
    width: 100%;
    height: 200px;
`

export const HiddenInput = styled.input`
    display: none;
`

export const NameInputWrap = styled.div`

`
export const NameInput = styled.input`
    width: 100%;
    padding: 10px ;
`
export const AddImgBtn = styled.div`
    background-color: blue;
    color: white;
    padding: 12px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
`
export const GalleryWrap = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(164px,1fr));
    border : 1px solid black;
    padding: 15px;
`

export const GalleryImg = styled.img`
    width: 100%;
`

export const Icons = styled.div`
    font-size: 115px;
    font-weight: 400;
    color: grey;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`