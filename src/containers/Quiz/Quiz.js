import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'What color is the sky?',
                answers: [
                    {text: 'Blue', id: 1},
                    {text: 'Orange', id: 2},
                    {text: 'Purple', id: 3},
                    {text: 'Green', id: 4}
                ],
                rightAnswerId: 1,
                id: 1
            },
            {
                question: 'Who is the founder of Facebook?',
                answers: [
                    {text: 'Pavel Durov', id: 1},
                    {text: 'Mark Zuckerberg', id: 2},
                    {text: 'Steve Jobs', id: 3},
                    {text: 'Kim Kardashian', id: 4}
                ],
                rightAnswerId: 2,
                id: 2
            }
        ]
    }

    onAnswerClickHandler = answerId => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState[0])
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]

        if (question.rightAnswerId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)

        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }


    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Please answer all questions</h1>

                    {
                        this.state.isFinished
                            ? <h1>Finished</h1>
                            : <ActiveQuiz
                                question={this.state.quiz[this.state.activeQuestion].question}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />}
                </div>
            </div>
        )
    }
}

export default Quiz