function add(a){
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d;
            }
        }
    }
}
console.log(add(1)(2)(3)(11));

// Calculate Volume
function calculateVolume(length, height, breadth) {
	return length  * height / breadth;
}
console.log(calculateVolume(4, 5, 2));

// Another Method 

function calculateVol(length) {
	return function (height) {
		return function (breadth) {
			return length * height / breadth;
		}
	}
}
console.log(calculateVol(4)(5)(2));
