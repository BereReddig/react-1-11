import { useState } from 'react';
import Button from './Button/Button';

function ButtonArray() {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    function clickHandler(number) {
        switch (number) {
            case "01":
                {
                    setIsActive1(true);
                    setIsActive2(false);
                    setIsActive3(false);
                }
                break;
            case "02":
                {
                    setIsActive2(true);
                    setIsActive1(false);
                    setIsActive3(false);
                }
                break;
            case "03":
                {
                    setIsActive3(true);
                    setIsActive1(false);
                    setIsActive2(false);
                }
                break;
        }
    };

    return (
        <div class='container-btn-array' style={{backgroundColor: 'black'}}>
            <Button
                id="01"
                isActive={isActive1}
                href="#"
                number="01"
                content="overview"
                clicked={clickHandler}
            />
            <Button
                id="02"
                isActive={isActive2}
                href="#"
                number="02"
                content="internal structure"
                clicked={clickHandler}
            />
            <Button
                id="03"
                isActive={isActive3}
                href="#"
                number="03"
                content="surface geology"
                clicked={clickHandler}
            />
        </div>
    );
}

export default ButtonArray;
