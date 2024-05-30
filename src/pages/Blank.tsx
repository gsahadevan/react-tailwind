import { useState } from 'react';
import Headline from '../components/base/typography/Headline';
import Dropdown from '../components/core/Dropdown/Dropdown';

const Blank = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    function toggleDropdown() {
        alert('ji');
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Headline>Blank</Headline>

            <input type='button' value='notification' onClick={toggleDropdown} aria-label="Notifications" aria-haspopup="true" />
            <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
                afdadf
                adfadf
                adfadfadfadfadf
                asdfadfafd
                adfadfafd
            </Dropdown>
        </>
    );
};

export default Blank;
