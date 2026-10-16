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
      title: "Extension to Two-Dimensional Flow: Double Shear Layer"
      text: |
        Next, we have applied the PINN to the Navier–Stokes equations for a two-dimensional incompressible fluid. Using the vorticity $\omega$ and the stream function $\psi$, the equations are written as

        $$
        \frac{\partial \omega}{\partial t} + u\frac{\partial \omega}{\partial x} + v\frac{\partial \omega}{\partial y} = \nu \nabla^2 \omega, \qquad \nabla^2 \psi = -\omega,
        $$

        where the velocity is given by $u = \partial \psi / \partial y$ and $v = -\partial \psi / \partial x$. As the test problem, we have chosen the double shear layer, in which two thin shear layers roll up into vortices through the Kelvin–Helmholtz instability. In the commonly used Taylor–Green vortex, the advection term $(\boldsymbol{u}\cdot\nabla)\omega$ vanishes identically, so the nonlinear term cannot be verified. In the double shear layer, the advection term reaches about four times the viscous term, and the nonlinearity dominates the flow.

        **Problem setting**

        - Computational domain and time: $x, y \in [0, 2\pi]$ (doubly periodic), $t \in [0, 10]$
        - Initial condition: two shear layers of thickness $\rho = \pi/15$ with a perturbation $\delta \sin x$ of amplitude $\delta = 0.05$
        - Physical parameter: $\nu = 0.01$ (Reynolds number $Re = 100$)

        The reference solution is obtained with a $256^2$ Fourier–Galerkin spectral method. In the PINN, the inputs are embedded into trigonometric functions so that the periodic boundary conditions are satisfied exactly, and we use time marching, in which the time interval is divided into ten windows trained sequentially, together with causal weighting [2]. Note that the results below are from a pilot calculation with a relatively small network.

        **Simulation results**

        The PINN reproduces the waviness of the shear layers ($t = 2$–$4$), their roll-up ($t = 6$), and the merger into two vortices ($t = 8$–$10$) well in terms of shape (center of the animation below).

        <img src="/files/ai-simulation/dsl_vorticity_animation.webp" alt="Time evolution of the vorticity in the double shear layer. Left: numerical solution, center: PINN, right: difference" style="width:100%; height:auto;">

        <small>Time evolution of the vorticity. Left: numerical solution, center: PINN, right: difference. The time and the relative error of the vorticity ($L^2$ norm) with respect to the numerical solution are shown at the top.</small>

        The relative error of the vorticity, however, increases with time and reaches a maximum of 26% at $t \approx 7.6$. Compared with the diffusion-only solution without the advection term (an error of 91% at $t = 10$), the error is much smaller (21%), which shows that the PINN captures the nonlinear advection.

        **Remaining issues**

        - **A small residual does not guarantee an accurate solution.** Although the equation residual decreases to about $10^{-4}$, the vorticity error reaches 26%. For problems without a reference solution, the correctness of the solution cannot be judged from the residual alone.
        - **Errors accumulate in time.** Since the initial condition of each window is the prediction of the previous window, the error increases by about 2% per window.
        - **The vortex positions shift.** The difference field (right panel of the animation) appears as pairs of positive and negative values at the edges of the vortices; the shapes of the structures agree, but their positions are slightly shifted.
        - **Integrated quantities alone are insufficient for verification.** At $t = 10$, the errors in the energy and the enstrophy are about 1%, whereas the error in the vorticity field is 21%.
        - **The computational cost is high.** The same calculation takes about 46 times longer than the spectral method (serial equivalent), and the error is more than six orders of magnitude larger.
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']

  - block: markdown
    content:
      title: Future Prospects
      text: |
        - For the double shear layer, we will investigate how much the error decreases in a production run with a larger network, and we will improve the transfer between windows.
        - We will consider applications in which the advantages of PINNs can be exploited, such as inverse problems of estimating the viscosity and other parameters from sparse observations.
        - We are considering an extension to magnetohydrodynamics that includes electromagnetic effects.
        - We aim to solve eigenvalue problems involving magnetic field discontinuities at high speed.
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
        2. <a href="https://doi.org/10.1016/j.cma.2024.116813" target="_blank" rel="noopener">S. Wang <em>et al.</em>, Comput. Methods Appl. Mech. Eng. 421 (2024)</a>
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']
---
