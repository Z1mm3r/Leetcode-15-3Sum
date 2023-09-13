//Second Thought:
//Brute force with binary searching for target.
// ~90% less runtime than basic brute force.

var threeSum = function(nums) {
    //i,j,k all different indexes, that have values add up to 0
    //No duplicate triplets

    let binarySearch = (arr,left,right,target) => {
        while(left <= right){
            let mid = Math.floor((left + right) / 2);

            if(arr[mid] === target){
                return mid;
            }
            else if( arr[mid] < target){
                left = mid + 1;
            }
            else{
                right = mid - 1; 
            }
        }
        return -1;
    }

    let output = [];
    let usedTriplets = {};
    // Sort numbers.
    nums.sort((a,b) => {return a - b})

    // Semi brute force? Go through 2 & binary search the third
    
    let prev = null;
    for(let i = 0; i < nums.length - 2; i++){
        if(nums[i] === prev){
            continue;
        }

        let innerPrev = null;
        for(let j = i + 1; j < nums.length - 1; j++){
            if(nums[j] === innerPrev){
                continue;
            }
            innerPrev = nums[j];

            let target = (nums[i] + nums[j]) * (-1);
            //binary search for target
            let index = binarySearch(nums,j+1,nums.length -1, target);
            //if target is found
            if(index != -1){
                output.push([nums[i],nums[j],nums[index]]);
            }


        }
        prev = nums[i];
    }

    return output;

};
