---
id: useThrottledState
title: useThrottledState
---

<!-- DO NOT EDIT: this page is autogenerated from the type comments -->

# Function: useThrottledState()

```ts
function useThrottledState<TValue>(value, options): readonly [TValue, (...args) => void, {
  cancel: () => void;
  getExecutionCount: () => number;
  maybeExecute: (...args) => void;
 }]
```

Defined in: [react-pacer/src/throttler/useThrottledState.ts:5](https://github.com/TanStack/bouncer/blob/main/packages/react-pacer/src/throttler/useThrottledState.ts#L5)

## Type Parameters

• **TValue**

## Parameters

### value

`TValue`

### options

`ThrottlerOptions`

## Returns

readonly \[`TValue`, (...`args`) => `void`, \{
  `cancel`: () => `void`;
  `getExecutionCount`: () => `number`;
  `maybeExecute`: (...`args`) => `void`;
 \}\]
