import React from "react";
import styled from "styled-components"


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  
`

const MessageContainer = styled.div`
  border: 1px solid;
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  justify-content: flex-end;
`

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 1rem;
`

const MessageFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  gap: 1.5rem;
`

const UsernameBold = styled.p`
  font-weight: bold;
`


export class MessageDisplay extends React.Component {
    state={
        valueUsername: '',
        valueMessage: '',
        messageArray: [],
    }

    onChangeUsername = (event) => {
        event.preventDefault();

        this.setState({
            valueUsername: event.target.value
        })
        console.log("event target value", event.target.value)
    }

    onChangeMessage = (event) => {
        event.preventDefault();

        this.setState({
            valueMessage: event.target.value
        })
        console.log("event target value", event.target.value)
    }
 

    onClickButton = (event) => {
        event.preventDefault();

        console.log("Button Click")

        let newMessage ={
          username: this.state.valueUsername,
          message: this.state.valueMessage
        }

        this.setState({
          messageArray: [...this.state.messageArray, newMessage],
          valueUsername: '',
          valueMessage: '',
        })
    }

    onSubmitForm = (event) => {
      event.preventDefault();
    }

    onDoubleClickUsername = (ref) => {
     
      let filterMessageArray = this.state.messageArray.filter(object => {

        if (object.message === ref) {
          return (false)
        } else {
          return (true)
        }
      })

      this.setState({
        messageArray: filterMessageArray
      })
    }
   
      
    render () {
        
        let messageArrayPrint = this.state.messageArray.map(object => {
          return(
            <MessageFlex>
              <UsernameBold onDoubleClick={evt => this.onDoubleClickUsername(object.message)} key={object.username}>{object.username}:</UsernameBold>
              <p onDoubleClick={evt => this.onDoubleClickUsername(object.message)} key={object.message}>{object.message}</p>
            </MessageFlex>
          )
        })        


      return (
        <MainContainer>
            <MessageContainer>
              {messageArrayPrint}
              <FormContainer onSubmit={this.onSubmitForm}>
                <input placeholder="Username" value={this.state.valueUsername} onChange={this.onChangeUsername} />
                <input placeholder="Message" value={this.state.valueMessage} onChange={this.onChangeMessage}/>
                <button type="submit" onClick={this.onClickButton}>Submit</button>
              </FormContainer>
            </MessageContainer>
        </MainContainer>
      );
    }
}
