import React, { Component } from 'react';

class Test extends Component{
    state = {
        title: '',
        body: ''
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => this.setState({ title: data.title, body: data.body }));
    }

    // componentWillMount(){
    //     console.log('Component Will Mount');
    // }

    // componentDidUpdate(){
    //     console.log("Updated");
    // }

    // componentWillReceiveProps(nextProps, nextState){
    //     console.log("componentWillReceiveProps");
    // }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     return {
    //         test: "Some Return"
    //     }
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log("getSnapshotBeforeUpdate");
    // }

    render(){
        const { title, body } = this.state;
        return(
            <div className="">
                <h4 className="text-danger">{title}</h4>
                <h1>{body}</h1>
                
            </div>
           
        );
    }
}

export default Test;