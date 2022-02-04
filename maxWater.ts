const maxArea = (height: number[]): number | string => {
  const length = height.length;
  if(length < 2 || length > 10**5 ){
    return 'Invalid range';
  }

  let max = 0

  for(let i = 0; i < length - 1; i++){
    for(let j = i + 1; j < length; j++){
      const minHeight = Math.min(height[i], height[j])
      const width = j - i;
      const area = minHeight * width;
      if(area > max){
        max = area
      }
    }
  }
  return max;
}

const testData = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// const result = maxArea(testData)

const maxWater = (array: number[]): number | string => {
  let area = 0;
  let left = 0, right = array.length - 1;

  while(left < right){
    const leftHeight = array[left];
    const rightHeight = array[right];
    console.log('left, right', leftHeight, rightHeight);
    const current = Math.min(leftHeight, rightHeight) * (right - left);
    if(current > area) area = current;
    if(leftHeight > rightHeight) right = right - 1;
    else left = left + 1;
    console.log(left, right, 'left right index');
  }

  return area;
}

console.log(maxWater(testData));
/*
  left = 1, right 7
  while (left < right){
    right = 7, left 1 => left is smaller, move to next value l = 8, r = 7
    right = 7, left 8 => 
  }

*/ 