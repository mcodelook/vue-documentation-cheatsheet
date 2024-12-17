import Tooltip from './Tooltip.js'

class TooltipDirective {
    create(element, config) {
        const tooltip = new Tooltip(config)
        document.body.appendChild(tooltip.element)
        this.#attachEventListeners(element, tooltip)
        return tooltip
    }

    #attachEventListeners(element, tooltip) {
        element.addEventListener('mouseenter', () => {
            tooltip.position(element)
            tooltip.show()
        })

        element.addEventListener('mouseleave', () => {
            tooltip.hide()
        })
    }
}

export const tooltipDirective = {
    created(element, binding) {
        element.tooltip = new TooltipDirective().create(element, binding.value)
    },

    updated(element, binding) {
        if (element.tooltip) {
            element.tooltip.updateContent(binding.value)
        }
    },

    unmounted(element) {
        if (element.tooltip) {
            element.tooltip.destroy()
        }
    }
}
