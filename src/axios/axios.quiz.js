import axios from'axios'

export default axios.create({
    baseURL: 'https://react-quiz-f9488-default-rtdb.firebaseio.com/'
})