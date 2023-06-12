let n1 = n - 42

let c = n1 - n

function distanceFromHqInBlocks(n){return Math.abs(n - 42)};

function distanceFromHqInFeet(n){return Math.abs(distanceFromHqInBlocks(n)*264)};

function distanceTravelledInFeet(n, n1){return Math.abs((n1 - n)*264)};

function calculatesFarePrice(start, end){let c = Math.abs((end-start)*264); if (c <= 400) {return 0
    
} else if(c >400 && c < 2000) {return ((c-400)*.02)

} else if(c >=2000 && c < 2500) {return (25)

} else if(c >2500) {return ('cannot travel that far')}
};

