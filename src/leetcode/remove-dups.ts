export function removeDuplicates(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const index = nums.findIndex(num => num === value);
        if (index !== i) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
};