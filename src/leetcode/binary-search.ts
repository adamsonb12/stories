// array must be sorted

export function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === target) {
        return mid; // Target found at index mid
      } else if (arr[mid] < target) {
        low = mid + 1; // Search in the right half
      } else {
        high = mid - 1; // Search in the left half
      }
    }
  
    return -1; // Target not found
  }