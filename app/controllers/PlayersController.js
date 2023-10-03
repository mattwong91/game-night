import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { playersService } from "../services/PlayersService.js";
import { getFormData } from "../utils/FormHandler.js"

export class PlayersController {
  constructor() {
    AppState.players.forEach(player => console.log('Players name:', player.name))
    _drawPlayers()
  }

  scorePoint(playerName) {
    console.log('clicked', playerName);
    playersService.scorePoint(playerName)
    _drawPlayers()
  }

  removePoint(playerName) {
    playersService.removePoint(playerName)
    _drawPlayers()
  }

  addPlayer(event) {
    event.preventDefault()
    console.log('form submitted', event);

    const form = event.target
    const playerData = getFormData(form)

    playersService.addPlayer(playerData)
    _drawPlayers()
  }
}

function _drawPlayers() {
  const players = AppState.players
  let content = ''
  players.forEach(player => content += player.PlayerCard)

  setHTML('players', content)
}