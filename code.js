function tsp_ls(matrix) {
    let len = matrix.length;

    //Generate a starting route
    route = Array.from(Array(len).keys())

    //Run the function repeatedly, going through variables systematically
    //Inspired by https://en.wikipedia.org/wiki/2-opt
    var improved = true;
    while (improved) {
        improved = false;
        for (let i = 0; i < len - 1; i++) {
            for (let k = i + 1; k < len; k++) {
                let newRoute = twoOptSwap(route, i, k);
                if (dist(newRoute) < dist(route)) {
                    route = newRoute;
                    improved = true;
                }
            }
        }
    }
    return dist(route);
    

    //Function to reverse cities i to k
    function twoOptSwap(route, i, k) {
        let swap = route.slice(i, k + 1);
        swap.reverse();
        return route.slice(0, i).concat(swap).concat(route.slice(k + 1));
    }


    //Get the total distance of a route
    function dist(route) {
        let d = 0;
        for (let i = 0; i < route.length - 1; i++) {
            d += matrix[route[i]][route[i + 1]];
        }
        return d;
    }
}


dm = [[0,3,4,2,7],
      [3,0,4,6,3],
      [4,4,0,5,8],
      [2,6,5,0,6],
      [7,3,8,6,0]];
tsp_ls(dm);