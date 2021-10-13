import { FaRegEye } from 'react-icons/fa';
import styled from 'styled-components';

export const InputWrapper = styled.div`
 label{
   margin-bottom: 5px;
   font-weight: 700;
 }
 input {
   width: calc(100% - 12px);
   height: 35px;
   border: 2px solid #D7DDE0;
   border-radius: 4px;
   padding: 2px 5px;
   &:focus {
    outline: none;
    border-bottom-color: #F98443;
    }
 }
 
`
export const InputContainer = styled.div`
position: relative;
width: ${props => props.fluidwidth ? '100%' : '275px'};
cursor: pointer;
`
export const StyledEyeIcon = styled(FaRegEye)`
position: absolute;
right: 7px;
top: 9px;
cursor: pointer;
`