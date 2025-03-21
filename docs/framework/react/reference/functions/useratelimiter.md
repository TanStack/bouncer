---
id: useRateLimiter
title: useRateLimiter
---

<!-- DO NOT EDIT: this page is autogenerated from the type comments -->

# Function: useRateLimiter()

```ts
function useRateLimiter<TFn, TArgs>(fn, options): object
```

Defined in: [react-pacer/src/rate-limiter/useRateLimiter.ts:5](https://github.com/TanStack/bouncer/blob/main/packages/react-pacer/src/rate-limiter/useRateLimiter.ts#L5)

## Type Parameters

• **TFn** *extends* (...`args`) => `any`

• **TArgs** *extends* `any`[]

## Parameters

### fn

`TFn`

### options

`RateLimiterOptions`

## Returns

`object`

### getExecutionCount()

```ts
readonly getExecutionCount: () => number;
```

Returns the number of times the function has been executed

#### Returns

`number`

### getRejectionCount()

```ts
readonly getRejectionCount: () => number;
```

Returns the number of times the function has been rejected

#### Returns

`number`

### getRemainingInWindow()

```ts
readonly getRemainingInWindow: () => number;
```

Returns the number of remaining executions in the current window

#### Returns

`number`

### maybeExecute()

```ts
readonly maybeExecute: (...args) => boolean;
```

Executes the rate-limited function if within limits

#### Parameters

##### args

...`TArgs`

#### Returns

`boolean`

boolean indicating whether the function was executed

### reset()

```ts
readonly reset: () => void;
```

Resets the rate limiter state

#### Returns

`void`
