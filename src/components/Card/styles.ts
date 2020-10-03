import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: max-content;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 12px #d9d9d9;

  hr{
    margin-top: 10px
  }

  .tittle{
    color: #555;
    font-size: 16px;

  }
  .icon{
    color: #999;
    font-size: 12px;
  }
  .count-attachment{
    color: #999;
    font-size: 12px;
  }
  .description {
    color: #999;
    height: calc(100% - 70px);
    margin-top:12px;
    font-size: 12px;
    overflow: hidden;
  }
  .legend {
    color: #777;
    padding-left: 15px;
    font-size: 14px;
    position: relative;
  }
  .legend::before {
    content: '';
    position: absolute;
    top: 4px; 
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #3744BD;
  }
  .content-btn-options{
    position: relative;
  }
  .content-btn-options:hover .dropdown-options{
    opacity: 1;
    visibility: visible;
  }
  .btn-options{
    display:flex;
    border: none;
    margin: 0;
    padding: 0;
    background: transparent;
    align-items: center;
    cursor: pointer;
    
  }
  .icon-options{
    color: #999;
    font-size: 22px;
  }
  .dropdown-options{
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
  }
  .dropdown-options button:hover{
    background: #F4F7FF;
  }
  .dropdown-options button{
    color: #444;
    font-size: 14px;
    font-weight: bold;
    width:100%;
    padding:10px;
    border:none;
    border-bottom: 1px solid #999;
    background: transparent;
    cursor:pointer;
  }
  .icon-btn-dropdown{
    color: #555;
    font-size: 14px;
    margin-right: 5px;
  }
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
    height: 35px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin-bottom: 10px;
  }

`;
