import React, { Component } from 'react'
import axios from 'axios'

class IndexList extends Component {
    constructor(props) {
        super(props)
        this.loadApi = this.loadApi.bind(this);
        this.postApi = this.postApi.bind(this);
        this.url = 'https://jsonplaceholder.typicode.com/posts'
        this.state = {
            tasks: [],
            title: ''
            
        }

    }

    loadApi() {
        axios.get(this.url)
            .then(res => {
                this.setState({
                    tasks: res.data,
                    userId: 102
                })
            })
    }

    postApi(e) {
        e.preventDefault()
        const { title } = this.state
        const data = { title }
        axios.post(this.url, data, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => {
                this.setState({ tasks: [...this.state.tasks, res.data] });
                console.log(this.state.tasks)
            })
 }

    editTask(event, id) {
        event.preventDefault()
        axios.put(`${this.url}/${id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
    })
        
    }
    deleteTask(event, id) {
        event.preventDefault()
        axios.delete(`${this.url}/${id}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => {
          console.log(res);
          console.log(res.data);
    })
}



    componentDidMount() {
        this.loadApi()
    }
    




    render() {
        const { tasks } = this.state
        return (

            <div>


                <h1>Tarefas</h1>
                <form >
                    <label>
                        Person Name:
                     <input type="text" name="title" onChange={(e) => this.setState({ title: e.target.value })} />
                    </label>
                    <button onClick={(e) => this.postApi(e)}>Add</button>
                </form>

                <ul>
                    {
                        tasks.map(e => {
                            return (
                                <div key={e.id}>
                                    <li >{e.title}</li>
                                    <button onClick={(event)=>this.editTask(event, e.id)}>editar</button>
                                    <button onClick={(event)=>this.deleteTask(event, e.id)}>excluir</button>
                                </div>
                            )
                        })
                    }

                </ul>
            </div>
        );

    }
}
export default IndexList;