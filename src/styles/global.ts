import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html {
  font-size: 62.5%;
  }
  body {
  background-color: #E6EAF1;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto','Arial', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    color: black;
  }
  p {
    margin: 0;
  }
  hr{
    border:none;
    border-bottom:1px solid #d9d9d9;
  }
  .bold{
    font-weight: bold;
  }
  a{
    cursor:pointer;
  }


  /* MARGIN */
  .m5{
    margin: 5px;
  }
  .m10{
    margin: 10px;
  }
  .m15{
    margin: 15px;
  }
  .m20{
    margin: 20px;
  }
  .m25{
    margin: 25px;
  }
  .m30{
    margin: 30px;
  }
  .m35{
    margin: 35px;
  }
  .m40{
    margin: 40px;
  }
  .m45{
    margin: 45px;
  }
  .m50{
    margin: 50px;
  }
  .m55{
    margin: 55px;
  }
  .m60{
    margin: 60px;
  }

  /* top */
  .mT5{
    margin-top: 5px;
  }
  .mT10{
    margin-top: 10px;
  }
  .mT15{
    margin-top: 15px;
  }
  .mT20{
    margin-top: 20px;
  }
  .mT25{
    margin-top: 25px;
  }
  .mT30{
    margin-top: 30px;
  }
  .mT35{
    margin-top: 35px;
  }
  .mT40{
    margin-top: 40px;
  }
  .mT45{
    margin-top: 45px;
  }
  .mT50{
    margin-top: 50px;
  }
  .mT55{
    margin-top: 55px;
  }
  .mT60{
    margin-top: 60px;
  }

  /* right */
  .mR5{
    margin-right: 5px;
  }
  .mR10{
    margin-right: 10px;
  }
  .mR15{
    margin-right: 15px;
  }
  .mR20{
    margin-right: 20px;
  }
  .mR25{
    margin-right: 25px;
  }
  .mR30{
    margin-right: 30px;
  }
  .mR35{
    margin-right: 35px;
  }
  .mR40{
    margin-right: 40px;
  }
  .mR45{
    margin-right: 45px;
  }
  .mR50{
    margin-right: 50px;
  }
  .mR55{
    margin-right: 55px;
  }
  .mR60{
    margin-right: 60px;
  }

  /* bottom */
  .mB5{
    margin-bottom: 5px;
  }
  .mB10{
    margin-bottom: 10px;
  }
  .mB15{
    margin-bottom: 15px;
  }
  .mB20{
    margin-bottom: 20px;
  }
  .mB25{
    margin-bottom: 25px;
  }
  .mB30{
    margin-bottom: 30px;
  }
  .mB35{
    margin-bottom: 35px;
  }
  .mB40{
    margin-bottom: 40px;
  }
  .mB45{
    margin-bottom: 45px;
  }
  .mB50{
    margin-bottom: 50px;
  }
  .mB55{
    margin-bottom: 55px;
  }
  .mB60{
    margin-bottom: 60px;
  }

  /* left */
  .mL5{
    margin-left: 5px;
  }
  .mL10{
    margin-left: 10px;
  }
  .mL15{
    margin-left: 15px;
  }
  .mL20{
    margin-left: 20px;
  }
  .mL25{
    margin-left: 25px;
  }
  .mL30{
    margin-left: 30px;
  }
  .mL35{
    margin-left: 35px;
  }
  .mL40{
    margin-left: 40px;
  }
  .mL45{
    margin-left: 45px;
  }
  .mL50{
    margin-left: 50px;
  }
  .mL55{
    margin-left: 55px;
  }
  .mL60{
    margin-left: 60px;
  }


  /* PADDING */
  .p5{
    padding: 5px;
  }
  .p10{
    padding: 10px;
  }
  .p15{
    padding: 15px;
  }
  .p20{
    padding: 20px;
  }
  .p25{
    padding: 25px;
  }
  .p30{
    padding: 30px;
  }
  .p35{
    padding: 35px;
  }
  .p40{
    padding: 40px;
  }
  .p45{
    padding: 45px;
  }
  .p50{
    padding: 50px;
  }
  .p55{
    padding: 55px;
  }
  .p60{
    padding: 60px;
  }

  /* top */
  .pT5{
    padding-top: 5px;
  }
  .pT10{
    padding-top: 10px;
  }
  .pT15{
    padding-top: 15px;
  }
  .pT20{
    padding-top: 20px;
  }
  .pT25{
    padding-top: 25px;
  }
  .pT30{
    padding-top: 30px;
  }
  .pT35{
    padding-top: 35px;
  }
  .pT40{
    padding-top: 40px;
  }
  .pT45{
    padding-top: 45px;
  }
  .pT50{
    padding-top: 50px;
  }
  .pT55{
    padding-top: 55px;
  }
  .pT60{
    padding-top: 60px;
  }

  /* right */
  .pR5{
    padding-right: 5px;
  }
  .pR10{
    padding-right: 10px;
  }
  .pR15{
    padding-right: 15px;
  }
  .pR20{
    padding-right: 20px;
  }
  .pR25{
    padding-right: 25px;
  }
  .pR30{
    padding-right: 30px;
  }
  .pR35{
    padding-right: 35px;
  }
  .pR40{
    padding-right: 40px;
  }
  .pR45{
    padding-right: 45px;
  }
  .pR50{
    padding-right: 50px;
  }
  .pR55{
    padding-right: 55px;
  }
  .pR60{
    padding-right: 60px;
  }

  /* bottom */
  .pB5{
    padding-bottom: 5px;
  }
  .pB10{
    padding-bottom: 10px;
  }
  .pB15{
    padding-bottom: 15px;
  }
  .pB20{
    padding-bottom: 20px;
  }
  .pB25{
    padding-bottom: 25px;
  }
  .pB30{
    padding-bottom: 30px;
  }
  .pB35{
    padding-bottom: 35px;
  }
  .pB40{
    padding-bottom: 40px;
  }
  .pB45{
    padding-bottom: 45px;
  }
  .pB50{
    padding-bottom: 50px;
  }
  .pB55{
    padding-bottom: 55px;
  }
  .pB60{
    padding-bottom: 60px;
  }

  /* left */
  .pL5{
    padding-left: 5px;
  }
  .pL10{
    padding-left: 10px;
  }
  .pL15{
    padding-left: 15px;
  }
  .pL20{
    padding-left: 20px;
  }
  .pL25{
    padding-left: 25px;
  }
  .pL30{
    padding-left: 30px;
  }
  .pL35{
    padding-left: 35px;
  }
  .pL40{
    padding-left: 40px;
  }
  .pL45{
    padding-left: 45px;
  }
  .pL50{
    padding-left: 50px;
  }
  .pL55{
    padding-left: 55px;
  }
  .pL60{
    padding-left: 60px;
  }
`;

// GLOBAL STYLE

// ROWS
export const RowTopLeft = styled.div`
  display: flex;
  width:100%;
  height:max-content;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const RowTopRight = styled.div`
  display: flex;
  width:100%;
  height:max-content;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const RowTopCenter = styled.div`
  display: flex;
  width:100%;
  height:max-content;
  align-items: flex-start;
  justify-content: center;
`;

export const RowTopBetween = styled.div`
  display: flex;
  width:100%;
  height:max-content;
  align-items: flex-start;
  justify-content: space-between;
`;

export const RowBottomLeft = styled.div`
  display: flex;
  width:100%;
  height:max-content;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const RowBottomRight = styled.div`
  display: flex;
  width:100%;
  height:max-content;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const RowBottomCenter = styled.div`
  display: flex;
  width:100%;
  height:max-content;
  align-items: flex-end;
  justify-content: center;
`;

export const RowBottomBetween = styled.div`
  display: flex;
  width:100%;
  height:max-content;
  align-items: flex-end;
  justify-content: space-between;
`;
export const RowCenterLeft = styled.div`
  display: flex;
  width:100%;
  height:max-content;
  align-items: center;
  justify-content: flex-start;
`;
export const RowCenterRight = styled.div`
  display: flex;
  width:100%;
  height:max-content;
  align-items: center;
  justify-content: flex-end;
`;

export const RowCenterCenter = styled.div`
  display: flex;
  width:100%;
  height:max-content;
  align-items: center;
  justify-content: center;
`;

export const RowCenterBetween = styled.div`
  display:flex;
  width:100%;
  height:max-content;
  align-items: center;
  justify-content: space-between;
`;

// COLUMNS
export const ColumnLeftTop = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ColumnLeftCenter = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ColumnLeftBottom = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
`;

export const ColumnLeftBetween = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-content: flex-start;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #333;
`;

export const ColumnCenterTop = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ColumnCenterCenter = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ColumnCenterBottom = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;
export const ColumnCenterBetween = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const ColumnRightTop = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ColumnRightCenter = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

export const ColumnRightBottom = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
`;

export const ColumnRightBetween = styled.div`
  display: flex;
  width:100%;
  height:100%;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
`;

export const ContentModal = styled.div`
display: flex;
position: fixed;
top:0;
bottom:0;
left:0;
right:0;
z-index: 10;
background-color: rgba(0,0,0,.9);
align-items: center;
justify-content: center;
`;

export const BodyModal = styled.div`
  display:flex;
  width: 50%;
  height: max-content;
  padding: 20px;
  border-radius:10px;
  flex-direction: column;
  background:#fff;
`;