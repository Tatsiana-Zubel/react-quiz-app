import React, {Component} from 'react'
import classes from './QuizCreator.module.css'
import Button from "../../components/UI/Button/Button"
import Input from '../../components/UI/Input/Input'
import Auxiliary from "../../hoc/Auxiliary/Auxiliary"
import {createControl} from "../../form/formFramework"


function createOptionControl(number) {
    return createControl({
            label: `Option ${number}`,
            id: number,
            errorMessage: 'Value can not be empty'
        }, {required: true},
    )

}

function createFormControls() {
    return {
        question: createControl({
            label: 'Please enter your question',
            errorMessage: 'Question can not be empty'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }


}

export default class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: createFormControls()
    }

    submitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {


    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]

            return (
                <Auxiliary
                    key={controlName +index}
                >
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => this.changeHandler(event.target.value, controlName)}
                    />
                    {index === 0 ? <hr/> : null}
                </Auxiliary>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Test creating</h1>
                    <form onSubmit={this.submitHandler}>

                        {this.renderInputs()}

                        <select></select>
                        <Button
                            type="primary"
                            onClick={this.addQuestionHandler}
                        >
                            Add question
                        </Button>
                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                        >
                            Create quiz
                        </Button>
                    </form>
                </div>

            </div>
        )
    }
}
