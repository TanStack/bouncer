---
id: useDebouncer
title: useDebouncer
---

<!-- DO NOT EDIT: this page is autogenerated from the type comments -->

# Function: useDebouncer()

```ts
function useDebouncer<TFn, TArgs>(fn, options): object
```

Defined in: [react-bouncer/src/useDebouncer.ts:5](https://github.com/TanStack/bouncer/blob/main/packages/react-bouncer/src/useDebouncer.ts#L5)

## Type Parameters

• **TFn** *extends* (...`args`) => `any`

• **TArgs** *extends* `any`[]

## Parameters

### fn

`TFn`

### options

`DebouncerOptions`

## Returns

`object`

### cancel()

```ts
readonly cancel: () => void;
```

Cancels any pending execution

#### Returns

`void`

### debounce()

```ts
readonly debounce: (...args) => void;
```

Executes the debounced function

#### Parameters

##### args

...`TArgs`

#### Returns

`void`

### getExecutionCount()

```ts
readonly getExecutionCount: () => number;
```

Returns the number of times the function has been executed

#### Returns

`number`
