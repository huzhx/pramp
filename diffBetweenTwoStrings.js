function diffBetweenTwoStrings(source, target) {
  /**
	@param source: string
	@param target: string
	@return: string[]
	*/

  // your code goes here

  let ans = [];
  let i = 0;
  let j = 0;

  const memo = new Array(source.length).fill(-1).map(_ => new Array(target.length).fill(-1));

  function dp(i, j) {
    if (i === source.length || j === target.length) {
      return target.length - 1;
    }

    if (memo[i][j] === null) {
      if (source[i] === target[j]) {
        memo[i][j] = dp(i + 1, j + 1);
      } else {
        memo[i][j] = 1 + Math.min(dp(i + 1, j), dp(i, j + 1));
      }
    }

    return memo[i][j];
  }

  while (i < source.length && j < target.length) {
    if (source[i] === target[j]) {
      ans.push(source[i]);
      i += 1;
      j += 1;
    } else {
      if (dp(i + 1, j) <= dp(i, j + 1)) {
        ans.push('-' + source[i]);
        i += 1;
      } else {
        ans.push('+' + target[j]);
        j += 1;
      }
    }
  }

  while (i < source.length) {
    ans.push('-' + source[i]);
    i += 1;
  }

  while (j < target.length) {
    ans.push('+' + target[j]);
    j += 1;
  }

  console.log(ans);
  return ans;
}

diffBetweenTwoStrings('ABCDEFG', 'ABDFFGH');
