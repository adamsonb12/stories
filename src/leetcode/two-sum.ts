export function twoSum(nums: number[], target: number): number[] {
    const numsCopy = [...nums].sort((a, b) => a - b);

    let leftIndex: number = 0;
    let rightIndex: number = numsCopy.length - 1;
    let result: number[] = [];

    while (leftIndex < rightIndex) {
        const sum = numsCopy[leftIndex] + numsCopy[rightIndex];

        if (sum < target) {
            leftIndex++;
        } else if (sum > target) {
            rightIndex--;
        } else {
            const originalLeftIndex = nums.findIndex(n => n === numsCopy[leftIndex]);
            const originalRightIndex = nums.findIndex((n, index) => n === numsCopy[rightIndex] && index !== originalLeftIndex);
            result = [originalLeftIndex, originalRightIndex];
            while (leftIndex < rightIndex) {
                leftIndex++;
            }
        }
    }

    return result;
};
