import styled from 'styled-components'

export const TxtMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5d0fe;
`

export const TxtInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 200px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`

export const TxtName = styled.h1`
  font-family: 'Roboto';
  color: black;
  font-size: 25px;
  text-align: center;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const InputEl = styled.input`
  border: 1px;
  padding: 6px;
  font-family: 'Roboto';
  color: grey;
  font-size: 20px;
  border: 1px solid;
  margin-right: 10px;
  border-radius: 5px;
`

export const SaveButton = styled.button`
  font-family: 'Roboto';
  color: white;
  font-size: 18px;
  padding: 10px;
  background-color: #d946ef;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
`

export const UserInput = styled.p`
  font-family: 'Roboto';
  color: black;
  font-size: 20px;
  width: 50%;
`
