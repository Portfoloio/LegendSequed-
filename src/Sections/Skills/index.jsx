import * as S from "./style";

function Skill({ name, rate, icon }) {
  return (
    <div id="skill-container">
      <S.Skill>
        <div>
          <i className={`fab fa-${icon}`}></i>
          <h3>{name}</h3>
        </div>
        <p>{rate}</p>
      </S.Skill>
    </div>
  );
}
export default function Skills() {
  return (
    <S.Section>
      <div id="skill-parent">
        <Skill name="Html" icon="html5" rate="80%" />
        <Skill name="CSS" icon="css3-alt" rate="90%" />
        <Skill name="JavaScript" icon="js-square" rate="60%" />
        <Skill name="React" icon="react" rate="70%" />
        <Skill name="Html" icon="html5" rate="90%" />
        <Skill name="CSS" icon="css3-alt" rate="60%" />
        <Skill name="React" icon="react" rate="100%" />
      </div>
      <div id="Skills">
        <h6>SKILLS</h6>
        <h2>Creative Works</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem, It doesn’t
          matter how great your product or service is if your copy does not
          captivate your audience.
        </p>
      </div>
    </S.Section>
  );
}
