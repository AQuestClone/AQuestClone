module.exports = {
    toggleHover: (hovered) => {
        if (hovered !== 3) {
            if (hovered === 2) {
                hovered = --hovered;
                return hovered;
            }
            else {
                hovered = ++hovered;
                return hovered
            }
        }
        return hovered
    },
    toggleMenu: (hovered) => {
        if (hovered === 3) {
                hovered = 1;
                return hovered
        } 
        else {
            hovered = 3;
            return hovered;
        }
    }
}


