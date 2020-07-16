module.exports = {
  succeed,
  fail,
  repair,
};
/** item={
  name: ''.
  durability: '0-100',
  enhancement: '0-20'
}*/

function succeed(item) {
  /**
   * The item's enhancement increases by 1.
- If the item enhancement level is 20, the enhancement level is not changed.
- The durability of the item is not changed.
   */
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    return { ...item, enhancement: item.enhancement + 1 };
  }
}

function fail(item) {
  /**
   * If the item's enhancement is less than 15, the durability of the item is decreased by 5.
- If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
- If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
   */
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement >= 15 && item.enhancement < 17) {
    return { ...item, durability: item.durability - 10 };
  } else {
    return { ...item, durability: item.durability - 1 };
  }
}

function repair(item) {
  /**
   * a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.
   */
  return { ...item, durability: 100 };
}
