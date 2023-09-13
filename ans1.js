var threeSum = function(nums) {
    //i,j,k all different indexes, that have values add up to 0
    //No duplicate triplets

    let output = [];
    let usedTriplets = {};
    // Sort numbers.
    nums.sort();

    // Basic brute force
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let k = j + 1; k < nums.length; k++){
                if(nums[i] + nums[j] + nums[k] == 0){
                    if(usedTriplets[nums[i]] && usedTriplets[nums[i]][nums[j]] && usedTriplets[nums[i]][nums[j]][nums[k]]){
                        break;
                    }
                    else{
                        output.push([nums[i],nums[j],nums[k]]);
                        if(!usedTriplets[nums[i]]){
                            usedTriplets[nums[i]] = {};
                        }
                        if(!usedTriplets[nums[i]][nums[j]]){
                            usedTriplets[nums[i]][nums[j]] = {};
                        }
                        if(!usedTriplets[nums[i]][nums[j]][nums[k]]){
                            usedTriplets[nums[i]][nums[j]][nums[k]] = true;
                        }
                        break;
                    }
                }
            }
        }
    }

    return output;

};
