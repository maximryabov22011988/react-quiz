import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-45def.firebaseio.com/'
})