import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayersService {
  scorePoint(playerName) {
    const foundPlayer = AppState.players.find(player => player.name == playerName)
    foundPlayer.score++
  }

  addPlayer(playerData) {
    const newPlayer = new Player(playerData.name, playerData.imgPath)
    AppState.players.push(newPlayer)
  }
}

export const playersService = new PlayersService()