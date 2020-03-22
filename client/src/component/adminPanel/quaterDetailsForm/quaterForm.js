import React from 'react';
import './../quaterDetailsForm/quaterForm.css'
// import middleWare from './../../../../store/middleWare/middleWare'
import { FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';
class QuaterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: true,
            courseName: '',
            campus: '',
            day: '',
            quaterfee: null

        }
    }
    addQuarter = (e) => {
        e.preventDefault();
        // this.setState({
        //     showing: !true
        // })
    }
    render() {
        return <div>
            <h1 className="quaterDetailsHeading">quater details</h1>
            <div className="quaterDetailsForm">
                <FormControl>
                    <InputLabel htmlFor="my-input">quarterName</InputLabel>
                    <Input id="my-input" onChange={(e) => {
                        console.log(e.target.value)
                        this.setState({
                            courseName: e.target.value
                        })
                    }} />

                </FormControl>
                <br />
                <FormControl>
                    <InputLabel htmlFor="my-input">Campus</InputLabel>
                    <Input id="my-input" onChange={(e) => {
                        console.log(e.target.value)
                        this.setState({
                            campus: e.target.value
                        })
                    }} />
                </FormControl>
                <br />

                <FormControl>
                    <InputLabel htmlFor="my-input">Day</InputLabel>
                    <Input id="my-input" onChange={(e) => {
                        console.log(e.target.value)
                        this.setState({
                            day: e.target.value
                        })
                    }} />
                </FormControl>
                <br />
                <FormControl>
                    <InputLabel htmlFor="my-input">Quater fee</InputLabel>
                    <Input id="my-input" onChange={(e) => {
                        console.log(e.target.value)
                        this.setState({
                            quaterfee: parseInt(e.target.value)  //for convert string into number 0r we can convrt it by multiplying by one(e.target.value * 1)
                            // quaterfee: e.target.value
                        })
                    }} />
                </FormControl>
                <br/>
                <div className="btnDivStyl">
                    <button className="btnStyl">+</button>
                    <span style={{ marginLeft: '10px' }}><button type="submit"  className="btnStyl">save</button></span>

                </div>
            </div>
        </div>
    }
}
export default QuaterForm;