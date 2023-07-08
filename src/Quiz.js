import 'react-tabs/style/react-tabs.css';
import React, { Component } from 'react';

class Quiz extends Component {
    submitAnswer() {
        var radios = document.getElementsByName('choice');
        var val = "";
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                val = radios[i].value;
                break;
            }
        }

        if (val === "") {
            alert('please select choice answer');
        } else if (val === "Scripting") {
            alert('Answer is correct !');
        } else {
            alert('Answer is wrong');
        }
    };

    render() {
        return (
            <div id="Quiz">
                <h1>JavaScript is ______ Language.</h1>
                <form >
                    <input type="radio" name="choice" value="Scripting" /> Scripting
                    <br />
                    <input type="radio" name="choice" value="Programming" /> Programming
                    <br />
                    <input type="radio" name="choice" value="Application" /> Application
                    <br />
                    <input type="radio" name="choice" value="None of These" /> None of These
                </form>
                <button onClick={this.submitAnswer}>Submit Answer</button>
            </div>
        );
    }
}

export default Quiz;
