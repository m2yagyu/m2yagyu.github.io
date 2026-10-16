---
title: Development of AI-Based Methods for Physics Simulation
date: 2026-10-16
type: landing
math: true

sections:
  - block: markdown
    content:
      title: Development of AI-Based Methods for Physics Simulation
    design:
      columns: '1'
      css_class: page_lead
      spacing:
        padding: ['45px','0','0','0']

  - block: markdown
    content:
      title: "Physics-Informed Neural Network: PINN"
      text: |
        A physics-informed neural network (PINN) is a machine learning method that approximates the solution of partial differential equations by incorporating physical laws into the training of a neural network [1].

        An ordinary neural network learns the relation between inputs and outputs from a large amount of data. In a PINN, in contrast, the loss function measures how much the network output $u_\theta(x,t)$ fails to satisfy the governing equation and the boundary and initial conditions, and the network parameters $\theta$ are adjusted so that this loss decreases. Therefore, the solution can be obtained from the equation itself without preparing solution data in advance.

        <img src="/files/ai-simulation/pinn_diagram_en.svg" alt="Workflow of a PINN" style="width:100%; height:auto;">

        1. The position $x$ and the time $t$ are given to the neural network as inputs, and the network outputs a predicted solution $u_\theta(x,t)$.
        2. The time and spatial derivatives of the prediction are computed by automatic differentiation. No computational grid, such as that of the finite difference method, is required.
        3. The loss function $L$ is constructed from the residual obtained by substituting the derivatives into the equation and from the misfits of the boundary and initial conditions.
        4. The parameters $\theta$ are updated so that $L$ decreases. By repeating this procedure, $u_\theta$ approaches the solution that satisfies the equation.
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']

  - block: markdown
    content:
      title: Benchmark Test with a Neutral Fluid
      text: |
        Here, we present verification results of the PINN for a **neutral fluid**, in which electromagnetic fields are excluded. Reproducing the results of Raissi et al. [1] is used as a benchmark test problem.

        We consider the one-dimensional Burgers equation,

        $$
        \frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} - \nu\frac{\partial^2 u}{\partial x^2} = 0,
        $$

        where $u$ and $\nu$ are the flow velocity and the viscosity coefficient, respectively.

        **Problem setting**

        - Computational domain and time: $x \in [-1, 1]$, $t \in [0, 1]$
        - Dirichlet boundary condition: $u(\pm 1, t) = 0$
        - Initial condition: $u(x, 0) = -\sin(\pi x)$
        - Physical parameter: $\nu = 0.01/\pi$

        **Simulation results**

        For this problem, which involves a discontinuity in the velocity field, we have obtained good agreement with the exact solution.

        <img src="/files/ai-simulation/burgers_animation.gif" alt="Time evolution of the solution of the Burgers equation obtained with the PINN, compared with the exact solution" style="display:block; width:100%; max-width:640px; height:auto; margin:0 auto;">

        The upper panel shows the velocity field $u(x,t)$ obtained with the PINN, where the vertical line indicates the current time. The lower panel shows the velocity profile at that time, comparing the PINN (blue line) with the exact solution (red circles). As time proceeds, a steep discontinuity forms near $x = 0$, and the PINN reproduces it well. The number at the top of the lower panel is the relative error ($L^2$ norm) with respect to the exact solution.
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']

  - block: markdown
    content:
      title: Future Prospects
      text: |
        - We are considering an extension to magnetohydrodynamics that includes electromagnetic effects.
        - We aim to solve eigenvalue problems involving magnetic field discontinuities at high speed.
          - Solving microscopic phenomena with magnetic field discontinuities on a computer requires high spatial resolution, which makes it a challenging problem in computational science.
          - If acceleration by AI is realized, a wide parameter survey becomes possible.
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']

  - block: markdown
    content:
      title: References
      text: |
        1. <a href="https://doi.org/10.1016/j.jcp.2018.10.045" target="_blank" rel="noopener">M. Raissi <em>et al.</em>, J. Comput. Phys. 378 (2019)</a>
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']
---
