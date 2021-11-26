import React from "react";
import styled from "styled-components";
import { Todo } from "../components/Todo";


const StyleTodo = styled.li`
    text-decoration: line-through;
`



export class ListaTarefas extends React.Component {
    state = {
        value: "",
        status:"",
        listaDeTarefas:[],
        filter:"",
    }

    handleChange = (event) => { 
        this.setState({
            value: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            listaDeTarefas: [
                ...this.state.listaDeTarefas, 
                {
                    tarefa: this.state.value,
                    status: "Todo"
                }]
        })
        console.log(this.state.listaDeTarefas)
    }

    handleSelect = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    handleDoubleClick = (indexDoubleClicked) => {
        let otherState = this.state.listaDeTarefas.filter((objeto, indexState) => {
            if (indexDoubleClicked === indexState) {
                return(true)
            } else {
                return(false)
            }
        })

        otherState[0].status = "Done"

        let updatedObject = otherState[0]

        let oldList = this.state.listaDeTarefas
        oldList[indexDoubleClicked] = updatedObject

        this.setState({
            listaDeTarefas: oldList
        })
    }

    deleteTodo = (indexClicked) => {
        let deletedList = this.state.listaDeTarefas.filter((object, index) => {
            if (indexClicked === index) {
                return (false)
            } else {
                return(true)
            }
        })

        this.setState({
            listaDeTarefas: deletedList
        })
    }

    editTodo = (indexClicked) => {
        let newValue = ""
        let deletedList = this.state.listaDeTarefas.filter((object, index) => {
            if (indexClicked === index) {
                newValue = object.tarefa
                return (false)
            } else {
                return(true)
            }
        })

        this.setState({
            listaDeTarefas: deletedList,
            value: newValue,

        })
    }

    deleteAll = () => {
        this.setState({
            listaDeTarefas: []
        })
    }

    componentDidMount() {
        let localStorageListaDeTarefas = JSON.parse(localStorage.getItem("tarefas"))

        console.log(localStorageListaDeTarefas)

        if (localStorageListaDeTarefas && localStorageListaDeTarefas.length) {
            this.setState ({
                listaDeTarefas: localStorageListaDeTarefas
            })
        }
    }

    componentDidUpdate() {
        if (this.state.listaDeTarefas !== "") {
            localStorage.setItem("tarefas", JSON.stringify(this.state.listaDeTarefas))
        }
    }

    render() {

        let listaSemFiltro
        let listaTodo
        let listaDeTarefas
        let listaDone
        let listaOrdenada

        if (this.state.listaDeTarefas !== "") {
            // listaSemFiltro = this.state.listaDeTarefas.map((object, index) => {
            //     if (object.status === "Todo") {
            //         return(
            //             <div>
            //                 <li onDoubleClick={evt => this.handleDoubleClick(index)}>{object.tarefa}</li>
            //                 <button>✅</button>
            //                 <button onClick={evt => this.deleteTodo(index)}>🗑</button>
            //                 <button onClick={evt => this.editTodo(index)}>✏️</button>

            //             </div>
            //         )    
            //     } else {
            //         return (
            //             <div>
            //                 <StyleTodo onDoubleClick={evt => this.handleDoubleClick(index)}>{object.tarefa}</StyleTodo>
            //                 <button>✅</button>
            //                 <button onClick={evt => this.deleteTodo(index)}>🗑</button>
            //                 <button onClick={evt => this.deleteTodo(index)}>✏️</button>

            //             </div>
            //         )
            //     }  
            // })
            
            listaSemFiltro = this.state.listaDeTarefas.filter((object) => {
                if (object.status === "Todo") {
                    return (true)
                } else {
                    return (false)
                }
            }).map((object,index) => {
                return(
                    <div>
                        <li onDoubleClick={evt => this.handleDoubleClick(index)}>{object.tarefa}</li>
                        <button>✅</button>
                        <button onClick={evt => this.deleteTodo(index)}>🗑</button>
                        <button onClick={evt => this.deleteTodo(index)}>✏️</button>

                    </div>
                )
            }) 
            listaOrdenada = [...listaSemFiltro]
            listaSemFiltro = this.state.listaDeTarefas.filter((object) => {
                if (object.status === "Done") {
                    return (true)
                } else {
                    return (false)
                }
            }).map((object,index) => {
                return(
                    <div>
                        <StyleTodo onDoubleClick={evt => this.handleDoubleClick(index)}>{object.tarefa}</StyleTodo>
                        <button>✅</button>
                        <button onClick={evt => this.deleteTodo(index)}>🗑</button>
                        <button onClick={evt => this.deleteTodo(index)}>✏️</button>

                    </div>
                )
            })
            
            listaOrdenada = [...listaOrdenada, listaSemFiltro]



            listaTodo = this.state.listaDeTarefas.filter((object) => {
                if (object.status === "Todo") {
                    return (true)
                } else {
                    return (false)
                }
            }).map((object,index) => {
                return(
                    <div>
                        <li onDoubleClick={evt => this.handleDoubleClick(index)}>{object.tarefa}</li>
                        <button>✅</button>
                        <button onClick={evt => this.deleteTodo(index)}>🗑</button>
                        <button onClick={evt => this.deleteTodo(index)}>✏️</button>

                    </div>
                )
            }) 
    
            listaDone = this.state.listaDeTarefas.filter((object) => {
                if (object.status === "Done") {
                    return (true)
                } else {
                    return (false)
                }
            }).map((object,index) => {
                return(
                    <div>
                        <StyleTodo onDoubleClick={evt => this.handleDoubleClick(index)}>{object.tarefa}</StyleTodo>
                        <button>✅</button>
                        <button onClick={evt => this.deleteTodo(index)}>🗑</button>
                        <button onClick={evt => this.deleteTodo(index)}>✏️</button>

                    </div>
                )
            }) 
        }
        




        if (this.state.filter === "Nenhum") { 
            listaDeTarefas = listaOrdenada
        } else if (this.state.filter === "Todo") {
            listaDeTarefas = listaTodo
        } else if(this.state.filter === "Done") {
            listaDeTarefas = listaDone
        } else {
            listaDeTarefas = listaOrdenada
        }


        return(
            <div>
                <h1>Lista de Tarefas</h1>
                <input placeholder="nome da tarefa" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Adicionar</button>
                <p>Filtro</p>
                <select value={this.state.filter} onChange={this.handleSelect}>
                    <option>Nenhum</option>
                    <option>Todo</option>
                    <option>Done</option>
                </select>
                <div>
                    {listaDeTarefas}
                </div>
                <button onClick={this.deleteAll}>Apagar tudo</button>
            </div>
            

        )
    }
}