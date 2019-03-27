import React, { Component } from "react";
import QuotesData from '../data/quotes.json'

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            working: false,
            btnText: "TIME TO GO TO WORK"
        };
    }

    handleClick = () => {
        console.log('Button clicked');
        const appLogo = document.querySelector(".App-logo");
        this.setState(state => ({ working: !state.working }));
        if (this.state.working === false) {
            appLogo.classList.add("App-logo-fast")
            this.setState({ btnText: "Let's go home" });
        } else {
            appLogo.classList.remove("App-logo-fast")
            this.setState({ btnText: "TIME TO GO TO WORK" });
        }
    }
    render() {
        console.log(this.state.btnText)
        //Change the index when the state is toggled
        const indexChange = this.state.working === false ? 0 : 1
        return (
            <div>
                <figure>
                    <img src={QuotesData[indexChange].image} alt={QuotesData[indexChange].character} />
                    <figcaption>
                        <blockquote>{QuotesData[indexChange].quote}</blockquote>
                        <cite>{QuotesData[indexChange].character}</cite>
                    </figcaption>
                </figure>
                <button className="Btn" onClick={this.handleClick}>{this.state.btnText}</button>
            </div>
        )
    }
};

export default Quote;