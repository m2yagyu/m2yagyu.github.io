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
      title: 2次元流体への拡張：二重せん断層
      text: |
        次に，2次元非圧縮性流体の Navier–Stokes 方程式に PINN を適用しました．渦度 $\omega$ と流れ関数 $\psi$ を用いると，方程式は次のように書けます．

        $$
        \frac{\partial \omega}{\partial t} + u\frac{\partial \omega}{\partial x} + v\frac{\partial \omega}{\partial y} = \nu \nabla^2 \omega, \qquad \nabla^2 \psi = -\omega
        $$

        ここで，速度は $u = \partial \psi / \partial y$，$v = -\partial \psi / \partial x$ で与えられます．問題には，2枚の薄いせん断層が Kelvin–Helmholtz 不安定性によって巻き上がり，渦へと成長する二重せん断層を選びました．よく使われる Taylor–Green 渦では移流項 $(\boldsymbol{u}\cdot\nabla)\omega$ が恒等的に0になるため，非線形項を検証できません．二重せん断層では，移流項が粘性項の最大4倍程度に達し，非線形性が流れを支配します．

        **問題設定**

        - 計算領域，時間：$x, y \in [0, 2\pi]$（二重周期境界条件），$t \in [0, 10]$
        - 初期条件：厚さ $\rho = \pi/15$ の2枚のせん断層に，振幅 $\delta = 0.05$ の擾乱 $\delta \sin x$ を加えたもの
        - 物理パラメタ：$\nu = 0.01$（レイノルズ数 $Re = 100$）

        参照解は，$256^2$ の Fourier–Galerkin スペクトル法で求めました．PINN では，入力を三角関数に埋め込んで周期境界条件を厳密に満たし，計算時間を10個の窓に分けて順に学習する時間マーチングと，因果的重み付け［2］を用いています．なお，以下はネットワークを小さめにしたパイロット計算の結果です．

        **シミュレーション結果**

        PINN は，せん断層の波打ち（$t = 2$–$4$），巻き上がり（$t = 6$），2つの渦への合体（$t = 8$–$10$）を，形としてはよく再現しています（下のアニメーションの中央）．

        <img src="/files/ai-simulation/dsl_vorticity_animation.webp" alt="二重せん断層の渦度分布の時間発展．左は数値解，中央はPINN，右はその差" style="width:100%; height:auto;">

        <small>渦度分布の時間発展．左は数値解，中央は PINN，右はその差．上部に時刻と，数値解に対する渦度の相対誤差（$L^2$ ノルム）を示す．</small>

        一方，渦度の相対誤差は時間とともに増加し，$t \approx 7.6$ で最大26%に達します．ただし，移流項を除いた拡散のみの解（$t = 10$ で誤差91%）と比べると誤差は大幅に小さく（同21%），PINN が非線形の移流を捉えていることがわかります．

        **見えてきた課題**

        - **残差が小さくても解が正確とは限らない．** 方程式の残差は $10^{-4}$ 程度まで下がっても，渦度の誤差は最大26%あります．参照解のない問題では，残差だけから解の正しさを判定できません．
        - **時間方向に誤差が蓄積する．** 各窓の初期条件は前の窓の予測なので，誤差は窓ごとに約2%ずつ増えていきます．
        - **渦の位置がずれる．** 差の分布（アニメーションの右）は渦の縁に正負の対として現れており，構造の形は合っていても位置が少しずれています．
        - **積分量だけでは検証にならない．** $t = 10$ でのエネルギーとエンストロフィーの誤差は約1%ですが，渦度場の誤差は21%あります．
        - **計算コストが大きい．** 同じ計算に，スペクトル法（1コア換算）の約46倍の時間がかかり，誤差も6桁以上大きくなっています．
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']

  - block: markdown
    content:
      title: 今後の展望
      text: |
        - 二重せん断層について，ネットワークを大きくした本番計算で誤差がどこまで下がるかを調べるとともに，窓の間の受け渡しを改善します．
        - まばらな観測データから粘性係数などを推定する逆問題のように，PINN の利点が活きる問題への応用を検討します．
        - 電磁場効果を取り入れた電磁流体への拡張を検討します．
        - 磁場の不連続性を含む固有値問題を高速に解けることを目指します．
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
        2. <a href="https://doi.org/10.1016/j.cma.2024.116813" target="_blank" rel="noopener">S. Wang <em>et al.</em>, Comput. Methods Appl. Mech. Eng. 421 (2024)</a>
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']
---
