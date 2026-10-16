---
title: Destabilization Mechanism of the Microtearing Mode
date: 2026-10-16
type: landing

sections:
  - block: markdown
    content:
      title: Why Do Small Magnetic Perturbations That Leak Heat from Fusion Plasmas Grow?
    design:
      columns: '1'
      css_class: page_lead
      spacing:
        padding: ['45px','0','0','0']

  - block: markdown
    content:
      title: Fusion and the Microtearing Mode
      text: |
        The confinement performance of a fusion reactor depends strongly on turbulent transport driven by micro-instabilities in the plasma. In high-beta plasmas (beta: the ratio of the plasma pressure to the magnetic pressure), electromagnetic instabilities involving magnetic fluctuations are considered one of the main causes of electron thermal transport.

        The microtearing mode is a representative of such modes. With the electron temperature gradient as the destabilization source, it forms small magnetic islands. Their overlap produces a stochastic magnetic field structure, which enhances electron thermal transport along the field lines. Gyrokinetic simulations of spherical tokamaks and other devices have reported that it produces transport that can explain the experimental data. However, its destabilization mechanism has not been fully understood.
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','30px','0']

  - block: markdown
    content:
      title: Destabilization Mechanism of the Microtearing Mode
      text: |
        In this study, we have adopted the simplest slab geometry to obtain a detailed picture of the destabilization mechanism of the microtearing mode. Since the time-dependent thermal force is known to be the physics responsible for the destabilization, we have identified the picture of the destabilization through theoretical analyses based on fluid equations that include the time-dependent thermal force. We have also demonstrated the destabilization by the time-dependent thermal force quantitatively using gyrokinetic simulations.

        **Thermal force and time-dependent thermal force**

        Because the collision frequency depends on the electron temperature, a temperature gradient makes the friction forces with the background ions unbalanced, and a net force (the thermal force) acts on the electrons (Figure 1). When the magnetic field varies in time, a time-dependent thermal force appears.

        <img src="/files/microtearing/thermal_force.png" alt="Schematic of the thermal force" style="display:block; width:100%; max-width:360px; height:auto; margin:0 auto;">

        <small>Figure 1: Schematic of the thermal force. With a temperature gradient (orange line), the friction forces on electrons flowing in from both sides (thin red arrows) are unbalanced, producing a net force.</small>

        **Phase lag of the inductive electric field**

        When an Alfvénic magnetic fluctuation varies in time, an inductive electric field is generated along the field lines. If the two were in phase, the perturbation would only oscillate. We have shown by theoretical analyses that the magnetic fluctuation grows because the time-dependent thermal force delays the formation of the electric field behind the magnetic field (Figure 2). This mechanism works even without magnetic shear, and we have shown that the microtearing mode is an electromagnetic drift-wave-like mode driven by the electron temperature gradient and collisions.

        <img src="/files/microtearing/mechanism.png" alt="Schematic of destabilization by the phase lag of the inductive electric field" style="display:block; width:100%; max-width:400px; height:auto; margin:0 auto;">

        <small>Figure 2: Schematic of the destabilization. The magnetic perturbation (black solid line) generates the parallel electric field (green dotted line). When the time-dependent thermal force delays the electric field (red), the magnetic perturbation is amplified.</small>

        **Collision frequency dependence of the microtearing instability**

        In simulations examining the collision frequency dependence of the microtearing instability, the growth rate peaks when the collision frequency is comparable to the electron diamagnetic drift frequency, and the mode is stabilized in both the weakly and strongly collisional regimes (Figure 3). Reproducing simulation results with a theoretical curve has been a challenge for this mode. By using in the theoretical dispersion relation the thermal force effects estimated from the electromagnetic field data obtained in the simulations, it has been shown that the simulation results are well reproduced (red dashed line in Figure 3).

        <img src="/files/microtearing/growth_rate_vs_collision.png" alt="Collision frequency dependence of the growth rate" style="display:block; width:100%; max-width:440px; height:auto; margin:0 auto;">

        <small>Figure 3: Collision frequency dependence of the growth rate (both normalized by the electron diamagnetic drift frequency). Blue circles and magenta crosses are simulation results with and without the energy diffusion collision effect, and the red dashed line is the theoretical curve with coefficients measured in the simulations.</small>

        **Nonlinear evolution**

        The nonlinear simulation has shown that the perturbed magnetic energy remains at a low level and that the mode does not drive magnetic reconnection with an explosive release of magnetic energy (Figure 4). The electron particle energy K<sub>e</sub> dominates the total energy W, and an energy analysis of the low-order fluid moments has shown that none of them supports K<sub>e</sub>. This suggests that the energy associated with higher-order temperature fluctuations may be dominant.

        <img src="/files/microtearing/energy_evolution.png" alt="Energy evolution in the nonlinear simulation" style="display:block; width:100%; max-width:480px; height:auto; margin:0 auto;">

        <small>Figure 4: Energy evolution in the nonlinear simulation. The electron energy K<sub>e</sub> (blue) dominates most of the total energy W, whereas the perturbed magnetic energy M<sub>⊥</sub> (magenta) remains at a low level.</small>
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','30px','0']

  - block: markdown
    content:
      title: Future Prospects
      text: |
        In the weakly collisional regime, where the mode is stable in slab geometry, toroidal effects such as trapped particles and magnetic drifts are known to destabilize the microtearing mode. We aim to show that the destabilization picture based on the phase lag between the electromagnetic fields also holds for this collisionless microtearing mode.
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','30px','0']

  - block: markdown
    content:
      title: Publication
      text: |
        - **Title**: Destabilization mechanism of the collisional microtearing mode in magnetized slab plasmas
        - **Authors**: Mitsuyoshi Yagyu and Ryusuke Numata
        - **Journal**: Plasma Physics and Controlled Fusion **65**, 065003 (2023)
        - **DOI**: <a href="https://doi.org/10.1088/1361-6587/accbeb" target="_blank" rel="noopener">10.1088/1361-6587/accbeb</a>
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']
---
