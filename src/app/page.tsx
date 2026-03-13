"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Bomb, Zap, Skull, MessageSquare, HelpCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="mediumSizeLargeTitles"
      background="circleGradient"
      cardStyle="solid"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="SUPERKOT"
          navItems={[
            { name: "Achievements", id: "achievements" },
            { name: "Signature Moves", id: "moves" },
            { name: "Stats", id: "stats" },
            { name: "Testimony", id: "testimony" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Vitaliy 'SUPERKOT' - CS2's Greatest Legend"
          description="Witness the rise of a gamer so legendary, so devastating with the flash grenade, so absolutely unable to click heads, that he has single-handedly redefined what it means to lose. With a K/D ratio that makes even bots question their existence (2 kills for every 20 deaths), SUPERKOT stands alone at the peak of competitive disaster."
          tag="THE WORST PLAYER EVER"
          tagIcon={Bomb}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Watch the Chaos", href: "#achievements" },
            { text: "See the Stats", href: "#stats" }
          ]}
          buttonAnimation="blur-reveal"
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/man-portrait-with-blue-lights-visual-effects_23-2149419465.jpg",              imageAlt: "Vitaliy SUPERKOT legendary worst CS2 gamer"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-terrifing-clown_23-2150549668.jpg",              imageAlt: "Death screen from SUPERKOT gameplay"
            }
          ]}
          mediaAnimation="slide-up"
          rating={1}
          ratingText="1 Star: Zero Aim, Maximum Chaos"
        />
      </div>

      <div id="achievements" data-section="achievements">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "The SUPERKOT Legacy" }
          ]}
          buttons={[
            { text: "Experience the Pain", href: "#moves" }
          ]}
          buttonAnimation="opacity"
          useInvertedBackground={true}
        />
      </div>

      <div id="signature-moves" data-section="signature-moves">
        <FeatureCardEight
          title="Signature Moves That Define SUPERKOT"
          description="Master the devastating techniques that have made SUPERKOT a household name in competitive gaming. These aren't skills—they're art forms of failure."
          tag="TACTICAL DISASTERS"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "The Teammate Blind",              description: "Flash grenade thrown with surgical precision—directly at your own team's faces. A signature move that single-handedly loses rounds and friendships simultaneously.",              imageSrc: "http://img.b2bpic.net/free-vector/bomb-smoke-effect-realistic-style_23-2148220178.jpg",              imageAlt: "Teammate blinded by SUPERKOT flash grenade"
            },
            {
              id: 2,
              title: "Perfect Spray Control (Into Walls)",              description: "Unload an entire magazine with pristine spray pattern accuracy—every single bullet finds empty air, walls, or occasionally your teammate's body armor.",              imageSrc: "http://img.b2bpic.net/free-vector/set-black-bullets_1284-46491.jpg",              imageAlt: "SUPERKOT spray pattern missing every shot"
            },
            {
              id: 3,
              title: "Strategic Positioning Backwards",              description: "Stand in the exact worst position on every map, rotate exactly when you shouldn't, and somehow manage to get shot from behind every single time.",              imageSrc: "http://img.b2bpic.net/free-photo/business-person-looking-finance-graphs_23-2150461327.jpg",              imageAlt: "SUPERKOT positioned behind entire team"
            },
            {
              id: 4,
              title: "The Accidental Teamkill",              description: "Crossfire management so poor that you eliminate your own teammates more effectively than the enemy team ever could. Consistency is key.",              imageSrc: "http://img.b2bpic.net/free-photo/men-playing-rugby-field_23-2150062039.jpg",              imageAlt: "SUPERKOT eliminating teammate by accident"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="stats" data-section="stats">
        <MetricCardTwo
          title="The Numbers That Tell the Story"
          description="SUPERKOT's legendary statistics that prove greatness comes in many forms—destruction, humiliation, and pure entertainment value."
          tag="VERIFIED DISASTER"
          tagIcon={Skull}
          tagAnimation="blur-reveal"
          metrics={[
            { id: "kd-ratio", value: "2:20", description: "2 Kills for Every 20 Deaths - The Holy Grail of Gaming Failure" },
            { id: "acc-rate", value: "8.2%", description: "Accuracy Rate - Missing Headshots at Point Blank Range" },
            { id: "flash-team", value: "78%", description: "Teammate Blind Rate - Flash Grenades Gone Wrong" },
            { id: "rounds-played", value: "1,247", description: "Competitive Rounds - Still Learning How to Click" },
            { id: "rage-quits", value: "342", description: "Times Teammates Rage Quit His Lobbies" },
            { id: "clips-viral", value: "847", description: "Viral Gaming Clips (All Highlighting Failures)" }
          ]}
          gridVariant="bento-grid"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What His Teammates Are Saying"
          description="Real reactions from real people who've experienced the SUPERKOT phenomenon firsthand. Prepare for emotional range."
          tag="UNFILTERED REACTIONS"
          tagIcon={MessageSquare}
          tagAnimation="opacity"
          testimonials={[
            {
              id: "t1",              name: "DevastatedAlex",              role: "Teammate - 47 Games Lost",              testimonial: "I've seen things in those matches that I can't unsee. The spray control into the wall while enemies push. The flash grenade that blinded me during a 1v1. I'll be in therapy forever. 10/10 experience.",              imageSrc: "http://img.b2bpic.net/free-photo/mad-man-throwing-pillow-frustration-cursing-own-team-getting-defeated_482257-119916.jpg",              imageAlt: "DevastatedAlex frustrated expression"
            },
            {
              id: "t2",              name: "ConfusedMartin",              role: "Teammate - Still Processing",              testimonial: "I genuinely cannot understand the physics of missing a shot from 2 meters away. Is he using an invisible weapon? Does his mouse have negative sensitivity? I have so many questions and no answers.",              imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-couple-boy-girl-wearing-casual-clothes-having-fun-smiling-sticking-out-tongues-showing-ok-sign-light_141793-58888.jpg",              imageAlt: "ConfusedMartin bewildered expression"
            },
            {
              id: "t3",              name: "LaughingJohn",              role: "Clip Watcher - Entertainment Value Appreciated",              testimonial: "Honestly, SUPERKOT has brought more joy to my life than any professional player ever could. Every clip is a masterpiece of gaming comedy. I haven't laughed this hard in years. Pure art.",              imageSrc: "http://img.b2bpic.net/free-photo/concentrated-man-sitting-home-indoors-play-games-with-joystick_171337-16824.jpg",              imageAlt: "LaughingJohn amused expression"
            },
            {
              id: "t4",              name: "DisappointedSarah",              role: "Former Teammate - Moving On",              testimonial: "I believed in you, SUPERKOT. I believed we could make it to Gold rank together. You had one job: not flash me. You had ONE job and you did it perfectly... in the worst way possible.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-man-gesturing-isolated_176474-43858.jpg",              imageAlt: "DisappointedSarah disappointed expression"
            },
            {
              id: "t5",              name: "StreamerBob",              role: "Content Creator - Grateful",              testimonial: "SUPERKOT single-handedly revitalized my streaming career. Every guest appearance is guaranteed views, laughs, and clip compilations that go viral. He's a legend in the truest sense.",              imageSrc: "http://img.b2bpic.net/free-photo/mad-man-throwing-pillow-frustration-cursing-own-team-getting-defeated_482257-119916.jpg",              imageAlt: "StreamerBob impressed expression"
            },
            {
              id: "t6",              name: "CoachMike",              role: "Aspiring Coach - Case Study",              testimonial: "I use SUPERKOT's gameplay as teaching material. Not for what to do—for what absolutely never to do under any circumstance. His decision-making is a masterclass in the wrong choices.",              imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-couple-boy-girl-wearing-casual-clothes-having-fun-smiling-sticking-out-tongues-showing-ok-sign-light_141793-58888.jpg",              imageAlt: "CoachMike analytical expression"
            }
          ]}
          gridVariant="bento-grid"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about gaming's most catastrophic legend."
          tag="MYSTERY SOLVED"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          faqs={[
            {
              id: "faq1",              title: "Is SUPERKOT actually trying?",              content: "This is the eternal question. Video evidence suggests either complete lack of mouse control, severe visual impairment, or intentional comedic genius. We may never know. His teammates certainly hope it's intentional."
            },
            {
              id: "faq2",              title: "How does he have 2 kills if his accuracy is 8.2%?",              content: "Science cannot explain this anomaly. Some theorize these are accidental clicks or friendly fire eliminations that somehow counted. Others believe in miracles. The 8.2% includes only his intended shots."
            },
            {
              id: "faq3",              title: "Will SUPERKOT ever improve?",              content: "At the current trajectory of 0% improvement per 100 games played, mathematical models suggest improvement is theoretically impossible. He has achieved a equilibrium state of pure, consistent failure."
            },
            {
              id: "faq4",              title: "Is there any team willing to sponsor him?",              content: "Yes—energy drink companies, streaming platforms, and therapy services have all expressed interest. His entertainment value is unmatched. His competitive value remains below zero."
            },
            {
              id: "faq5",              title: "What's his secret to success?",              content: "Unwavering confidence in the face of overwhelming evidence. SUPERKOT genuinely believes each round will be different. Spoiler alert: it never is. This optimism is either inspiring or deeply concerning."
            },
            {
              id: "faq6",              title: "Can we learn anything from SUPERKOT?",              content: "Absolutely. He's taught the gaming community that failure can be beautiful, entertaining, and somehow more valuable than victory. He's a philosopher disguised as a terrible CS2 player."
            }
          ]}
          mediaAnimation="blur-reveal"
          faqsAnimation="opacity"
          mediaPosition="right"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Join the SUPERKOT Movement - Celebrate Gaming's Greatest Legend Today"
          animationType="background-highlight"
          buttons={[
            { text: "Follow the Chaos on Twitch", href: "https://twitch.tv" },
            { text: "Subscribe to the Madness", href: "https://youtube.com" }
          ]}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="SUPERKOT"
          copyrightText="© 2025 The SUPERKOT Chronicles | Gaming's Greatest Disaster | A Tribute to Legendary Failure"
          columns={[
            {
              title: "The Legend",              items: [
                { label: "About SUPERKOT", href: "#achievements" },
                { label: "Signature Moves", href: "#moves" },
                { label: "The Stats", href: "#stats" }
              ]
            },
            {
              title: "Community",              items: [
                { label: "Testimonials", href: "#testimony" },
                { label: "FAQ", href: "#faq" },
                { label: "Join the Hype", href: "#contact" }
              ]
            },
            {
              title: "Follow",              items: [
                { label: "Twitch Channel", href: "https://twitch.tv" },
                { label: "YouTube Clips", href: "https://youtube.com" },
                { label: "Discord Server", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}