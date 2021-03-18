import React from "react";
import * as E from "./style";

function ExperienceRow({ time, title, description }) {
  return (
    <E.ExperienceRow>
      <div>
        <i className="fas fa-code"></i>
        <div className="title-time">
          <h6>{time}</h6>
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
      </div>
    </E.ExperienceRow>
  );
}

export default function Experience() {
  return (
    <E.Section>
      <div id="Experience">
        <h6>WORKING WITH</h6>
        <h2>Experience</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem, It doesn’t
          matter how great your product or service is if your copy does not
          captivate your audience.
        </p>
        <button>Download Resume</button>
      </div>
      <div>
        <ExperienceRow
          time="Present"
          title="Web designer &amp; Front End"
          description="Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim
          suspendisse in est ante in. Nunc vel risus commodo viverra maecenas
          accumsan."
        />
        <ExperienceRow
          time="JAN 2015 - DEC 2018"
          title="Copywriting & UX Researcher"
          description="Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
        />
        <ExperienceRow
          time="JAN 2015 - DEC 2018"
          title="Graphic Designer & UI Designer"
          description="Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium."
        />
      </div>
    </E.Section>
  );
}
