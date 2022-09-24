
# at-npm-modal-package

Welcome to my npm package to create simple modal documentation. You can use it ! it's free ! 

This project is the second part of my Openclassrooms 14th project. 
The first part is here : https://github.com/antoineThomasCode/wealth-health



You can find the npm package on npm here : https://www.npmjs.com/package/at-npm-modal-package


## Requirements

- Node.js v18.9.0 or latest version.
- React v18.2.0
- react-dom v18.2.0

## Installation

In your project, run this command :

`npm install at-npm-modal-package`

import the component and useState  in your code :

```
import {useState} from 'react'
import Modal from "at-modal-package"
```

In your component, you have to create a new state and use the modal component width props you need : 

```
//state for the modal 
const [isDisplayed, setModalDisplay] = useState(false)

 {isDisplayed ? (
    <Modal setModalState={setModalDisplay} title='My Modal original title'>
        <p> A little paragraph in my modal </p>
    </Modal>) : null}
```

You can add components in the modal width the children props : 

```
//state for the modal 
const [isDisplayed, setModalDisplay] = useState(false)

 {isDisplayed ? (
    <Modal setModalState={setModalDisplay} title='My Modal original title'>
        <p> HERE YOU CAN PUT CHILDREN ELEMENTS </p>
    </Modal>) : null}

```

### Animations

You can disable the animation when modal is opening. you'll have to disable the animation props which is 'true' by default : 

```
//state for the modal 
const [isDisplayed, setModalDisplay] = useState(false)

 {isDisplayed ? (
    <Modal setModalState={setModalDisplay} title='My Modal original title' animation={false}>
        <p> A little paragraph in my modal </p>
    </Modal>) : null}
```

### Accessibility

You can also disable the closing accessibility on ESC keyboard key. You'll have to disable the 'closeAccessibility' value which is on true by default : 

```
//state for the modal 
const [isDisplayed, setModalDisplay] = useState(false)

 {isDisplayed ? (
    <Modal setModalState={setModalDisplay} title='My Modal original title' closeAccessibility={false}>
        <p> A little paragraph in my modal </p>
    </Modal>) : null}
```

## Used Technologies / Dependencies

- React :
  - react
  - react-dom
- postcss v8.0
- StoryBook
- babel
- rollup
