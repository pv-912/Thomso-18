import React from 'react';
import '../zonals.css';

export default class DelhiEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedOptionDrama: '',
            selectedOptionTgt: '',
            check: false,
            tgt: false,
        }
    }
    changeState = () => {
        let events = []
        if (this.state.check && this.state.selectedOptionDrama) {
            events.push(this.state.selectedOptionDrama)
        }
        if (this.state.tgt && this.state.selectedOptionTgt) {
            events.push(this.state.selectedOptionTgt)
        }
        this.props.function(events)
    }
    onSubmit = (e) => {
        e.preventDefault()
        let events = []
        if (this.state.check && this.state.selectedOptionDrama) {
            events.push(this.state.selectedOptionDrama)
        }
        if (this.state.tgt && this.state.selectedOptionTgt) {
            events.push(this.state.selectedOptionTgt)
        }
        this.props.selectedevents(events)
    }
    handleOptionChangeDrama = (changeEvent) => {
        this.setState({
            selectedOptionDrama: changeEvent.target.value
        });
    }
    handleOptionChangeTgt = (changeEvent) => {
        this.setState({
            selectedOptionTgt: changeEvent.target.value
        });
    }
    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }
    render() {
        return (
            <React.Fragment>
                <form className={this.props.var ? "register-zonals-form-events inactive" : "register-zonals-form-events active"} onSubmit={this.onSubmit}>
                        {this.props.errors ? <p className="form-submitted-popup">{this.props.errors}</p> : <p className="form-submitted-popup-hide"> Nothing </p>}
                    <div className={this.props.var ? "register-zonals-form-events-parent inactive" : "register-zonals-form-events-parent"}>
                        <div className="register-zonals-form-events-firstchild">
                            <div className="register-zonals-form-events-drama">
                                <span><input type="checkbox" onClick={() => this.setState({ check: !this.state.check })} name="drama" value="drama" /></span><span>Drama</span>
                            </div>
                            <div className={this.state.check ? "register-zonals-form-events-dramachild" : "register-zonals-form-events-dramachild low-opacity"}>
                                <div>
                                    <span><input onChange={this.handleOptionChangeDrama} type="radio" name="mr_ms_thomso" value="mr_ms_thomso" checked={this.state.selectedOptionDrama === 'mr_ms_thomso'} disabled={!this.state.check} /></span><span>Mr & Miss Thomso</span>
                                </div>
                                <div>
                                    <span><input onChange={this.handleOptionChangeDrama} type="radio" name="natak" value="natak" checked={this.state.selectedOptionDrama === 'natak'} disabled={!this.state.check} /></span><span>Natak</span>
                                </div>
                            </div>
                        </div>
                        <div className="register-zonals-form-events-secondchild">
                            <div className="register-zonals-form-events-tgt">
                                <span><input type="checkbox" onClick={() => this.setState({ tgt: !this.state.tgt })} name="tgt" value="tgt" /></span><span>Tgt</span>
                            </div>
                            <div className={this.state.tgt ? "register-zonals-form-events-tgtchild" : "register-zonals-form-events-tgtchild low-opacity"}>
                                <div>
                                    <span><input onChange={this.handleOptionChangeTgt} type="radio" name="singing" value="singing" checked={this.state.selectedOptionTgt === 'singing'} disabled={!this.state.tgt} /></span><span>Singing</span>
                                </div>
                                <div>
                                    <span><input onChange={this.handleOptionChangeTgt} type="radio" name="dancing" value="dancing" checked={this.state.selectedOptionTgt === 'dancing'} disabled={!this.state.tgt} /></span><span>Dancing</span>
                                </div>
                                <div>
                                    <span><input onChange={this.handleOptionChangeTgt} type="radio" name="openmic" value="openmic" checked={this.state.selectedOptionTgt === 'openmic'} disabled={!this.state.tgt} /></span><span>Open mic</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.props.var ? "register-zonals-form-events-button inactive" : "register-zonals-form-events-button"}>
                        <div onClick={() => this.changeState()}>BACK</div>
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </React.Fragment >
        );
    }
}

