const e=`---
layout: blog
title: Our Movement System
date: 2026-04-23T10:00:00.000-07:00
thumbnail: pie-web/public/assets/absmom_banner.jpg
featuredImage: pie-web/public/assets/GameScreenshots/AbsoluteMomentum/gotta_go_fast.jpg
---
# The Winter Arc 
What is the most important part of a parkour racing game? The MOVEMENT

I'm Ben, the lead software engineer for Absolute Momentum ![Ben Drawing](assets/phillipk_ben_portrait.png)

Over the past few months I've been working on refining the movement system. 
Our goal is to make it feel fast, fluied, and offer rewarding skill expression.

The truth is we've had several iterations of our movement system throughout the development 
of our game.

During the winter of 2025-26, I decided to rework our movement for the game. Our prototypes 
have been pretty promising but we’ve felt that something was missing and the different 
systems weren’t rewarding player expression and maintaining (queue Invincible music)
![Absolute Momentum Invincible Title Frame](assets/GameScreenshots/AbsoluteMomentum/absmom_title_parody.jpg)

# Base Movement
When reworking our player movement, I started with the base movement. I completely reworked how 
the clamping speed and acceleration are handled. 

Before, we had some animation curves that defined how much drag the player would have at any 
given speed, however this felt unintuitive to work with and came with some drawbacks. 

For example, it was really difficult to get the player to feel right when accelerating from a 
dead stop often times being either too fast or way too slow.

The new system ramps up the acceleration over time and removes the drag completely while setting 
a maximum deceleration amount. 

The improved acceleration enables the movement to feel more natural as we modify exactly how long 
we want the player to accelerate. Right now, the player takes exactly 1.5 seconds to reach max 
acceleration and can top out at 25 mph.

Removing the drag and setting a max deceleration allows the player to maintain high momentum for 
longer, and actions such as landing on the ground no longer instantly eat all of your speed. 
This change combined with the acceleration change have resulted in a more controlled feel compared 
to our previous player controllers.
![Walking Around](assets/GameScreenshots/AbsoluteMomentum/walkaround.gif)


# Advanced Movement
Next I tackled the advanced movement mechanics such as wallrunning and sliding.

Wallrunning enables players to accelerate past the max speed on foot.
![Wallrun](assets/GameScreenshots/AbsoluteMomentum/conceptwallrun.gif)

Sliding allows the player to maintain ABSOLUTE MOMENTUM as they traverse through the map, 
especially after wallrunning.
![Sliding](assets/GameScreenshots/AbsoluteMomentum/conceptslide.gif)

Vaulting is a small quality of life feature that gives players some forgiveness if they just 
nearly miss an edge during a jump
![Vaulting](assets/GameScreenshots/AbsoluteMomentum/conceptvaulting.gif)

Chaining these movement mechanics together will provide players with a multitude of ways to 
express themselves, even finding different shortcuts and paths on our different courses.
![All Together Now](assets/GameScreenshots/AbsoluteMomentum/conceptchaintogether.gif)


# Item System
While still in the prototyping phase, we are working on an item system. At the time of writing, 
we’ve split our items into 2 categories, movement enhancements and offensive abilities. 

The movement enhancements we have so far are a dash, a movement speed boost, and height elevation. 
We have basic prototypes coded into the game, however I’m still refining it to ensure it functions to complement player expression rather than be a necessity. 

Our prop artist, **Yasmin Lazu [(@artbylazu)](https://www.instagram.com/artbylazu/)** , is hard at work to create themes for these items that fit within the 
Absolute Momentum universe.
![Absolute Momentum Item Concepts](assets/GameScreenshots/AbsoluteMomentum/item_concepts_1.jpg)

We’re excited to continue iterating on these mechanics and we’ll have a more detailed blog out 
once the items are further along in development.


# Final Thoughts
Overall this system will enable players to express themselves as they navigate our tracks. Of course
we're still looking to make improvements onto our system and definitely work on the animations as we
continue development. I hope you can join us for the ride.

If you're interested in Yasmin's visual development work, you can find more at **[@artbylazu on Instagram](https://www.instagram.com/artbylazu/)** for more!

If you're interested in more info about our studio and our game, check out our socials and
**[wishlist Absolute Momentum on Steam!](https://store.steampowered.com/app/3810400/Absolute_Momentum/)**`;export{e as default};
