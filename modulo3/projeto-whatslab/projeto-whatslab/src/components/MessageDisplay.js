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
  justify-content: flex-end;
  background-color: #E5DDD5;
`

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 1rem;
  margin: 1rem;
`

const MessageFlex = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px ;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  margin-left: 10%;
  background-color: white;

`

const UsernameBold = styled.p`
  font-weight: bold;
  line-height: 0;

`

const EuMessageFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
`

const SelfMessage = styled.p`
  border: 1px ;
  padding: 1rem;
  border-radius: 5px;
  background-color: #DBF8C6;

`

const UserMessage = styled.p`
  line-height: 0;
`

const InputForm = styled.input`
  border-radius: 5px;
  border: 1px ;
`

const SubmitButton = styled.button`
  border-radius: 5px;
  border: 1px;
  padding: 0.5rem;
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
          if (object.username === "eu") {
            return(
              <EuMessageFlex>
                <SelfMessage onDoubleClick={evt => this.onDoubleClickUsername(object.message)} key={object.message}>{object.message}</SelfMessage>
              </EuMessageFlex>          
            )
          } else {
            return(
              <MessageFlex>
                <UsernameBold onDoubleClick={evt => this.onDoubleClickUsername(object.message)} key={object.username}>{object.username}</UsernameBold>
                <UserMessage onDoubleClick={evt => this.onDoubleClickUsername(object.message)} key={object.message}>{object.message}</UserMessage>
              </MessageFlex>
            )
          }

        })        


      return (
        <MainContainer>
            <MessageContainer>
              {messageArrayPrint}
              <FormContainer onSubmit={this.onSubmitForm}>
                <InputForm placeholder="Username" value={this.state.valueUsername} onChange={this.onChangeUsername} />
                <InputForm placeholder="Message" value={this.state.valueMessage} onChange={this.onChangeMessage}/>
                <SubmitButton type="submit" onClick={this.onClickButton}>Submit</SubmitButton>
              </FormContainer>
            </MessageContainer>
        </MainContainer>
      );
    }
}
