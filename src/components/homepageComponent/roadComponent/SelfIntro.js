import React, { useState } from 'react';
import Typist from 'react-typist';
import handleViewport from 'react-in-viewport';

const SelfIntroSection = (props) => {
  const { inViewport, forwardedRef } = props;
  const [isTyping, startTyping] = useState(false);
  if (inViewport && !isTyping) {
    startTyping(inViewport);
  }

  return (
    <div ref={forwardedRef}>
      { isTyping && (
      <Typist blink>

        <span>
          Hi!This is Haohang(Billy) Li, a programmer who just graduated from UVic
          <Typist.Backspace count={4} delay={500} />
          University of Victoria.
          <Typist.Delay ms={1000} />
          &nbsp;&nbsp;&nbsp;Thanks to co-op program,
          <Typist.Delay ms={300} />
          I already have 16 month work experience.
          <Typist.Delay ms={1800} />
          <br />
          Currently, because of COVID-19, I am staying at home and working for Canada Drives as a developer.  &nbsp;
          <Typist.Delay ms={1800} />
          But,
          <Typist.Backspace count={4} delay={500} />
          BUT!! I still like to show off my skills!!
          <Typist.Delay ms={1000} />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Here are some of my key skills: &nbsp;
        </span>
      </Typist>
      )}
    </div>
  );
};

const SelfIntro = handleViewport(SelfIntroSection /** options: {}, config: {} * */);

export default SelfIntro;
