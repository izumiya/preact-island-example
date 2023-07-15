import { createIsland, createIslandWebComponent } from 'preact-island'

const Widget = () => {
	return <div>awesome widget!</div>
}

const island = createIslandWebComponent('index-island', Widget)
island.render({
	selector: 'index-island',
})