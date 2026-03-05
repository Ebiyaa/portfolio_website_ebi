import React from "react";
// import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Dress = () => {
  return (
    <div className="blog-detail">
      <Link to="/blog" className="back-btn">
        ← Back to blogs
      </Link>
      <h1 className="text-3xl font-bold mb-4">
        Second Skin <br />
        An Interactive Art Installation
      </h1>
      <p className="text-lg">
        “What I do and what I touch has an impact on the environment”
      </p>
      {/* // header video // */}
      <br />
      
      <img
        src="/images/blog-images/dress_cover.png"
        alt="glow-dress"
        className="w-full h-auto mb-4 rounded"
      />
      <br />
      <p className="text-lg">
        In public spaces, emotions are often hidden, muted, or ignored. Second
        Skin explores how our inner states influence the people and environments
        around us, even when no words are spoken. This art installation
        reimagines clothing not as decoration, but as a responsive medium of
        emotional communication. The installation consists of two interconnected
        dresses made out of recycled plastic. One dress is worn by a
        participant, while the other stands on a mannequin in a shared
        exhibition space. Through smart sensors, the participant's emotions can
        be expressed with different light colours on the mannequin's dress. When
        visitors touch the mannequin, the corresponding areas on the human-worn
        dress illuminate in real time, translating anonymous touch into visible
        light. Even when the wearer does not see who touched the mannequin, they
        can feel the presence through the light on their dress.
      </p>
      <br /> <br />
      <p className="text-lg">
        {/* {blog.content} */}
        This indirect exchange creates a moment of emotional interdependence
        between unfamiliar bodies. The interaction is mediated, yet intimate. It
        invites reflection on how seemingly small or anonymous actions can
        affect another person’s emotional state. Second Skin is not a product,
        but an experience designed to ask people to slow down and feel before
        they think.
      </p>
      <br />
      <p className="text-lg">
        At its core, Second Skin visualises a simple idea: Emotions are not
        isolated. They travel. They influence. They shape the world. By
        transforming invisible interaction into light, the installation makes
        empathy tangible. It also highlights that touch can comfort or
        overwhelm; presence can support or unsettle; and small actions can have
        visible consequences.
      </p>
      <br />
      <img
        src="/images/blog-images/dress_storyboard.jpg"
        alt="storyboard"
        className="w-full h-auto mb-4 rounded"
      />
      {/* SDG & Tech */}
      <div>
        <p className="text-lg">Sustainable Development Goals (SDG)</p>
        <p className="text-lg">
          {/* {blog.content} */}
          Second Skin primarily aligns with SDG 3: Good Health and Well-being,
          as it foregrounds emotional awareness, empathy, and non-verbal
          connection. By externalising emotional and physical interaction
          through light, the installation encourages reflection on care,
          sensitivity, and mental well-being in shared spaces.
        </p>
        <br />
        <p className="text-lg">
          The project also supports SDG 12: Responsible Consumption and
          Production. The dresses are constructed from recycled plastic
          materials, challenging the perception of waste and transforming
          discarded matter into an emotionally responsive artefact.
          Sustainability is not only material but relational — highlighting how
          our actions leave traces on both environments and people.
        </p>

        <br />
        <br />

        <p className="text-lg">Technology</p>
        <p className="text-lg">
          The dress worn by the human participant integrates a set of biosensors
          designed to capture subtle physiological signals associated with
          emotional arousal, such as heart rate variability and galvanic skin
          responses. These bio signals are then translated into emotions and
          visually reflected via the LED system in the other dress.
        </p>
        <br />

        <p className="text-lg">
          Each dress functions as both transmitter and receiver within a
          Bluetooth Low Energy (BLE) network. When the human-worn dress detects
          a significant shift in bio signals, it transmits a coded emotional
          state to the other dress. The LED of the mannequin's dress is then
          activated with the colour of the lights based on the recorded mental
          state. For example, if the human wearer is sad, their dress would pick
          up the bodily signs and communicate the emotion to the other dress,
          making it light up in blue.
        </p>
        <br />
        <p className="text-lg">
          In addition, physical interaction is captured through distributed
          pressure sensors embedded in the mannequin's dress. When people touch
          the dress, localised pressure data is transmitted through the BLE
          channel. The corresponding zones on the human-worn dress then
          illuminate in a warm golden hue, mapping the gesture across the body.
        </p>
      </div>
      <br />
      <br />
      <img
        src="/images/blog-images/dress_flowchart.jpg"
        alt="flowchart"
        className="w-full h-auto mb-4 rounded"
      />
      <div>
        <p className="text-lg">Rules of Interaction</p>
        <p className="text-lg">
          Inputs:
          <ul className="list-disc list-inside mt-2">
            <li>Physical touch on the mannequin’s dress.</li>
            <li>Human wearer’s physiological signal changes.</li>
            <li>System Action</li>
            <li>Touch pressure mapped to light intensity.</li>
            <li>Emotional arousal mapped to colour spectrum.</li>
            <li>Touch and bio signal changes detected via sensors.</li>
            <li>Sensor data is transmitted through Bluetooth.</li>
          </ul>
        </p>

        <p className="text-lg">
          Output (LED on Dresses):
          <ul className="list-disc list-inside mt-2">
            <li>
              Glows brighter with firmer touch, soft glow for light touch.
            </li>
            <li>
              Warmer colours for high emotional arousal, cooler tones for calmer
              states. For example, sadness appears as blue, anger as red,
              confusion as purple, and so on.
            </li>
          </ul>
        </p>

        <p>
          Latency Rule <br />
          The maximum signal delay for receiving signals would be around 300-500
          milliseconds. If the connection between the 2 dresses is lost, both
          dresses enter a disconnected idle state by dimming their lights.
        </p>
      </div>
    </div>
  );
};

export default Dress;
