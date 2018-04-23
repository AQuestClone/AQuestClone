module.exports = {
    visible: null,
    checkVisibility: (location) => {
        let viewPort = {
            top: 0,
            left: 0,
            bottom: 730,
            right: 1050
        };
        var isVisible = (
            location.top <= viewPort.bottom && location.bottom >= viewPort.top &&
            location.left <= viewPort.right && location.right >= viewPort.left
        );

        return isVisible;
    }
}
