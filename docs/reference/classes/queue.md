---
id: Queue
title: Queue
---

<!-- DO NOT EDIT: this page is autogenerated from the type comments -->

# Class: Queue\<TValue\>

Defined in: [queue.ts:75](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/queue.ts#L75)

A flexible queue data structure that defaults to FIFO (First In First Out) behavior
with optional position overrides for stack-like or double-ended operations.

Supports priority-based ordering when a getPriority function is provided.
Items with higher priority values will be processed first.

A queue does not have automatic queueing of items. This expects you to hook up the `addItem` and `getNextItem` events.
For automatic queueing with start and stop, use the `Queuer` class.

Default queue behavior:
- addItem(item): adds to back of queue
- getNextItem(): removes and returns from front of queue

Stack (LIFO) behavior:
- addItem(item, 'back'): adds to back
- getNextItem('back'): removes and returns from back

Double-ended queue behavior:
- addItem(item, position): adds to specified position ('front' or 'back')
- getNextItem(position): removes and returns from specified position

## Example

```ts
// FIFO queue
const queue = new Queue<number>();
queue.addItem(1); // [1]
queue.addItem(2); // [1, 2]
queue.getNextItem(); // returns 1, queue is [2]

// Priority queue
const priorityQueue = new Queue<number>({
  getPriority: (n) => n // Higher numbers have priority
});
priorityQueue.addItem(1); // [1]
priorityQueue.addItem(3); // [3, 1]
priorityQueue.addItem(2); // [3, 2, 1]
```

## Extended by

- [`Queuer`](queuer.md)

## Type Parameters

• **TValue**

## Constructors

### new Queue()

```ts
new Queue<TValue>(options): Queue<TValue>
```

Defined in: [queue.ts:80](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/queue.ts#L80)

#### Parameters

##### options

[`QueueOptions`](../interfaces/queueoptions.md)\<`TValue`\> = `defaultOptions`

#### Returns

[`Queue`](queue.md)\<`TValue`\>

## Properties

### options

```ts
protected options: Required<QueueOptions<TValue>> = defaultOptions;
```

Defined in: [queue.ts:76](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/queue.ts#L76)

## Methods

### addItem()

```ts
addItem(item, position): boolean
```

Defined in: [queue.ts:106](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/queue.ts#L106)

Adds an item to the queue

#### Parameters

##### item

`TValue`

##### position

[`QueuePosition`](../type-aliases/queueposition.md) = `'back'`

#### Returns

`boolean`

#### Example

```ts
// Standard FIFO queue
queue.addItem(item)
// Add to front (like unshift)
queue.addItem(item, 'front')
```

***

### clear()

```ts
clear(): void
```

Defined in: [queue.ts:205](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/queue.ts#L205)

Removes all items from the queue

#### Returns

`void`

***

### getAllItems()

```ts
getAllItems(): TValue[]
```

Defined in: [queue.ts:224](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/queue.ts#L224)

Returns a copy of all items in the queue

#### Returns

`TValue`[]

***

### getExecutionCount()

```ts
getExecutionCount(): number
```

Defined in: [queue.ts:231](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/queue.ts#L231)

Returns the number of items that have been removed from the queue

#### Returns

`number`

***

### getNextItem()

```ts
getNextItem(position): undefined | TValue
```

Defined in: [queue.ts:147](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/queue.ts#L147)

Removes and returns an item from the queue using shift (default) or pop

#### Parameters

##### position

[`QueuePosition`](../type-aliases/queueposition.md) = `'front'`

#### Returns

`undefined` \| `TValue`

#### Example

```ts
// Standard FIFO queue
queue.getNextItem()
// Stack-like behavior (LIFO)
queue.getNextItem('back')
```

***

### isEmpty()

```ts
isEmpty(): boolean
```

Defined in: [queue.ts:184](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/queue.ts#L184)

Returns true if the queue is empty

#### Returns

`boolean`

***

### isFull()

```ts
isFull(): boolean
```

Defined in: [queue.ts:191](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/queue.ts#L191)

Returns true if the queue is full

#### Returns

`boolean`

***

### peek()

```ts
peek(position): undefined | TValue
```

Defined in: [queue.ts:174](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/queue.ts#L174)

Returns an item without removing it

#### Parameters

##### position

[`QueuePosition`](../type-aliases/queueposition.md) = `'front'`

#### Returns

`undefined` \| `TValue`

#### Example

```ts
// Look at next item to getNextItem
queue.peek()
// Look at last item (like stack top)
queue.peek('back')
```

***

### reset()

```ts
reset(withInitialItems?): void
```

Defined in: [queue.ts:213](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/queue.ts#L213)

Resets the queue to its initial state

#### Parameters

##### withInitialItems?

`boolean`

#### Returns

`void`

***

### size()

```ts
size(): number
```

Defined in: [queue.ts:198](https://github.com/TanStack/bouncer/blob/main/packages/pacer/src/queue.ts#L198)

Returns the current size of the queue

#### Returns

`number`
