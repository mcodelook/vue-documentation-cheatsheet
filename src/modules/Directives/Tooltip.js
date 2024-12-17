const TooltipConfig = {
    STYLES: {
        BASE: [
            'bg-slate-800',
            'shadow-md',
            'shadow-black',
            'text-white',
            'p-2',
            'hidden',
            'absolute'
        ]
    },
    OFFSET: {
        VERTICAL: 5
    }
}

export default class Tooltip {
    #container
    #content

    constructor(config) {
        this.#container = this.#createContainer()
        this.#content = this.#createContent()
        this.#container.appendChild(this.#content)
        this.#updateContent(config)
    }

    #createContainer() {
        const container = document.createElement('div')
        container.classList.add(...TooltipConfig.STYLES.BASE)
        return container
    }

    #createContent() {
        return document.createElement('div')
    }

    updateContent(config) {
        this.#updateContent(config)
    }

    #updateContent(config) {
        this.#content.textContent = config?.content
    }

    position(targetElement) {
        const { left, bottom } = targetElement.getBoundingClientRect()
        this.#container.style.left = `${left}px`
        this.#container.style.top = `${bottom + TooltipConfig.OFFSET.VERTICAL}px`
    }

    show() {
        this.#container.style.display = 'block'
    }

    hide() {
        this.#container.style.display = 'none'
    }

    destroy() {
        this.#container.remove()
    }

    get element() {
        return this.#container
    }
}
