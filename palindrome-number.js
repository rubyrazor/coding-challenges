var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    const stringifiedX = x.toString();
    const arr = stringifiedX.split('');
    
    for(let i=0; i<arr.length/2; i++) {
        if(arr[i] != arr[arr.length-1-i]) {
            return false
        }
    } 
    return true
};
