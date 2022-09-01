import styled from 'styled-components'

export const AlertContainer=styled.div`
 width:500px;
 align-self:center;
 margin-top:50px;
`
export const DetailsContainer=styled.div`
display: flex;
flex-direction:column;
width:100%;
background: #cfd8dc;
height:100%;
`
export const BookInfoContainer= styled.div`
  display: flex;
  height:100%;
  flex-direction:row;
  width:auto;
  padding:10px;
  background: #cfd8dc;
  justify-content:center;
  align-items:center;
  gap:30px;
  align-items:center;
`
export const Thumbnail = styled.div<{ getUrl: string }>`
  position: relative;
  width:30%;
  height:55%;
  background-image: url(${(props) => props.getUrl});
  background-position: 50% 50%;
  background-size: 100%;
  background-repeat:no-repeat;
  cursor:pointer;
  `

  export const Details=styled.div`
      display:flex;
      flex-direction:column;
      width:60%;
      background:#80cbc4;
      padding:20px;
      height:60%;
      box-sizing:content-box;
      box-shadow: 0 6.7px 5.3px rgba(90, 30, 10, 0.03),0 22.3px 17.9px rgba(90, 30, 10, 0.05), 0 10px 8px rgba(90, 30, 10, 0.07);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      h5{
          color:#fbfffc;
      }
  `

  export const Description = styled.p`
     background: #90caf9;
     display:flex;
     flex-wrap:wrap;
     height:60%;
     width:80%;
     padding:20px;
     overflow-x:  hidden;
     overflow-y: auto;
     box-shadow: 0px  6.7px 5.3px rgba(90, 30, 10, 0.03),0 22.3px 17.9px rgba(90, 30, 10, 0.05), 0 10px 8px rgba(90, 30, 10, 0.07);
     
     box-sizing:content-box;
     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  `

  export const BackButton = styled.button`
    background:#616161;
    height:40px;
    width:100px;
    align-self:center;
    &:hover{
      background:#9e9e9e,
    };
  `