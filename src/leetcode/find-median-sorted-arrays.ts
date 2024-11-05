export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // new sorted list
    const mergedSortedList = [];

    while (nums1.length > 0 || nums2.length > 0) {
        const firstValue = nums1[0];
        const secondValue = nums2[0];

        if (firstValue === undefined)  {
            mergedSortedList.push(secondValue);
            nums2.splice(0, 1);
        } else if (secondValue === undefined) {
            mergedSortedList.push(firstValue)
            nums1.splice(0, 1);
        }
        else if (firstValue < secondValue) {
            mergedSortedList.push(firstValue)
            nums1.splice(0, 1);
        } else {
            mergedSortedList.push(secondValue)
            nums2.splice(0, 1);
        }
    }

    const remainder = mergedSortedList.length % 2;
    const halfLength = Math.floor(mergedSortedList.length / 2);
    const halfLengthIndex = halfLength - 1;

    if (remainder === 0) {
        return (mergedSortedList[halfLengthIndex] + mergedSortedList[halfLength]) / 2
    }

    return mergedSortedList[halfLength]
};