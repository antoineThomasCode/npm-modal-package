
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

In your component, you have create a new state and use the modal component width props you need : 

```
//state for the modal 
const [isDisplayed, setModalDisplay] = useState(false)

 {isDisplayed ? (
    <Modal setModalState={setModalDisplay} title='My Modal original title'>
    <p> A little paragraph in your modal </p>
    </Modal>) : null}
```

So you can custom Modal with the title props and in the children part you can put anything you want: simple paragraph, formular, images, button...

## Used Technologies / Dependencies

- React :
  - react
  - react-dom
- postcss v8.0
- StoryBook
- babel
- rollup
