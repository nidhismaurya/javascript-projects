//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
nums2.sort(function(x, y) {
    return x-y;
});
console.log(nums2);

//Sort each array in descending order.
nums2.sort(function(x, y) {
    return y-x;
});
console.log(nums2);
