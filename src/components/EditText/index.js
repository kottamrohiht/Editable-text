import {Component} from 'react'

import {
  TxtMainContainer,
  TxtInnerContainer,
  TxtName,
  InputContainer,
  InputEl,
  SaveButton,
  UserInput,
} from './styledComponents'

class EditText extends Component {
  state = {
    txtInput: true,
    userVal: '',
  }

  onChangeInput = event => {
    this.setState({
      userVal: event.target.value,
    })
  }

  onClickSave = () => {
    this.setState(prevState => ({
      txtInput: !prevState.txtInput,
    }))
  }

  onClickEdit = () => {
    this.setState(prevState => ({
      txtInput: !prevState.txtInput,
    }))
  }

  render() {
    const {txtInput, userVal} = this.state
    return (
      <TxtMainContainer>
        <TxtInnerContainer>
          <TxtName> Editable Text Input </TxtName>
          {txtInput ? (
            <InputContainer>
              <InputEl
                id="text input"
                type="text"
                value={userVal}
                onChange={this.onChangeInput}
              />
              <SaveButton onClick={this.onClickSave} type="button">
                {' '}
                Save{' '}
              </SaveButton>
            </InputContainer>
          ) : (
            <InputContainer>
              <UserInput> {userVal} </UserInput>
              <SaveButton onClick={this.onClickEdit} type="button">
                {' '}
                Edit{' '}
              </SaveButton>
            </InputContainer>
          )}
        </TxtInnerContainer>
      </TxtMainContainer>
    )
  }
}

export default EditText
