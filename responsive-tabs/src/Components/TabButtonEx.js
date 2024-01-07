import React, { useState } from 'react';
import TabButton from './TabButton';
import EXAMPLES from '../data';
import './TabButtonEx.css';

const TabButtonEx = () => {
    const [selectedTopic, setSelectedTopic] = useState('');

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }
    return (
        <section id="examples">
            <menu>
                <TabButton isSelected={selectedTopic ==='first'} onSelect={() => handleSelect('first')}>First</TabButton>
                <TabButton isSelected={selectedTopic ==='second'} onSelect={() => handleSelect('second')}>Second</TabButton>
                <TabButton isSelected={selectedTopic ==='third'} onSelect={() => handleSelect('third')}>Third</TabButton>
            </menu>
        {/* dynamically render the info of the button that is selected */}
        {!selectedTopic && <p id="dynamic-p">Please select a topic above.</p>}
        {selectedTopic && <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>}
        </section>
    );
};


export default TabButtonEx;