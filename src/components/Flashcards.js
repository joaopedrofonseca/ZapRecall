import play from "./images/seta_play.png"
import flip from "./images/seta_virar.png"
import error from "./images/erro.png"
import almost from "./images/quase.png"
import success from "./images/certo.png"
import { useState } from "react"
import styled from "styled-components"

export default function Flashcards({ question, answer, index, count, setCount }) {
  const [flipped, setFlipped] = useState(0)
  const [remember, setRemember] = useState(play)
  const [clicked, setClicked] = useState(false)
  const [situation, setSituation] = useState("")

  function statsChoice(ans) {
    setRemember(ans)
    setFlipped(0)
    setCount(count + 1)
  }

  return (
    <div>
      {flipped === 0 && <CloseQuestion clicked={clicked} situation={situation}>
        <p>Pergunta {index + 1}</p>
        <img src={remember} onClick={!clicked ? () => { setFlipped(1); setClicked(true); setRemember(flip) } : null} />
      </CloseQuestion>}
      {flipped === 1 && <OpenQuestion>
        <p>{question}</p>
        <img src={remember} onClick={() => setFlipped(2)} />
      </OpenQuestion>}
      {flipped === 2 && <OpenQuestion>
        <p>{answer}</p>
        <div className="buttons">
        <StyleButton onClick={() => {statsChoice(error); setSituation('forget')}} color='#FF3030'>
          Não lembrei
        </StyleButton>
        <StyleButton onClick={() => {statsChoice(almost); setSituation('almost')}} color='#FF922E'>
          Quase lembrei
        </StyleButton>
        <StyleButton onClick={() => {statsChoice(success); setSituation('success')}} color='#2FBE34'>
          Zap!
        </StyleButton>
        </div>
      </OpenQuestion>}

    </div>
  )
}

const OpenQuestion = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
    cursor:pointer;
    position: absolute;
  bottom: 10px;
  right: 10px;
  }
  p{
    font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  }
  .buttons{
    display: flex;
    justify-content: space-between;
  }

`
const CloseQuestion = styled.div`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
    font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration:${props => props.clicked && 'line-through'};
  color: #333333;
  color: ${props => (props.situation === 'forget') && '#FF3030'};
  color: ${props => (props.situation === 'almost') && '#FF922E'};
  color: ${props => (props.situation === 'success') && '#2FBE34'};
  }
  .buttons{
    display: flex;
  }
`
const StyleButton = styled.div`
  font-family: 'Recursive';
  cursor:pointer;
  width: 85px;
  height: 37px;
  border-radius: 5px;
  color: #FFFFFF;
  align-items: center;
  display: flex;
  text-align: center;
  padding-bottom: 2px;
  justify-content: center;
  margin-left: 1px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  background-color: ${props => props.color};
`