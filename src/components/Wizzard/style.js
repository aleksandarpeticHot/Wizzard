import styled from "styled-components";

export const Circle = styled.div`
height: ${props => props.active ? '40px' : '30px'};
width: ${props => props.active ? '40px' : '30px'};
opacity: ${props => props.active ? '1' : '0.4'};
background-color: #062A45;
border-radius: 50%;
display: inline-block;
color: white;
text-align: center;
 p {
  margin-top: ${props => props.active ? '10px' : '6px'}; 
 }
`
export const ConnectCircleLine = styled.div`
height: 4px;
background-color: #062A45;
opacity: 0.4;
width: 50px;
`
export const WizzardWrapper = styled.div`
>.content {
  margin: 30px;
}
>.actions {
  height: 75px;
  bottom: 0;
  margin: 15px;
  position: absolute;
  width: calc(100% - 30px);
}
`
export const ActionButtons = styled.button`
width: 75px;
height: 35px;
border: 0;
background: white;
background: #062A45;
color: white;
border-radius: 3px;
margin: 0px 15px;
cursor: pointer;
`