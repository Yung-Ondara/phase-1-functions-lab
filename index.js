// Code your solution in this file!
// Define the headquarters location
const HqBlock = 42; // Assuming HQ is at block 42, adjust as needed

// Calculate the distance in blocks from HQ
function distanceFromHqInBlocks(blockNumber) {
  // Using Math.abs to get absolute value (positive distance)
  return Math.abs(blockNumber - HqBlock);
}
// Define the headquarters location
const hqBlock = 42; // Assuming HQ is at block 42

// Calculate the distance in blocks from HQ
function distanceFromHqInBlocks(blockNumber) {
  return Math.abs(blockNumber - hqBlock);
}

// Calculate the distance in feet from HQ
function distanceFromHqInFeet(blockNumber) {
  // Assuming 1 block = 264 feet
  return distanceFromHqInBlocks(blockNumber) * 264;
}
function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock) * 264;
}
function calculatesFarePrice(start, destination) {
    // Calculate the distance in feet
    const distance = distanceTravelledInFeet(start, destination);
    
    // Apply pricing rules
    if (distance <= 400) {
      // Free for short distances (the "free sample")
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      // Regular per-foot pricing after the free threshold
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      // Flat rate for medium distances
      return 25;
    } else {
      // For very long distances, return 'cannot travel that far'
      return 'cannot travel that far';
    }
  }
  
  // This assumes you already have distanceTravelledInFeet function defined
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }

