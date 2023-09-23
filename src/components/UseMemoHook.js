import React, { useMemo } from 'react';

function UseMemoHook() {
  let number = 1;
  let memoizedValue = useMemo(() => {
    return number + 1;
  }, [number]);

  return (
    <div>
      <h1>Number: {number}</h1>
      <h1>UseMemo value: {memoizedValue}</h1>
    </div>
  );
}

export default UseMemoHook;


//Is example mein, computedData value data ke changes ke depend karti hai. useMemo ka use karke, computedData ke computation ko sirf tabhi run kiya jayega jab data change hoga, baaki samay woh cache mein rahegi. Yeh performance improvement ka ek example hai.