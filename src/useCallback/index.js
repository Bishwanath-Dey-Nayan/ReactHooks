import React, { useState, useCallback } from 'react';
import Button from './Button';
import Count from './Counter';
import Text from './Text';

function ParentComponent() {
    const [age, setAge] = useState(18);
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000)
    },[salary])

    return (<div>
        <Text />
        <Count text='age' count={age} />
        <Button handleClick={incrementAge}> Increment Age </ Button>
        <Count text='salary' count={salary} />
        <Button handleClick={incrementSalary}> Increment Salary </ Button>
    </div>)
}

export default ParentComponent;