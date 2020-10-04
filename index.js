(function(window, _) {
  window.sporc = window.sporc || {
    numz: {
        getDistance: function(pointA, pointB) {
            const
                distanceX = pointB.x - pointA.x;
                distanceY = pointB.y - pointA.y;
                distance = math.sqrt(distanceX * distanceX + distanceY * distanceY);
                return distance;
        },
        getAngleDegrees: function(pointA, pointB){
            const
                distanceX = pointB.x - pointA.x,
                distanceY = pointB.y - pointA.y,
                radians = Math.atan2(distanceX, distanceY),
                degrees = radians * 180 / math.PI;
                return degrees;
        }
    },
    phyz: {
    
    makeBody: function(type, {
        velocityX = 0,
        velocityY = 0,
        rotaionalVeocity = 0,
        integrity = 1,
        density = 1,
        volatility = 0
    } = {}) {
    if (type === undefined) throw new Error("You must provide a valid string for the type parameter");
    return {
        type: type,
        velocityX: velocityX,
        velocityY: velocityY,
        rotaionalVeocity: rotaionalVeocity,
        integrity: integrity,
        density: density,
        volatility: volatility,

        handleCollision(impact, body){

        },

        update(event){

        }
    };
    },
    },
};
}(window, window._));