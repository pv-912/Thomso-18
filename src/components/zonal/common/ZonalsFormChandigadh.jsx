import React from "react";

import FetchApi from "../../../utils/FetchAPI";
import validateInput from "../../../utils/validation/loginValidation";
import ChandigadhEvents from "./ZonalsForm/ChandigadhEvents";
import PersonalDetails from "./ZonalsForm/PersonalDetails";

import "../src/css/ZonalsForm.css";
import astro from "../../beta/home/src/img/astro.png";

class ZonalsForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            contact: "",
            college: "",
            branch: "",
            events: [],
            variable: true,
            submitDisabled: false,
            errors: ""
        };
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    changeState = () => {
        this.setState({ variable: !this.state.variable });
    }
    stateValues = (value) => {
        this.setState(value);
    }
    selected = events => {
        if (!this.state.submitDisabled) {
            let { name, email, contact, college, branch } = this.state;
            if (name) {
                name = name.trim();
            }
            if (contact) {
                contact = contact.trim();
            }
            if (college) {
                college = college.trim();
            }
            if (branch) {
                branch = branch.trim();
            }
            const check = validateInput(email, "email");
            if (name && contact && college && branch && check.isValid && events && events.length > 0) {
                const data = { name, email, contact, college, branch, events };
                this.setState({ submitDisabled: true });
                FetchApi("POST", "/api/zonals/chandigadh", data)
                    .then(res => {
                        if (res && res.data) {
                            if (res.data.success) {
                                this.props.showModal();
                                this.setState({ errors: "", name: "", email: "", contact: "", college: "", branch: "", events: [], variable: true });
                                this.personalDetails.setState({ name: "", email: "", contact: "", college: "", branch: "" });
                                this.chandigadhEvents.setState({ selectedOptionTgt: "", nukkadnatak: false, tgt: false });

                            } else {
                                this.setState({ errors: res.data.msg });
                            }
                            this.setState({ submitDisabled: false });
                        }
                    })
                    .catch(() => {
                        this.setState({ errors: "Something went wrong" });
                        this.setState({ submitDisabled: false });
                    });
            } else if (check.errors && check.errors.email) {
                this.setState({ errors: check.errors.email });
            } else {
                this.setState({ errors: "Fields cannot be empty" });
            }
        } else {
            this.setState({ errors: "Fields cannot be empty" });
        }
    }
    render() {
        return (
            <div id="thomso-zonals-registration-form-lucknow" className="zonalsForm-main-div">
                <div className="zonalsform-main-child">
                    <div className="astro-image-zonals-div">
                        <div>
                            <img src={astro} alt="astro" className="astro-image-zonals astro-bounce" />
                        </div>
                    </div>
                    <div className="register-zonals-form-div">
                        <PersonalDetails onRef={ref => (this.personalDetails = ref)} statevalues={this.stateValues} function={this.changeState} var={this.state.variable} />
                        <ChandigadhEvents onRef={ref => (this.chandigadhEvents = ref)} errors={this.state.errors}  selectedevents={this.selected} function={this.changeState} var={this.state.variable} hiding={this.state.isHidden} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ZonalsForm;
