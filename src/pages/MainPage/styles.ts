import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;


  /* modal */
  .btn-modal1{ 
    color: #444;
    font-size:15px;
    font-weight: bold;
    padding:8px 30px;
    border: none;
    border-radius: 40px;
    background: #d9d9d9;
    cursor: pointer;
  }
  .btn-modal2{ 
    color: #fff;
    font-size:15px;
    font-weight: bold;
    padding:8px 30px;
    border: none;
    border-radius: 40px;
    background: #3744BD;
    cursor: pointer;
  }
  .btn-modal3{ 
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
  }
  .icon-modal-times{
    color: #999;
    font-size: 18px;
  }
  .btn-modal3:hover{
    background: #e9e9e9;
   }
  .hr-modal{
    margin: 10px 0;
  }
  .input-modal{
    color: #999;
    height: 35px;
    padding: 0 10px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin-bottom: 10px;
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
  .content-header{
    border-bottom: 1px solid #c9c9c9;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  .tittle{
    font-size: 18px;
    font-weight: bold;
    white-space: nowrap;
  }
  .count-tasks{
    color: #999;
    margin-left: 10px;
    font-size: 16px;
  }
  .btn-new-task{
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
  }
  .btn-new-task:hover{
    background: #C5D5F1;
  }
  .icon-btn{
    margin-right: 5px;
  }
  

`;
