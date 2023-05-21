import { Container } from "@/styles/Global";
import {
    AboutSection,
    AboutSectionContent,
    AboutSectionText,    
  } from "./style";

export const AboutMe = (): JSX.Element =>{
    return (
        <AboutSection id="aboutme">
            <Container>
                <AboutSectionContent>
                    <AboutSectionText>
                        <h2>Something about me...</h2>
                        <h3>Passionate about technology since forever, I have discovered my new career path in programming. 
                            Every line of code I write is a challenge and an opportunity to create innovative solutions. 
                            Through programming, I have the power to bring my ideas to life, turning abstract concepts into 
                            functional applications and systems. Logic and creativity merge in this journey, making it even 
                            more thrilling. With each problem solved and project completed, I feel a unique sense of 
                            accomplishment. Being involved in this dynamic and ever-evolving world motivates me to continue 
                            learning, refining my skills, and contributing to the digital transformation. I am excited to 
                            pursue my passion for technology and embark on an exciting career in programming.</h3>
                    </AboutSectionText>
                </AboutSectionContent>
            </Container>
        </AboutSection>
        
    )
}