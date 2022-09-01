import styled from 'styled-components';
export const GalleryContainer = styled.div`
   margin-top:20px;
   display:flex;
   flex-wrap: wrap;
   width:100%;
   background: transparent;
   height: 100%;
   border-radius:10px;
   gap:10px;
   padding:10px;
`
export const AlertContainer=styled.div`
 width:500px;
 align-self:center;
 margin-top:50px;
`
export const Figcaption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  background: #757de8;
  transition: transform 400ms ease-out;
  color:#ffea00;
    h5 {
      letter-spacing: 1px;
      margin-bottom: 2px;
    }
    
  
`;
export const Thumbnail = styled.div<{ getUrl: string }>`
  position: relative;
  width:170px;
  height:280px;
  background-image: url(${(props) => props.getUrl});
  background-position: 50% 50%;
  background-size: 90%;
  background-repeat:no-repeat;
  transition: background 400ms ease;
  box-shadow: 0 6.7px 5.3px rgba(90, 30, 10, 0.03),0 22.3px 17.9px rgba(90, 30, 10, 0.05), 0 10px 8px rgba(90, 30, 10, 0.07);
  overflow: hidden;
  ${Figcaption} {
      bottom: 0;
      transform: translateY(100%);
      height: auto;
      padding: 10px 15px;
    }
  &:hover {

   background-position: 50% 45%;
  // transform: translateY(-5%);
    cursor:pointer;
 //  clip-path: circle(76.2% at 48% 79%);
    ${Figcaption} {
      box-shadow: rgba(0, 0, 0, 0.03);
      transform: translateY(0%);
      width:100%;
    }
  };

    
  
`;