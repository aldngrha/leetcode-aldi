function targetIndices(nums: number[], target: number): number[] {
    nums.sort((a, b) => a - b)
    const RESULT: number[] = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            RESULT.push(i)
        }
    }

    return RESULT;
};