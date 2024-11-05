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


// STOLEN BINARY SEARCH SOLUTION
export function findMedianSortedArraysSTOLEN(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
      // Binary-search on smaller array for faster real runtime.
      [nums1, nums2] = [nums2, nums1];
    }
  
    /**
     * Boilerplate binary search. Returns the largest number for which the
     * predicate is true.
     */
    const binarySearch = (
      low: number,
      high: number,
      predicate: (i: number) => boolean
    ) => {
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (predicate(mid)) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
      return high;
    };
  
    const findKthElement = (k: number) => {
      // Find the nums1 index for which a length-k merged left subarray is
      // valid. This is equivalent to finding the largest nums1 index whose
      // element is well ordered with respect to the corresponding nums2-indexed
      // element.
      const index1 = binarySearch(
        /* low= */ 0,
        /* high= */ nums1.length - 1,
        i => (nums1[i] ?? -Infinity) <= (nums2[k - i] ?? Infinity)
      );
      return Math.max(
        nums1[index1] ?? -Infinity,
        nums2[k - index1 - 1] ?? -Infinity
      );
    };
  
    const mergedLen = nums1.length + nums2.length;
    const median1 = findKthElement(Math.floor(mergedLen / 2));
    const median2 = mergedLen % 2 ?
      median1 :
      findKthElement(Math.floor(mergedLen / 2) - 1);
    return (median1 + median2) / 2;
  };
