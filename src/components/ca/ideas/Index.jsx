import React from 'react';
import AuthService from '../../../handlers/ca/AuthService';
import FetchApi from '../../../utils/FetchAPI';

import Form from './Form';
import Idea from './Idea';
import "./css/idea.css";

export default class IdeasIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            ideas: []
        }
        this.Auth = new AuthService()
    }
    componentDidMount() {
        const authtoken = this.Auth.getToken()
        FetchApi('GET', '/api/ca/idea', null, authtoken)
            .then(r => {
                console.log(r)
                if (r && r.data && r.data.success && r.data.body) {
                    this.setState({ ideas: r.data.body })
                }
            })
            .catch(e => console.log(e));
    }
    addIdea = idea => {
        const newIdeas = [idea, ...this.state.ideas]
        this.setState({ ideas: newIdeas })
    }
    updateIdea = (index, idea) => {
        if (index !== undefined && idea) {
            this.state.ideas.splice(index, 1, idea)
            this.setState({})
        }
    }
    deleteIdea = index => {
        if (index !== undefined) {
            this.state.ideas.splice(index, 1, {})
            this.setState({})
        }
    }
    render() {
        return (
            <div className="ca-idea-parent">
                <Form addIdea={this.addIdea} />
                {this.state.ideas.map((idea, index) => {
                    const descIndex = this.state.ideas.length - index - 1;
                    return <Idea data={idea} index={index} updateIdea={this.updateIdea} deleteIdea={this.deleteIdea} key={`idea${descIndex}`} />
                })}
            </div >
        );
    }
}
