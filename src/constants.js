import img1 from 'assets/images/main/1.png'
import img2 from 'assets/images/main/2.png'
import img3 from 'assets/images/main/3.png'
import img4 from 'assets/images/main/4.png'

import answerImg21 from 'assets/images/answers/answer-2-1.png'
import answerImg22 from 'assets/images/answers/answer-2-2.png'

import answerImg41 from 'assets/images/answers/answer-4-1.png'
import answerImg42 from 'assets/images/answers/answer-4-2.png'
import answerImg43 from 'assets/images/answers/answer-4-3.png'
import answerImg44 from 'assets/images/answers/answer-4-4.png'


export const items = [
  {
    id: '1',
    name: 'Visual',
    img: img1,
    col: 2,
    detail: {
      title: 'Which one is a Serif font?',
      answers: [
        {
          id: 1,
          img: answerImg21,
          correct: false,
        },
        {
          id: 2,
          img: answerImg22,
          correct: true,
        },
      ]
    }
  },
  {
    id: '2',
    name: 'Intuitive',
    img: img2,
    col: 2,
    detail: {
      title: 'Which one is a Serif font?',
      answers: [
        {
          id: 1,
          img: answerImg41,
          correct: true,
        },
        {
          id: 2,
          img: answerImg42,
          correct: false,
        },
        {
          id: 3,
          img: answerImg43,
          correct: false,
        },
        {
          id: 4,
          img: answerImg44,
          correct: false,
        },
      ]
    }
  },
  {
    id: '3',
    name: 'Similiarity',
    img: img3, 
    col: 2,
    detail: {
      title: 'Which one is a Serif font?',
      answers: [
        {
          id: 1,
          img: answerImg21,
          correct: false,
        },
        {
          id: 2,
          img: answerImg22,
          correct: true,
        },
      ]
    }
  },
  {
    id: '4',
    name: 'Cognitive',
    img: img4,
    col: 2,
    detail: {
      title: 'Which one is a Serif font?',
      answers: [
        {
          id: 1,
          img: answerImg21,
          correct: false,
        },
        {
          id: 2,
          img: answerImg22,
          correct: true,
        },
      ]
    }
  },
]