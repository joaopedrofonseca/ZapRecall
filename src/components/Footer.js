import styled from "styled-components";

export default function Footer({totalQuestions, closed}) {
  let done = closed.length
    return (
        <StyleFooter data-test="footer">
            {closed.length}/{totalQuestions} CONCLUÍDOS
        </StyleFooter>
    )
}


const StyleFooter = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  .container-buttons{
    display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
  }
  .container-buttons > button {
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: blue;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;
}
`