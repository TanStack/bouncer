---
id: DebouncerOptions
title: DebouncerOptions
---

<!-- DO NOT EDIT: this page is autogenerated from the type comments -->

# Interface: DebouncerOptions

Defined in: [debouncer.ts:4](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/debouncer.ts#L4)

Options for configuring a debounced function

## Properties

### leading?

```ts
optional leading: boolean;
```

Defined in: [debouncer.ts:9](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/debouncer.ts#L9)

Whether to execute on the leading edge of the timeout.
Defaults to false.

***

### wait

```ts
wait: number;
```

Defined in: [debouncer.ts:14](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/debouncer.ts#L14)

Delay in milliseconds before executing the function
Defaults to 0ms
