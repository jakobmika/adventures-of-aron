import { Component, h, Host, Listen, State } from "@stencil/core"
import { Direction, Game, Position } from "../../model"

@Component({
	tag: "aron-game",
	styleUrl: "game.css",
	scoped: true,
})
export class AronGame {
	@State() game: Game = Game.create()
	@Listen("keydown")
	onKeyDown(event: KeyboardEvent) {
		console.log(event.key)
		let direction: Direction | undefined
		switch (event.key) {
			case "ArrowLeft":
				direction = "left"
				break
			case "ArrowRight":
				direction = "right"
				break
			case "ArrowUp":
				direction = "up"
				break
			case "ArrowDown":
				direction = "down"
				break
		}
		if (direction)
			this.game = this.game.move(direction)
	}
	render() {
		console.log("game", this.game)
		return (
			<Host tabIndex={0}>
				<aron-map map={this.game.map} offset={new Position(0, 0)}></aron-map>
				<aron-hero hero={this.game.hero}></aron-hero>
			</Host>
		)
	}
}