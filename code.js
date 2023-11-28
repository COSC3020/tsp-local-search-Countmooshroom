function tsp_ls(matrix) {
    //generate a random starting route
    let len = matrix.length;
    route = [];
    while (route.length < len) {
        let num = Math.floor(Math.random() * len);
        if (!route.includes(num)) {
            route.push(num);
        }
    }

    //run the function repeatedly
    //Stop it after a linear amount of times
    for (let j = 0; j < len * 50; j++) {
        //generate random i and k
        let i = Math.floor(Math.random() * (len - 1));
        let k = Math.floor(Math.random() * (len - 1 - i)) + i + 1;

        let newRoute = twoOptSwap(route, i, k);
        if (dist(newRoute) < dist(route)) {
            route = newRoute;
        }
    }
    return dist(route);
    

    //function to reverse cities i to k
    function twoOptSwap(route, i, k) {
        let swap = route.slice(i, k + 1);
        swap.reverse();
        return route.slice(0, i).concat(swap).concat(route.slice(k + 1));
    }


    //get the total distance of a route
    function dist(route) {
        let d = 0;
        for (let i = 0; i < route.length - 1; i++) {
            d += matrix[route[i]][route[i + 1]];
        }
        return d;
    }
}