import {Component} from 'react'

import {
  BackGroundContainer,
  Heading,
  InputElement,
  ContentContainer,
  ButtonElement,
  Paragraph,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {
    isSaved: false,
    text: '',
  }

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  onEdit = () => {
    this.setState({isSaved: false})
  }

  onSave = () => {
    this.setState({isSaved: true})
  }

  render() {
    const {isSaved, text} = this.state

    return (
      <BackGroundContainer>
        <Heading>Editable Text Input</Heading>
        <ContentContainer>
          {isSaved ? (
            <>
              <Paragraph>{text}</Paragraph>
              <ButtonElement type="button" onClick={this.onEdit}>
                Edit
              </ButtonElement>
            </>
          ) : (
            <>
              <InputElement
                type="text"
                value={text}
                onChange={this.onChangeInput}
              />
              <ButtonElement type="button" onClick={this.onSave}>
                Save
              </ButtonElement>
            </>
          )}
        </ContentContainer>
      </BackGroundContainer>
    )
  }
}

export default EditableTextInput
