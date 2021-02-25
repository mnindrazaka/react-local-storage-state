# react-local-storage-state
Hook for persisting React state to local storage

## Install

```bash
npm install react-local-storage-state
```

## Usage

```javascript
import useLocalStorageState from 'react-local-storage-state'

const [name, setName] = useLocalStorageState('name', 'm. nindra zaka')
```

## API

### Return Type

`useLocalStorageState` will return `[value, setValue]`. This is the same like `React.useState`

### Parameters

#### key

type `string`

This is the key that will be used when saving and getting data from local storage. Make sure you use a unique name for different state

#### default value

type `any`

This is the default value that will be used for the state.