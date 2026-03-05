import React from "react";
// import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="blog-detail">
      <Link to="/blog" className="back-btn">
        ← Back to blogs
      </Link>
      <h1 className="text-3xl font-bold mb-4">
      I got to play Director ✨ Producing my first video ad
      </h1>
      {/* // header video // */}
      <br />

      <div class="relative w-full pt-[56.25%] rounded-xl overflow-hidden">
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/fn9DfOfEUCQ?si=aAUlsArzQyKwEuIf"
          title="YouTube video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>

      <br />
      <p className="text-lg">
        {/* {blog.content} */}
        Stepping into the role of director for the first time was both exhilarating 
        and humbling. This project began as a graded class project but quickly turned 
        into a full creative journey that demanded vision, collaboration and a sense 
        of storytelling. From ideation to final cut, this project gave me my first 
        experience playing a director role in video production. 
        This blog outlines the processes and steps we went through to project our final project.
      </p>
      <br /> <br />

      <p className="text-lg">
        {/* {blog.content} */}
        Our idea came from imagining a headset ad narrative told across different eras. 
        We wanted to show how music had evolved over centuries with a timeless headset 
        from the 1960s to the 1990s and finally to modern day 2020s. This idea gave 
        us the creative anchor and shaped the tone, style and aesthetic of the various scenes in the video.
        Prior to kickoff, we assigned roles based on skills and interests; from camera operator to lighting 
        lead, sound support, actor coordination, and behind-the-scenes management. As director, I
         made sure everyone understood the vision and felt confident about their responsibilities. 
      </p>

      <br />
      <p className="text-lg">
        In developing our script, we considered key points such as how to move between decades, what 
        actors should do or wear to make each scene believable, specific elements placed in each scene 
        that could communicate the idea of a certain era, the location of the shot and many other 
        factors. As we ran through various ideas, we realized one thing, our choice of story and 
        transition styles greatly influenced the locations we had considered for the video shoot. 
        In all, we had two options, either stick to placing elements that made each scene believable 
        within the shot or choose specific locations that suited the tone and style of each era we 
        wanted to portray. And as a director, I had to make a decision between what was accessible at 
        the time and feasible due to our budget and time constraints.
      </p>

      <br />
    
      <div>
        <p className="text-lg">
          {/* {blog.content} */}
          To bring our timeline concept to life, finding the right locations within our time and budget 
          constraints was essential. We identified three key spaces:
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Green Studio Room (UL Library) - Scene 4: </strong> 
              We chose this studio to create controlled shots and effects for the product.
            </li>
            <li>
            <strong>Plassey House - Scene 1 & 2: </strong> 
            This aesthetically pleasing building provided a perfect backdrop for the 1960s and 
            1990s scenes thanks to its historic architecture and setup.
            </li>
            <li>
            <strong>Student Courtyard - Scene 3: </strong> 
            Our modern-day shot was taken in this yard. We did this to capture a lively and authentic campus feel.
            </li>
          </ul>
        </p>

        <br /> 

        <p className="text-lg">
          Each location offered a distinct atmosphere that supported the visual storytelling 
          without relying too heavily on dialogue.
        </p>
        
        <br />

        <p>
        With the script and locations locked in, we created a storyboard to map out the shots. 
        We generated sketches for the actor and product scenes which helped us predict and 
        visualize transitions, camera movements, and spatial arrangements. The storyboard 
        became our blueprint; guiding the team and ensuring coordination on the day of the shoot.
        </p>

        <br />
        <div className="flex flex-row gap-4">
          <div className="flex-1">
          <img
            src="/images/blog-images/actorBoard.png"
            alt="Photos blog"
            className="flex-1 w-full h-auto rounded"
          />
          </div>

          <div className="flex-1">
          <img
            src="/images/blog-images/studioBoard.jpg"
            alt="Photos blog"
            className="flex-1 w-full h-full rounded"
          />
          </div>
        </div>

        <br />

        <p className="text-lg">
        Before the shoot, we sourced the necessary tools such cameras, tripods, lighting gear, 
        microphones, and everything needed for a smooth production. We also secured approvals 
        for each location which ensured we could shoot uninterrupted and within the allocated 
        time slots. We prepared shot lists, rehearsed transitions, and planned lighting setups 
        to make production efficient. Styling the actor was particularly fun; we chose neutral 
        tones and classic hair for the 1960s, more color, casual outfit and 90s energy for the 
        1990s, and topped it up with a clean, contemporary feel for the modern day shot. These 
        visual cues enhanced the storytelling and helped the viewer instantly recognise each 
        time period.
        </p>
      </div>

      <br />

      <p className="text-lg">
        On the day of the shoot, we started with a debriefing session, tested our lighting setup 
        and settled into our roles. We began the shoot with controlled shots of the product in 
        the Green studio room which appears at the end of our video. The team proceeded to shoot 
        the 1960s and 1990s shot in the Plassey House. The layout, elements and architecture of 
        this location afforded us the ability to transition through time using different sections 
        of the building. We wrapped the shoot outdoors, capturing a crisp and modern aesthetic in 
        the Student Courtyard. This scene tied everything together and brought the story 
        into the present.
      </p>

      <br />

      <p className="text-lg">
      Post-production was where everything clicked. We selected our best shots from 
      each location and era, produced a rough cut to visualize flow and transitions, 
      selected soundtracks that supported each era and mood and finally produced a 
      polished version infused with audio, effects and color. We used Adobe Premiere 
      Pro for editing the video and After Effects for motion and compositing enhancements.
      </p>

      <br />

      <p className="text-lg">
      Directing my first video ad taught me more than I expected, not just about 
      production, but about moving people along with the story, adapting to change 
      in uncertainties, and creative problem solving. Watching an idea evolve from 
      a sketch to a fully edited video felt incredibly rewarding and only goes to 
      show the power of collaboration and teamwork.
      </p>

    </div>
  );
};

export default Video;
