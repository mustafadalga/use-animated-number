# Vite Plugin - React.js Animated Number

A custom React hook for animating numbers in React.js applications.

<p align="center">

[![version](https://img.shields.io/npm/v/use-animated-number.svg)](https://www.npmjs.com/package/use-animated-number)

</p>

## Installation

You can install this plugin through npm:

```sh
npm i use-animated-number
```

## Usage

<br /> 

### Example

```tsx
import { useState } from "react";
import useAnimatedNumber from "use-animated-number";

export default function Header() {
    const duration: number = 300;
    const [ balance, setBalance ] = useState<number>(0);
    const animatedBalance: string = useAnimatedNumber(balance, duration);

    const increase = () => {
        const randomIncrement: number = Math.floor(Math.random() * 100) + 1;
        setBalance(prevState => prevState + randomIncrement);
    }

    return (
        <section>
            <span> {animatedBalance} </span>
            <button onClick={increase}>Increase balance</button>
        </section>
    )
}
```

<br /> 

## License

[![License](https://img.shields.io/badge/LICENSE-GPL--3.0-orange)](https://github.com/mustafadalga/use-animated-number/blob/main/LICENSE)


