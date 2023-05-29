import './App.css';
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import 'react-tabs/style/react-tabs.css';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

function Calculator() {
    const [text, onChangeText] = React.useState('2^(3*4)-5');

    function isNumeric(n) {
        return (!isNaN(parseFloat(n)) && isFinite(n)) || (n === '.' && n.length === 1);
    }

    function tokenize(input_string) {
        input_string = input_string.replaceAll(' ', '');
        var output = [];
        var prev = null;
        var prev2 = null;
        for (let i = 0; i < input_string.length; i++) {
            var curr = input_string[i];
            if (curr.toUpperCase() !== curr.toLowerCase() || curr === '$' || curr === '_') {
                return 'ERROR: "' + curr + '" is not a number or operator';
            } else if (prev !== null && prev.includes('.') && curr === '.') {
                return 'ERROR: "' + prev + curr + '" is not a valid input';
            }
            // combine multi-digit numbers, negative numbers, and decimals
            if ((isNumeric(prev) && (isNumeric(curr) || curr === '.'))
                || (prev === '-' && isNumeric(curr) && (i === 1 || (!isNumeric(prev2) && prev2 !== ')')))) {
                // append
                prev = prev + curr;
                output.length = output.length - 1;
                output.push(prev);
            } else {
                // split
                prev2 = prev;
                prev = curr;
                output.push(prev);
            }
        }
        return output;
    }

    function evaluate(tokens) {
        if (tokens.length <= 1) {
            return tokens[0];
        }

        if (tokens.includes('(') && tokens.includes(')')) {
            var score = 0;
            var prev = '';
            for (let i = 0; i < tokens.length; i++) {
                var curr = tokens[i];
                if (curr === '(') {
                    prev = i;
                    score += 1;
                } else if (curr === ')') {
                    score -= 1;
                    if (tokens[prev] === '(') {
                        var inner = tokens.slice(prev + 1, i);
                        tokens.splice(prev, i - prev + 1, evaluate(inner));
                    } else {
                        prev = i;
                    }
                }
                if (score < 0) {
                    return "ERROR: Incorrect use of parenthesis.";
                }
            }
        } else if (tokens.includes("^")) {
            for (let i = 0; i < tokens.length; i++) {
                if (tokens[i] === "^") {
                    var lower = tokens[i - 1];
                    var upper = tokens[i + 1];
                    tokens.splice(i - 1, 3, Math.pow(parseFloat(lower), parseFloat(upper)).toString());
                    break;
                }
            }
        } else if (tokens.includes("*")) {
            for (let i = 0; i < tokens.length; i++) {
                if (tokens[i] === "*") {
                    lower = tokens[i - 1];
                    upper = tokens[i + 1];
                    tokens.splice(i - 1, 3, (parseFloat(lower) * parseFloat(upper)).toString());
                    break;
                }
            }
        } else if (tokens.includes("/")) {
            for (let i = 0; i < tokens.length; i++) {
                if (tokens[i] === "/") {
                    var numer = tokens[i - 1];
                    var denom = tokens[i + 1];
                    tokens.splice(i - 1, 3, (parseFloat(numer) / parseFloat(denom)).toString());
                    break;
                }
            }
        } else if (tokens.includes("-")) {
            for (let i = 0; i < tokens.length; i++) {
                if (tokens[i] === "-") {
                    lower = tokens[i - 1];
                    upper = tokens[i + 1];
                    tokens.splice(i - 1, 3, (parseFloat(lower) - parseFloat(upper)).toString());
                    break;
                }
            }
        } else if (tokens.includes("+")) {
            for (let i = 0; i < tokens.length; i++) {
                if (tokens[i] === "+") {
                    lower = tokens[i - 1];
                    upper = tokens[i + 1];
                    tokens.splice(i - 1, 3, (parseFloat(lower) + parseFloat(upper)).toString());
                    break;
                }
            }
        } else if (tokens.length !== 1) {
            return "ERROR: Missing operator between values.";
        }
        return evaluate(tokens);
    }

    function advCalc() {
        var x = document.getElementById("acinput").value;
        var y = tokenize(x);
        var z = evaluate(y);
        document.getElementById("acanswer").innerHTML = "Answer: " + z;
    }

    return (
        <div id="app">
            <div id="Basic Calculator">
                <h3>Basic Calculator</h3>
                <p>This calculator can complete some basic calculations including parenthesis, negative numbers, and decimals. Spaces are ignored.
                    <br></br>It works by tokenizing the expression and recursively evaluating the tokens until an error is encountered (improper use of parenthesis or character) or the expression is simplified to one term.
                    <br></br>In the example, 2^(3*4)-5 should yield 4091.</p>
                <TextInput
                    id="acinput"
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <button onClick={advCalc}>Calculate</button>
                <p id="acanswer">Answer:</p>
            </div>
        </div>
    );
}

export default Calculator;
