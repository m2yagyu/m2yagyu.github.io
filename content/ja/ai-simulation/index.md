---
title: AIを用いた物理シミュレーション手法の開発
date: 2026-10-16
type: landing
math: true

sections:
  - block: markdown
    content:
      title: AIを用いた物理シミュレーション手法の開発
    design:
      columns: '1'
      css_class: page_lead
      spacing:
        padding: ['45px','0','0','0']

  - block: markdown
    content:
      title: "Physics-Informed Neural Network: PINN"
      text: |
        ニューラルネットワークの学習に物理法則を組み込むことで，偏微分方程式の解を近似する機械学習手法です［1］．

        通常のニューラルネットワークは，大量のデータから入力と出力の関係を学習します．これに対してPINNでは，ネットワークの出力 $u_\theta(x,t)$ が支配方程式や境界条件，初期条件をどれだけ満たしていないかを損失関数として測り，それが小さくなるようにネットワークのパラメータ $\theta$ を調整します．そのため，あらかじめ解のデータを用意しなくても，方程式そのものを手がかりに解を求めることができます．

        <img src="/files/ai-simulation/pinn_diagram_ja.svg" alt="PINNの計算の流れ" style="width:100%; height:auto;">

        1. ニューラルネットワークに位置 $x$ と時刻 $t$ を入力し，解の予測値 $u_\theta(x,t)$ を出力させます．
        2. 自動微分により，予測値の時間微分や空間微分を計算します．差分法のような計算格子は必要ありません．
        3. 微分を方程式に代入したときの残差と，境界条件・初期条件とのずれを合わせて，損失関数 $L$ を作ります．
        4. $L$ が小さくなるようにパラメータ $\theta$ を更新します．これを繰り返すことで，$u_\theta$ は方程式を満たす解に近づいていきます．
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']

  - block: markdown
    content:
      title: 中性流体を用いたベンチマークテスト
      text: |
        ここでは電磁場を排した**中性流体**を題材にしたPINNの検証結果を示します．Raissiら［1］の結果の再現をベンチマークテスト問題とします．

        1次元Burgers方程式を考えます．

        $$
        \frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} - \nu\frac{\partial^2 u}{\partial x^2} = 0
        $$

        ここで $u$，$\nu$ はそれぞれ流速と粘性係数です．

        **問題設定**

        - 計算領域，時間：$x \in [-1, 1]$，$t \in [0, 1]$
        - Dirichlet境界条件：$u(\pm 1, t) = 0$
        - 初期条件：$u(x, 0) = -\sin(\pi x)$
        - 物理パラメタ：$\nu = 0.01/\pi$

        **シミュレーション結果**

        速度場の不連続性を含む問題に対して，厳密解と良好な一致を得ることに成功しました．

        <img src="/files/ai-simulation/burgers_animation.gif" alt="PINNで得られたBurgers方程式の解の時間発展と厳密解との比較" style="display:block; width:100%; max-width:640px; height:auto; margin:0 auto;">

        上はPINNで得られた速度場 $u(x,t)$ で，縦の線が現在の時刻を表します．下はその時刻における速度分布で，PINN（青線）と厳密解（赤丸）を比べています．時間がたつと $x = 0$ 付近に急峻な不連続が生じますが，PINNはこれをよく再現しています．下の図の上に表示される時刻の横の数値は，厳密解に対する相対誤差（$L^2$ ノルム）です．
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']

  - block: markdown
    content:
      title: 今後の展望
      text: |
        - 電磁場効果を取り入れた電磁流体への拡張を検討します．
        - 磁場の不連続性を含む固有値問題を高速に解けることを目指します．
          - 磁場の不連続性をもつ微視的な現象をコンピュータで解くことは，高い空間解像度を要するため，計算科学的にチャレンジングな問題です．
          - AIによる高速化が実現できると，幅広いパラメタサーベイが可能となります．
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']

  - block: markdown
    content:
      title: 参考文献
      text: |
        1. <a href="https://doi.org/10.1016/j.jcp.2018.10.045" target="_blank" rel="noopener">M. Raissi <em>et al.</em>, J. Comput. Phys. 378 (2019)</a>
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']
---
