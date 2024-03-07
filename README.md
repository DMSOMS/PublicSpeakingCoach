
# PartyRock: Enhance Your Public Speaking Skills

## Inspiration

Public speaking is an essential skill for both professional and personal development. Yet, it's a challenge for many due to the frequent use of filler words, tendency to ramble, and difficulty in maintaining conciseness. Motivated by the desire to address these issues, our team set out to create a tool that assists individuals in refining their public speaking talents within a nurturing framework.
use PArtyRock to do the GenAi based analysis, it is generously offered free of charge for now and is built on Bedrock (an AWS managed service). 
## What it does

**PartyRock** is an application designed to offer instantaneous feedback on speeches, enabling users to hone their public speaking prowess. It monitors the speech and delivers immediate insights on the usage of filler words, most mobile phones have dictation, however we built a transcriber using AWS transcribe, which not only catches fillers but can even differentiate multiple speakers.  The application specifically targets and counts more than 10 filler words such as "um" and "uh", "you know"  and identifies sentences that may appear rambling, and provides suggestions for enhancement.

## How we built it

The development of **PartyRock** was carried out using **PartyRock**, facilitating compatibility across both iOS, Android and browser platforms. Our speech analysis algorithm is powered by machine learning models that have been trained on extensive collections of speech samples. For delivering accurate feedback, we employed **Claude**, **Claude Instant**, models ensuring swift and efficient analysis.
Html file here uses chrome internal speach recognition, however the best option would be use of Amazon transcribe which will provide best of the class and accent sensitive recognition. the included free transcriber wont need any cloud services though (AWS transcribe would cost a bit). just close this repo it on your machine and hit index.html 
https://partyrock.aws/u/andyshah/l6YuLWB-8G/Speech-Coach-Assistant

## Challenges we ran into

One of the main hurdles we encountered was the difficulty of finding precise machine learning models for speech analysis with a limited dataset. This challenge led us to experiment with various model architectures and data augmentation strategies. Additionally, the development of a real-time application capable of maintaining speech recognition presented synchronization challenges, finding a Transcriber which can effectively recognize various accents. 

## Accomplishments that we're proud of

We take pride in having developed an application that offers constructive and immediate feedback to users, aiding them in improving their public speaking skills. The speech analysis algorithm, once fully optimized, surpassed our expectations in terms of accuracy.

## What we learned

Through this project, we gained insights into the intricacies of developing real-time applications and the complexities involved in finding machine learning models . We learned that factors such as accuracy, latency, and synchronization play pivotal roles in the overall user experience.

## What's next for PartyRock

Looking ahead, we aim to broaden **PartyRock**'s analytical capabilities to include assessments of tone, emotion, facial expressions, and even body language. Our vision also includes the creation of group speaking practice rooms and the integration with presentation tools, further establishing **PartyRock** as a comprehensive aid for public speaking improvement.
