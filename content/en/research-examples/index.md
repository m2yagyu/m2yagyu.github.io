---
title: Simulation Examples
date: 2026-10-16
type: landing

sections:
  - block: markdown
    content:
      title: Simulation Examples
    design:
      columns: '1'
      css_class: page_lead
      spacing:
        padding: ['45px','0','0','0']

  - block: markdown
    content:
      title: "Fire Simulation: How Does Smoke Spread?"
      text: |
        This video shows a fire in a 4 m × 4 m room and the smoke flowing out through the door into the corridor. It is computed with the Fire Dynamics Simulator (FDS), a fire simulation code developed by the U.S. National Institute of Standards and Technology. The air flow and the transport of heat and smoke are solved on the basis of physical laws, with the space divided into about 100,000 small cells.

        **How to read the video**

        - **Top: side view of a vertical cross section.** Darker colors indicate denser smoke. The smoke rising from the fire first accumulates under the ceiling. Once the smoke layer descends below the top of the door, it spills into the corridor and flows along the ceiling toward the exit.
        - **Middle: top view at eye level (1.7 m).** The color shows how far one can see through the smoke (visibility). Green means good visibility, and red means almost nothing can be seen. As time passes, the entire corridor turns red.
        - **Bottom: time evolution of the fire size (heat release rate).** The vertical line marks the current time in the video.

        When smoke blocks the view, people cannot find the exit and walk more slowly. In our group, we use such simulations to investigate when smoke makes it impossible to see and how this affects evacuation.

        <video src="/files/demo/smoke_spread.mp4" controls muted loop playsinline preload="metadata" style="width:100%; height:auto;"></video>

        <small>Note: The video is played back at about 12 times the actual speed (a 4-minute event shown in 20 seconds). This is a demonstration calculation for introducing the group, and the conditions are simplified. In addition, the amount of smoke is set larger than usual to make it easier to see. Therefore, the speed of the smoke spread and the reduction in visibility are examples intended to illustrate the characteristics of the phenomenon, and they are not predictions for actual buildings.</small>
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']

  - block: markdown
    content:
      title: "Evacuation Simulation: Losing One Exit Changes Evacuation Dramatically"
      text: |
        This video reproduces, on a computer, whether all 240 people seated in a lecture room can escape when a fire breaks out at the back of the room. The left panel (A) shows the case in which both exits are available, and the center panel (B) shows the case in which the right exit is blocked and only the left exit can be used. The location of the fire and the spread of the smoke are the same in both cases.

        The room is divided into a grid of 0.4 m × 0.4 m cells, and each cell holds at most one person. Each person moves one cell at a time according to simple rules, such as "move toward the nearer exit" and "follow the person in front." This approach is called a cellular automaton. When several people try to enter the same cell, they may collide and none of them can move. From these rules, congestion in front of the exits emerges naturally.

        In case A, people split between the left and right exits, and everyone leaves the room in about 74 seconds. In case B, everyone gathers at a single exit and a long queue forms (red dots indicate people who are stopped). The smoke (gray) spreading from the back catches up with the rear of the queue. As a result, 29 of the 240 people fail to escape (black crosses). The graph on the right shows the number of people remaining in the room.

        The safety of an evacuation is evaluated by whether everyone finishes escaping before the smoke becomes dangerous. This video is intended to make this comparison visually understandable.

        <video src="/files/demo/ca_evacuation.mp4" controls muted loop playsinline preload="metadata" style="width:100%; height:auto;"></video>

        <small>Note: The video is played back at 3 times the actual speed. This is a demonstration calculation for introducing the group. The spread of the smoke and other conditions are not computed; they are simplified values chosen for illustration. The evacuation times and the numbers of people who fail to escape in the video are examples intended to show the difference caused by the number of exits, and they are not predictions for an actual lecture room.</small>
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']

  - block: markdown
    content:
      title: "Traffic Flow Simulation: Do More Automated Vehicles Eliminate Traffic Jams?"
      text: |
        This simulation shows 27 cars driving on a circular road about 1.1 km around, with no accidents and no traffic lights. From left to right, the fraction of automated vehicles is set to 0%, 50%, and 100%. The road, the number of cars, and the initial arrangement of the cars are identical; only the fraction of automated vehicles is changed.

        **How to read the video**

        - **Top (circle):** The cars drive clockwise. Blue cars are driven by humans, and orange cars are automated vehicles. Stopped cars show red brake lights. The number in the center is the average speed of all cars (km/h) since the start.
        - **Bottom (space-time diagram):** The road is cut open at position "0" and laid out in a horizontal line, and a new row is added below every second. The black line traces the motion of one car marked with a black dot. The red bands represent traffic jams.

        Human drivers sometimes brake more than necessary. In the 0% panel, such a small deceleration propagates to the following cars and grows stronger along the way, so that a jam forms without any obvious cause. This is called a phantom traffic jam. In the space-time diagram, the cars (black line) move to the right, whereas the red jam bands move to the left, that is, opposite to the direction of travel.

        The automated vehicles are modeled to keep a time gap of 1.6 seconds to the car ahead and to accelerate gently, a rule that is commonly used in studies of automated driving. On a road with only automated vehicles (100%), the jams disappear and all cars drive smoothly. However, when humans and automated vehicles are mixed half and half (50%), the average speed becomes even lower than with human drivers only. Contrary to the intuition that "adding automated vehicles makes things gradually better," the traffic flow can be worst during the period in which both types are mixed.

        This result depends on how strongly the automated vehicles accelerate and how they keep their distance from the car ahead. Real roads involve too many factors, which makes it difficult to identify the cause. In this research, we therefore deliberately use a simple model with restricted conditions and compare the results by changing one condition at a time. What makes this research interesting is extracting the underlying mechanism, that is, under what conditions mixed traffic worsens the flow and how this can be avoided.

        <video src="/files/demo/traffic_av_share.mp4" controls muted loop playsinline preload="metadata" style="width:100%; height:auto;"></video>

        <small>Note: This video is produced with the model and the simulation code used in [M. Yagyu (2026), preprint, <a href="https://doi.org/10.31224/7696" target="_blank" rel="noopener">DOI:10.31224/7696</a>], and it illustrates the trends of the results obtained there in an accessible form for introducing our research. To make the motion easy to follow by eye, the road is made smaller and the simulation time is shortened.</small>
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']
---
