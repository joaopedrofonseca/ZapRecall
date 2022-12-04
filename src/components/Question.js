import React, { useState } from "react"
import styled from "styled-components"
import play from "./images/seta_play.png"
import flip from "./images/seta_virar.png"
import error from "./images/erro.png"
import almost from "./images/quase.png"
import success from "./images/certo.png"

export default function Question({cards}) {
  const [selected, setSelected] = useState([])
  const [showAnswer, setShowAnswer] = useState([])
  const [noRemember, setNoRemember] = useState([])
  const [almostRemember, setAlmostRemember] = useState([])
  const [remembered, setRemembered] = useState([])
  const [closed, setClosed] = useState([])

  const totalQuestions = cards.length

  function clickCard(c) {
    if (!selected.includes(c)) {
      setSelected([...selected, c])
    } else {
      setShowAnswer([...showAnswer, c])
    }
  }
  function noRememberButton(c) {
    setNoRemember([...noRemember, c])
    closeQuestion(c)
  }
  function almostRememberButton(c){
    setAlmostRemember([...almostRemember, c])
    closeQuestion(c)
  }
  function rememberedButton(c){
    setRemembered([...remembered, c])
    closeQuestion(c)
  }
  function closeQuestion(c) {
    setClosed([...closed, c])
  }
  return (
    <>
      {cards.map((card, i) =>
        <StyleQuestion data-test="flashcard" selected={selected} closed={closed} card={card} noRemember={noRemember} almostRemember={almostRemember} remembered={remembered}>
          <p data-test="flashcard-text">{(!selected.includes(card) || closed.includes(card)) && `Pergunta ${i + 1}`}
            {(selected.includes(card) && !showAnswer.includes(card) && !closed.includes(card)) && card.question}
            {(selected.includes(card) && showAnswer.includes(card) && !closed.includes(card)) && card.answer}
          </p>
          <div className="buttons">
            {(selected.includes(card) && showAnswer.includes(card) && !closed.includes(card)) && <StyleButton data-test="no-btn"color='#FF3030' onClick={() => noRememberButton(card)}>Não lembrei</StyleButton>}
            {(selected.includes(card) && showAnswer.includes(card) && !closed.includes(card)) && <StyleButton data-test="partial-btn" color='#FF922E' onClick={() => almostRememberButton(card)}>Quase não lembrei</StyleButton>}
            {(selected.includes(card) && showAnswer.includes(card) && !closed.includes(card)) && <StyleButton data-test="zap-btn" color='#2FBE34' onClick={() => rememberedButton(card)}>Zap!</StyleButton>}
          </div>
          {!(selected.includes(card) && showAnswer.includes(card) || closed.includes(card)) && <img data-test="play-btn" src={(!selected.includes(card) || closed.includes(card)) ? play : flip} onClick={() => clickCard(card)} />}
          <img data-test="no-icon" src={(closed.includes(card) && noRemember.includes(card)) && error}/>
          <img data-test="partial-icon" src={(closed.includes(card) && almostRemember.includes(card)) && almost}/>
          <img data-test="zap-icon" src={(closed.includes(card) && remembered.includes(card)) && success}/>
        </StyleQuestion>)}
        <StyleFooter data-test="footer">
            {closed.length}/{totalQuestions} CONCLUÍDOS
        </StyleFooter>

    </>
  )
}
const StyleQuestion = styled.div`
  width: 300px;
  height: ${props => (!props.selected.includes(props.card) || props.closed.includes(props.card)) && '35px'};
  min-height: ${props => (props.selected.includes(props.card) && !props.closed.includes(props.card)) && '100px'};
  background-color: ${props => (!props.selected.includes(props.card) || props.closed.includes(props.card)) ? '#FFFFFF' : '#FFFFD4'};
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-direction: ${props => (props.selected.includes(props.card) && !props.closed.includes(props.card)) && 'column'};
  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: ${props => (props.selected.includes(props.card) && !props.closed.includes(props.card)) ? '400' : '700'};
    font-size: ${props => (props.selected.includes(props.card) && !props.closed.includes(props.card)) ? '18px' : '16px'};
    line-height: ${props => (props.selected.includes(props.card) && !props.closed.includes(props.card)) ? '22px' : '19px'};
    color: #333333;
    color: ${props => (props.noRemember.includes(props.card)) && '#FF3030'};
    color: ${props => (props.almostRemember.includes(props.card)) && '#FF922E'};
    color: ${props => (props.remembered.includes(props.card)) && '#2FBE34'};
    text-decoration: ${props => props.closed.includes(props.card) && 'line-through'};
  }
  img{
    cursor: pointer;
    position: absolute;
    bottom: ${props => (props.selected.includes(props.card) && !props.closed.includes(props.card) ? '10px' : 'center')};
    right: 10px;
  }
  div{
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
  text-align: center;
  justify-content: center;
  margin-left: 7px;
  background-color: ${props => props.color};
`
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