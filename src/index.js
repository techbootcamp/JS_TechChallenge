/* global fetch  */

import Chess from 'chess.js'
import Blockchain from './Blockchain/Blockchain.js'
import ChessBoardFactory from './ChessBoardFactory'
import { updateGameStatus } from './helpers'

const game = new Chess()
const chain = new Blockchain('blockchain')
const board = ChessBoardFactory(game, chain, updateGameStatus)
chain.onChange(() => {
  updateGameStatus(game, chain)
})

document.querySelector('#new-block-button')
    .addEventListener('click', () => {
      chain.addNewBlock()
    })

document.querySelector('#serialize-button')
    .addEventListener('click', () => {
      document.querySelector('#serialize-textarea').textContent = chain.serialize()
    })

document.querySelector('#verify-button')
    .addEventListener('click', () => {
      chain.verify()
        .then((result) => {
          document.querySelector('#verify-textarea').textContent = JSON.stringify(result)
        })
    })

/** YOUR CODE STARTS HERE */

// Your code

/** YOUR CODE ENDS HERE */

/** for dev only */
window.game = game
window.chain = chain
window.board = board
