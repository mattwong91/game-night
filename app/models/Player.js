
export class Player {
  constructor(name, imgPath) {
    this.name = name
    this.imgPath = imgPath
    this.score = 0
  }

  get PlayerCard() {
    return `
    <div class="col-3 text-center">
        <div class="card">
          <img class="profile-img" src="assets/img/${this.name}.jpg" alt="${this.name}">
          <p class="p-2">
            <p>${this.name}</p>
            <div>
              <button onclick="app.PlayersController.removePoint('${this.name}')" class="btn btn-danger">-</button>
              <span class="px-4">${this.score}</span>
              <button onclick="app.PlayersController.scorePoint('${this.name}')" class="btn btn-primary">+</button>
            </div>
          </p>
        </div>
      </div>
    `
  }
}