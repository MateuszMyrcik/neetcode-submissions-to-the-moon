class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
      const stack = []
    const orderedArr = []
    for (let i = 0; i < position.length; i++) {
      orderedArr.push({ position: position[i], speed: speed[i] })
    }

    orderedArr.sort((a, b) => b.position - a.position)
    for (let i = 0; i < orderedArr.length; i++) {
      const time = (target - orderedArr[i].position) / orderedArr[i].speed;
      const lastFleetTime = stack.length ? stack[stack.length - 1] : null;
      console.log(stack, time)

      if (lastFleetTime === null) {
        stack.push(time)

        continue;
      }

      if (time > lastFleetTime) {
        stack.push(time)
        continue;
      }



    }
    return stack.length


    }
}
