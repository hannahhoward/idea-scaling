// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck
} from "spectacle";

import AboutMeSlide from "./slideTemplates/about-me-slide.jsx";
import QuoteSlide from "./slideTemplates/quote-slide.jsx";
import DefinitionSlide from "./slideTemplates/definition-slide.jsx";
import ListSlide from "./slideTemplates/list-slide.jsx";
import SimpleSlide from "./slideTemplates/simple-slide.jsx";
import ConceptSlide from "./slideTemplates/concept-slide.jsx";
import ImageSlide from "./slideTemplates/image-slide.jsx";
import MozillaReleaseSlide from "./slides/mozilla-release.jsx";

//import { headerColor, textColor, bgColor } from "./slideTemplates/utilities.jsx";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#795786",
  tertiary: "#ff5102",
  quartenary: "#031428"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const notes = {
  aboutMe:
    (
      <div>
        <p>Hey everyone! My name's Hannah.</p>
        <p>This is my contact info and the web address for this presentation will given be at the end.</p>
        <p>I'm an aging Gen X developer who's probably been doing this a bit too long. I sometimes go by the handle techgirlwonder and this is my little personal logo</p>
        <p>I work for Carbon Five! We're a product development agency that does boutique software development for all kinds of companys from startups to Fortune 500 enterprises. And we love Elixir!</p>
      </div>
    ),
  salesPitch:
    (
      <div>
        <p>This talk begins with a sales pitch about Erlang.</p>
        <p>It is a sales pitch so bear with me if it's a bit glossy</p>
        <p>How many of you know the relationship between Erlang and Elixir</p>
        <p>Someone raise their hand and tell me the relationship</p>
      </div>
    ),
  facebook:
    (
      <div>
        <p>Facebook employs 500 developers</p>
        <p>What are all these programmers doing?</p>
        <p>Basically facebook is a simple rails app (or actually PHP for real) a dev team could prototype in two days scaled to a billion people</p>
      </div>
    ),
  substantive:
    (
      <div>
        <p>Sales often involves feelings of lack of authenticity</p>
        <p>Even though pretty much everything I said in the pitch at the beginning is mostly true,
          it wasn't very useful beyond making you excited and you were probably left questioning if it's real</p>
      </div>
    ),
  crashesSuck:
    (
      <div>
        <p>how much time do we spend time on the frankly impossible task of preventing our programs from ever crashing?</p>
      </div>
    ),
  letItCrash:
    (
      <div>
        <p>Erlang takes a radically different approach and says .... let it crash. But don't take the system down.
          Instead of making a perfect program, let parts of the program fail and keep the system running.</p>
      </div>
    ),
  relationships:
    (
      <div>
        <p>An organizer's currency is the relationships they build and maintain</p>
        <p>The first people you organize are the folks that are already in your network</p>
        <p>So these are some key practices organizers use to maintain your relationships</p>
      </div>
    ),
  meetPeopleWhereTheyAreAt:
    (<div>
      <p>Meeting people where they're at is a real relief.</p>
      <p>Senior devs often look at what juniors are doing and get disappointed, cause the task feels so great.</p>
      <p>Meeting people where they're at means you focus on how you can expand someone's mind, someone's consciousness, someone's skill right at this moment</p>
    </div>),
  keepASustainingApproach:
    (<div>
      <p>A community organizer knows what goes around comes around</p>
      <p>So being disruptive doesn't always work</p>
      <p>David Heinemeyer Hansen</p>
        <ul>
          <li>Abrasive disruption led to rails popularity</li>
          <li>Let to lack of lasting popularity</li>
        </ul>
    </div>),
  longTermApproach:
      (<div>
        <p>We don't win fast. We often lose.</p>
        <p>Story of trans organizing at healthcare</p>
      </div>)
};

export default class Presentation extends React.Component {

  render() {

    const joeSound = (
      <audio src={require("../assets/joearmstrong.mp3")} controls>
        Your browser does not support the <code>audio</code> element.
      </audio>
    );

    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <AboutMeSlide notes={notes.aboutMe} />
        <ImageSlide image="poohbear.jpg" title="Obligatory Personal Anecdote" text="My dog is cute."/>
        <ImageSlide image="erlang-logo.png" title="Let's Talk About Erlang" notes={notes.salesPitch} />
        <SimpleSlide statement="Erlang is incredible" />
        <SimpleSlide statement="Concurrency sucks" />
        <SimpleSlide fit={false} statement="Erlang Is Based On The Actor Model"/>
        <SimpleSlide fit={false} statement="Erlang Offers Preemptive Scheduling"/>
        <ConceptSlide fit={false} description="Best Language For Concurrency Ever" concept="(Possibly Alternative) Erlang Fact" />
        <SimpleSlide statement="Scaling sucks" />
        <ConceptSlide description="500+" concept="Facebook Programmer Count" notes={notes.facebook}/>
        <SimpleSlide fit={false} statement="Erlang makes scaling practically effortless" />
        <SimpleSlide statement="Preventing crashes sucks" notes={notes.crashesSuck} />
        <ConceptSlide description="Let It Crash" concept="Erlang Motto" notes={notes.letItCrash} />
        <SimpleSlide statement="Results?" />
        <ConceptSlide description="99.9999999%" concept="Ericcson PBX Uptime" />
        <ImageSlide image="whats-app.jpg" title="" />
        <ConceptSlide description="19 Billion" concept="Purchase Price" />
        <ConceptSlide description="..55.." concept="Total # WhatsApp Employees" />
        <SimpleSlide statement="Why isn't everyone using this?" />
        <SimpleSlide transition={["zoom"]} statement={<span>idea<br />scaling</span>} />
        <ListSlide
          title="Outline"
          list={
          [
            "A Story",
            "Why is idea scaling hard?",
            "Community Organizing - For Techies!",
            "Three Rules For Scaling Great Ideas",
            "A Closing Story"
          ]
          }
        />
        <SimpleSlide inverted statement="Once upon a time (April 2017)..." />
        <ImageSlide inverted image="tiedie.gif" title="...I went to Erlang/Elixir Factory..." />
        <ImageSlide inverted image="joearmstrong.jpg" title="...and I met this guy..."/>
        <QuoteSlide inverted quote="The way to judge something is whether the property of the result is good. If something is beautiful, you gotta do it" cite="Joe Armstrong, the guy who made Erlang" />
        <ImageSlide inverted image="hannah.jpg" title="...and then I asked this question..." text={joeSound} />
        <DefinitionSlide inverted term="Public Service Announcement" definition="Don't Ask Questions Like This" />
        <DefinitionSlide inverted definition="http://www.unlimitednovelty.com/2011/07/trouble-with-erlang-or-erlang-is-ghetto.html" term="#ErlangGotIssues" />
        <SimpleSlide inverted statement="Why does this topic scare us?" />
        <SimpleSlide inverted statement="Idea scaling = Selling ?" />
        <SimpleSlide inverted statement="What does selling make you think of?" />
        <ImageSlide inverted image="don-draper.jpg" title="This guy..."/>
        <ImageSlide inverted image="stock-people.jpg" title="This super substantive group..." notes={notes.substantive}/>
        <ImageSlide inverted image="coffee-closer.jpg" title="I am not here to teach you how to sell."/>
        <SimpleSlide inverted statement="Community Organizing" />
        <ImageSlide inverted image="barack-obama.jpg" title="Our president" text="(former)" />
        <SimpleSlide inverted fit={false} statement="Community organizers bring people together to make ideas a reality" />
        <SimpleSlide inverted statement="Ideas like..." />
        <SimpleSlide inverted fit={false} statement="No person should be homeless" />
        <SimpleSlide inverted fit={false} statement="No person should go hungry" />
        <SimpleSlide inverted fit={false} statement="No human being is illegal" />
        <SimpleSlide inverted fit={false} statement="Regular people should have a say in big decisions" />
        <SimpleSlide inverted statement="Self Interest" />
        <SimpleSlide inverted fit={false} statement="What Is The Academic Programmer's Self Interest?" />
        <SimpleSlide inverted fit={false} statement="What Is Today's Programmer's Self Interest?" />
        <SimpleSlide inverted statement="How We Organize" />
        <ConceptSlide inverted description="Win Concrete Improvements" concept="Rule #1"/>
        <SimpleSlide inverted statement="Productive Out Of The Box" />
        <SimpleSlide inverted statement="Faster out of the box" />
        <ConceptSlide inverted description="Give People A Sense Of Their Own Power" concept="Rule #2"/>
        <SimpleSlide inverted statement="Clear The Erlang Cruft" />
        <SimpleSlide inverted statement="Package Manager" />
        <SimpleSlide inverted statement="Use Erlang to Deliver!" />
        <ConceptSlide inverted description="Build Organizations, Build Power" concept="Rule #3"/>
        <SimpleSlide inverted statement="Ideas Live In Communities" />
        <SimpleSlide inverted statement="ElixirBridge" />
        <SimpleSlide inverted statement="Open Source" />
        <SimpleSlide inverted statement="Relationships" notes={notes.relationships} />
        <SimpleSlide inverted statement="#LifeAdvice"/>
        <ConceptSlide inverted description="Meet people where they're at" notes={notes.meetPeopleWhereTheyAreAt} concept="Practice #1" />
        <ConceptSlide inverted description="Keep a sustaining approach" notes={notes.keepASustainingApproach} concept="Practice #2" />
        <ConceptSlide inverted description="Look At The Long Term!" notes={notes.longTermApproach} concept="Practice #3" />
        <SimpleSlide statement="Once upon a time... (the 1990's)" />
        <ImageSlide image="windows.jpg" title="Bad old days" />
        <SimpleSlide statement="Then there was linux..." />
        <SimpleSlide statement="Then there was open source..." />
        <MozillaReleaseSlide />
        <SimpleSlide statement="http://idea-scaling.techgirlwonder.com" />
      </Deck>
    );
  }
}
