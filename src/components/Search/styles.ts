import styled from 'styled-components'

export const SearchContainer = styled.form`
   display: flex;
   padding:0px;
   border-radius: 32px;
   flex-direction: row;
   align-content:center;
   height:50px;
   width:100%;
   gap:30px;
   justify-content:center;
  
  
`
export const SearchBox= styled.input`
  width: 300px;
  font-family: sans-serif;
  font-weight: 600;
  background:#e0e0e0;
  color:#616161;
  padding: 20px;
  margin-right:0px;
  border-radius:6px;
  &:focus
  {
    background: #9e9e9e;
    border: 1px solid salmon;
  }
 
`

export const SearchButton= styled.button`
 
  background: #52b202;
  font-weight:900;
  margin:0px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  &:hover
  { cursor:pointer;
    background:#76ff03;
  }
  border-radius:6px;
`