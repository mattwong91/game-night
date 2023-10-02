
export class Player {
  constructor(name, imgPath) {
    this.name = name
    this.imgPath = imgPath
    this.score = 0
  }

  get PlayerCard() {
    return `
    <div class="col-6">
        <div>
          <img class="profile-img" src="assets/img/${this.name}.jpg" alt="${this.name}">
          <p class="p-2">
            ${this.name}
            <button class="btn btn-danger">-</button>
            <span class="px-2">${this.score}</span>
            <button onclick="app.PlayersController.scorePoint('${this.name}')" class="btn btn-primary">+</button>
          </p>
        </div>
      </div>
    `
  }
}