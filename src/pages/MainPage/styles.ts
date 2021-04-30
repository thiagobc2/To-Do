import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
`;

export const Line = styled.hr`
  margin-top: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

export const Title = styled.h1`
  color:#444;
  font-size: 18px;
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
  padding:8px 30px;
  border: none;
  border-radius: 40px;
  background: #3744BD;
  cursor: pointer;

  &:hover{
    background: #4657F0;
  }
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

export const ContentTask = styled.div`
  display: flex;
  flex:1;
  padding:20px;
  height:100%;

  ul{
    display: flex;
    flex:1;
    flex-wrap: wrap;
    align-items: flex-start
  }

  ul li{
    display: flex;
    flex: 1;
    min-width:300px;
    padding: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const TextCountTask = styled.h2`
  color: #999;
  margin-left: 10px;
  font-size: 16px;
`;

export const ContentHeader = styled.div`
  display: flex;
  width:100%;
  height:max-content;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #c9c9c9;
  padding-bottom: 10px;
`;

export const ButtonNewTask = styled.button`
  display: flex;
  padding: 5px 15px;
  font-size: 12px;
  border: none;
  border-radius: 30px;
  background: #D7E0F1;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .icon{
    margin-right: 5px;
  }

  &:hover{
    background: #C5D5F1;
  }
`;
