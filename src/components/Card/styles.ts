import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: max-content;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 12px #d9d9d9;

  .icon{
    color: #999;
    font-size: 12px;
  }

  .BtnOptions{
    color: #999;
    font-size: 22px;
  }
`;

export const Title = styled.h1`
  color: #555;
  font-size: 16px;
`;

export const ButtonCloseModal = styled.button`
  display:flex;
  color: #444;
  font-weight: bold;
  padding:8px;
  border: none;
  border-radius: 40px;
  background:transparent;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  .icon{
    color: #999;
    font-size: 18px;
  }
`;

export const Line = styled.hr`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

export const Input = styled.input`
  color: #999;
  height: 35px;
  padding: 0 10px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const ButtonModal1 = styled.button`
  color: #444;
  font-size:15px;
  font-weight: bold;
  padding:8px 30px;
  border: none;
  border-radius: 40px;
  background: #d9d9d9;
  cursor: pointer;

  &:hover{
    background: #e9e9e9;
  }
`;

export const ButtonModal2 = styled.button`
  color: #fff;
  font-size:15px;
  font-weight: bold;
  margin-left: 10px;
  padding:8px 30px;
  border: none;
  border-radius: 40px;
  background: #3744BD;
  cursor: pointer;

  &:hover{
    background: #4657F0;
  }
`;

export const TextCountAttachment = styled.h2`
  color: #999;
  font-size: 12px;
`;

export const TextDescription = styled.h2`
  color: #999;
  height: calc(100% - 70px);
  margin-top:12px;
  font-size: 12px;
  overflow: hidden;
`;
export const TextLegend = styled.h2`
  color: #777;
  padding-left: 15px;
  font-size: 14px;
  position: relative;

  &::before {
  content: '';
  position: absolute;
  top: 4px; 
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: #3744BD;
  }
`;

export const ContentBtnOptions = styled.div`
  position: relative;

  &:hover .dropdown-options{
  opacity: 1;
  visibility: visible;
}
`;

export const DropdownOptions = styled.div`
  width:140px;
  border: 1px solid #999;
  border-radius: 4px;
  background: #D7E0F1;
  position: absolute;
  top: 18px;
  right: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 300ms;
`;

export const ButtonDropdownOptions = styled.button`
  color: #444;
  font-size: 14px;
  font-weight: bold;
  width:100%;
  padding:10px;
  border:none;
  border-bottom: 1px solid #999;
  background: transparent;
  cursor:pointer;

  &:hover{
    background: #F4F7FF;
  }

  .icon{
    color: #555;
    font-size: 14px;
    margin-right: 5px;
  }
`;
