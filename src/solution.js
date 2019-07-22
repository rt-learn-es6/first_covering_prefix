export class Solution {
  solution(A) {
    let firstCoveringPrefix = 0
    let lastUniqueSize = 0
    const unique = new Set()
    for (var i = 0; i < A.length; i++) {
      unique.add(A[i])
      if (unique.size !== lastUniqueSize) {
        firstCoveringPrefix = i
        lastUniqueSize = unique.size
      }
    }
    return firstCoveringPrefix
  }
}
