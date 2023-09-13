//Idea three: consider this similar to 2Sum. 
//Increment through first value of triplet, solve other two values via 2 sum.
//~80% less runtime than brute force + binary
//~98% less runtime than basic brute force

var threeSum = function(nums) {
    //i,j,k all different indexes, that have values add up to 0
    //No duplicate triplets

    //Third Answer -> two sum + outer loop.
 
    let output = [];
    // Sort numbers.
    nums.sort((a,b) => {return a - b})
    
    let prev = null;
    for(let i = 0; i < nums.length - 2; i++){

        //We have already exahusted all options for this value in this position, skip if it repeats
        if(nums[i] === prev){
            continue;
        }
        

        //Two-sum
        //Set pointers
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right){
            let value = nums[i] + nums[left] + nums[right];
            //moving left up increases our value
            if(value < 0){
                left++;
            }
            //moving righ down decreases our value
            else if(value > 0){
                right--;
            }
            else{
                //found a valid triplet, add to output
                output.push([nums[i],nums[left],nums[right]]);
                //changing left side will require new right, so there wont be repeats
                left++;
                //if our left is the same as previous index, change again.
                while (nums[left] == nums[left - 1] && left < right){
                    left++;
                }
            }
        }
        prev = nums[i];
    }

    return output;

};
