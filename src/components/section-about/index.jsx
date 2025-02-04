import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        {about.split('\n').map((line, index, array) => ((index + 1) === array.length ? <p>
          {line}
        </p> 
          : <><p>
          {line}
        </p> 
        <br></br>
          </>
        ))}
      </div>
    </Section>
  );
};

export default SectionAbout;
