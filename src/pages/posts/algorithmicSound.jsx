import React from "react";
// import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Sound = () => {
  return (
    <div className="blog-detail">
      <Link to="/blog" className="back-btn">
        ← Back to blogs
      </Link>
      <h1 className="text-3xl font-bold mb-4">
        My First Experiment with Algorithmic Sound 🎼 <br />
        in SuperCollider
      </h1>
      {/* // header video // */}
      <br />
      <div class="relative w-full pt-[56.25%] rounded-xl overflow-hidden">
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/VE5lmWcN2pE?si=aYDDOAAkAYxlzp_X"
          title="YouTube video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <br />
      <p className="text-lg">
        {/* {blog.content} */}
        Currently exploring the concept of algorithmic and interactive sound
        generation in my Masters in Interaction Design. Instead of composing
        music traditionally note by note, we learned how sound can be generated
        through rules and randomness.
      </p>
      
      <p className="text-lg">
        {/* {blog.content} */}
        This led me to experiment with  
        <a class="font-bold underline" href="https://supercollider.github.io/">SuperCollider</a> for the
        first time.
      </p>
      <br />
      <p className="text-lg">
        SuperCollider is a programming environment designed for real-time audio
        synthesis, algorithmic composition, and experimental sound design. It
        allows developers and artists to write code that generates sound
        dynamically. Rather than manually crafting each note or audio event, the
        composer defines a system of behaviours, and the computer produces
        unique sonic outcomes each time the program runs.
      </p>
      <br />
      <p className="text-lg">
        This experiment became my first hands-on attempt at algorithmic sound
        performance, where I created a simple rule-based system that generates
        tones based on random events and conditional logic
      </p>
      <br />
      <div>
        <p className="text-xl"><strong>Understanding the SuperCollider Environment</strong></p>
        <p className="text-lg">
          {/* {blog.content} */}
          SuperCollider works through two main components:
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>The language interpreter: </strong>
              where you write and execute code.
            </li>
            <li>
              <strong>The audio server:</strong>
              the engine responsible for producing sound.
            </li>
            <br />
            Before any sound can be generated, the audio server must be booted
            up and ready to receive commands from the language interpreter.
          </ul>
        </p>

        <br />

        <p className="text-lg">
          Once the server is running, sound events can be produced using a
          SynthDef (Synthesizer Definition). A SynthDef describes how a sound
          behaves, including its waveform, frequency, and duration. Every time
          the system triggers a sound event, the SynthDef determines how that
          sound is produced.
        </p>

        <br />
      </div>

        {/* sound rules */}
      <div>
        <p className="text-xl"><strong>Designing Rule Based Sound Behaviour</strong></p>
        <p className="text-lg">
          {/* {blog.content} */}
          Instead of composing a fixed piece of music, I defined two simple rule
          systems that determine how sounds are generated. These rules rely on
          randomisation and conditional logic, which means the sound output
          changes every time the program runs.
          <br /> <br />

          <ul className="list list-inside mt-2">
            <li>
              <strong>1. Dice-Based Event Selection </strong> <br />
              The first rule system simulates the roll of a six-sided dice. Each
              number corresponds to a different sonic behaviour. When the
              program generates a number between 1 and 6, it interprets the
              result using predefined rules that determine the pitch and
              structure of the sound produced. This rule introduces variation 
              and unpredictability. Sometimes the system produces a single 
              stable tone, sometimes a burst of multiple tones, and occasionally 
              complete silence.
            </li>
          </ul>
        </p>
        <img src="" alt="" srcset="" />

        <br />

        <p className="text-lg">
          <ul className="list list-inside mt-2">
            <li>
              <strong>2. Word Length Rule </strong> <br />
              To add another layer of behaviour, I introduced a second rule that 
              responds to text input length. Instead of using random numbers, this rule 
              evaluates the number of characters in a word and maps it to a pitch value.
              When both rule systems are executed simultaneously, their outputs overlap. 
              The result is a layered sound texture, where tones generated from the 
              dice rule interact with tones triggered by the text rule.
            </li>
          </ul>
        </p>
        <br />
        <img src="" alt="" srcset="" />

        <br />
      </div>

      <div>
        <p className="text-xl"><strong>Creating a Generative Performance Loop</strong></p>
        <p className="text-lg">
          {/* {blog.content} */}
          To transform the rules into a continuous sound performance, 
          I implemented a routine loop that repeatedly executes both systems.
        Three elements shape the behaviour of the performance:
          <ul className="list-disc list-inside mt-2">
            <li>
              Random number generation for the dice rule, which creates variability 
              in the sound output.
            </li>
            <li>
                Conditional rules that determine how the system responds to different dice rolls and
                 text inputs, shaping the structure of the sound.
            </li>
            <li>
            Timed scheduling that allows the system to produce sound events at regular intervals, creating a 
            rhythmic flow to the performance.
            </li>
          </ul>
        </p>
        <p>
        The system introduces random wait intervals between 0.5 and 2 seconds, allowing the sounds to 
        appear at irregular times. Because the loop runs continuously, the system produces an ever-changing 
        sequence of tones, making each performance slightly different.  
        </p>
        <br />
        <img src="" alt="" srcset="" />

        <br />
      </div>

      {/* takeaways */}
      <div>
        <p className="text-xl"><strong>What This Experiment Taught Me</strong></p>
        <p className="text-lg">
          {/* {blog.content} */}
          This project was a small introduction to generative 
          and algorithmic sound design where the system takes a set of rules that 
          govern sonic behavior and becomes the performer producing new 
          variations of sound every time the code runs. 

          <br /> <br />
          
          What I found particularly interesting was how logic structures can 
          create dynamic soundscapes. Randomness, conditional rules, 
          and timing can transform a few lines of code into something that feels 
          performative. As someone coming from a UX and interactive design 
          background, this experiment also made me think differently about 
          interaction. Sound doesn’t always have to be triggered directly by a 
          user action, it can emerge from systems, behaviours, and generative 
          processes.
        </p>
      </div>


    </div>
  );
};

export default Sound;
