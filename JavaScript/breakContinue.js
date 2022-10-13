const nums = [55,7,9,10,12,16]

for(x in nums){
    if(x == 12){
        break
    }
    console.log(`${x} = ${nums[x]}`);
}

for(y in nums){
    if(y == 3){
        continue
    }clearInterval
    console.log(`${y} = ${nums[y]}`);
}

