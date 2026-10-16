---
title: マイクロテアリングモードの不安定化メカニズム
date: 2026-10-16
type: landing

sections:
  - block: markdown
    content:
      title: 核融合プラズマの熱を逃がす「微小な磁場の乱れ」は，なぜ成長するのか
    design:
      columns: '1'
      css_class: page_lead
      spacing:
        padding: ['45px','0','0','0']

  - block: markdown
    content:
      title: 核融合とマイクロテアリングモード
      text: |
        核融合炉の閉じ込め性能は，プラズマ中の微視的不安定性が駆動する乱流輸送に大きく左右されます．高ベータ（ベータ：プラズマ圧力/磁気圧）のプラズマでは，磁場揺動を伴う電磁的な不安定性が電子熱輸送の主要因の一つと考えられています．

        マイクロテアリングモードはその代表的なモードです．電子温度勾配を不安定化ソースとして微小な磁気島を形成します．それらがオーバーラップすることでストカスティックな磁場構造を形成し，磁力線に沿った電子熱輸送を増大させます．球状トカマクなどを対象としたジャイロ運動論シミュレーションでは，実験データを説明できる輸送を生むことが報告されています．一方で，その不安定化機構については十分に理解されていませんでした．
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','30px','0']

  - block: markdown
    content:
      title: マイクロテアリングモードの不安定化メカニズム
      text: |
        本研究では，マイクロテアリングモードの不安定化機構の詳細な描像を得るために，最もシンプルなスラブ配位を採用しています．このとき，モードの不安定化物理は時間依存する熱力であることがわかっていることから，時間依存する熱力を内包した流体方程式に基づく理論解析により，その不安定化描像を同定しました．また時間依存する熱力による不安定化をジャイロ運動論シミュレーションをもちいて定量的に示しました．

        **熱力と時間依存熱力**

        衝突周波数は電子温度に依存するため，温度勾配があると背景イオンとの摩擦力がつり合わず，電子に正味の力（熱力）がはたらきます（図1）．磁場が時間変化する場合には，時間依存する熱力が現れます．

        <img src="/files/microtearing/thermal_force.png" alt="熱力の模式図" style="display:block; width:100%; max-width:360px; height:auto; margin:0 auto;">

        <small>図1：熱力の模式図．温度勾配（橙線）があると，両側から流入する電子が受ける摩擦力（細い赤矢印）がつり合わず，正味の力が生じる．</small>

        **誘導電場の位相遅れ**

        アルヴェニックな磁場揺動が時間的に変動すると，磁力線方向の誘導電場が生じます．両者が同位相であれば摂動は振動するだけですが，時間依存熱力によって電場形成が磁場から遅れることで，磁場揺動が成長することを理論解析から示しました（図2）．この機構は磁気シアがなくてもはたらき，マイクロテアリングモードは，電子温度勾配と衝突によって駆動される電磁的ドリフト波的モードであることを示しました．

        <img src="/files/microtearing/mechanism.png" alt="誘導電場の位相遅れによる不安定化の模式図" style="display:block; width:100%; max-width:400px; height:auto; margin:0 auto;">

        <small>図2：不安定化の模式図．磁場摂動（黒実線）が磁力線方向の電場（緑点線）を生む．時間依存熱力によって電場が遅れる（赤）と，磁場摂動が増幅される．</small>

        **マイクロテアリング不安定性の衝突周波数依存性**

        マイクロテアリング不安定性の衝突周波数依存性を調べたシミュレーションでは，成長率は衝突周波数が電子反磁性ドリフト周波数と同程度のときに最大となり，弱衝突側と強衝突側の両方で安定化します（図3）．シミュレーション結果の理論曲線による再現はこのモードの課題でもありましたが，シミュレーションで得られた電磁場情報から見積もった熱力の効果を理論の分散関係に用いることで，シミュレーション結果をよく再現できることが示されました（図3赤点線）．

        <img src="/files/microtearing/growth_rate_vs_collision.png" alt="成長率の衝突周波数依存性" style="display:block; width:100%; max-width:440px; height:auto; margin:0 auto;">

        <small>図3：成長率の衝突周波数依存性（いずれも電子反磁性ドリフト周波数で規格化）．青丸と紫の十字はシミュレーション結果（エネルギー拡散の衝突効果の有無），赤破線はシミュレーションから測定した係数を用いた理論曲線．</small>

        **非線形発展**

        非線形シミュレーションでは，摂動磁気エネルギーは低いレベルにとどまり，磁気エネルギーの爆発的な解放を伴う磁気リコネクションは駆動されないことがわかりました（図4）．電子の粒子エネルギー K<sub>e</sub> が総エネルギー W を支配しており，低次の流体モーメントのエネルギー解析を実施しましたが，いずれも K<sub>e</sub> を支持しませんでした．このことから，おそらくさらに高次の温度揺動によるエネルギーが支配的であると推測されます．

        <img src="/files/microtearing/energy_evolution.png" alt="非線形シミュレーションにおけるエネルギーの時間発展" style="display:block; width:100%; max-width:480px; height:auto; margin:0 auto;">

        <small>図4：非線形シミュレーションにおけるエネルギーの時間発展．全エネルギー W の大部分を電子のエネルギー K<sub>e</sub>（青）が占める一方，摂動磁気エネルギー M<sub>⊥</sub>（紫）は低いレベルにとどまる．</small>
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','30px','0']

  - block: markdown
    content:
      title: 今後の展望
      text: |
        スラブ配位では安定な弱衝突領域で，捕捉粒子や磁気ドリフトなどのトロイダル効果がマイクロテアリングモードを不安定化することが知られています．電磁場の位相遅れという不安定化描像がこの無衝突マイクロテアリングモードにおいても言えることを示したいと考えています．
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','30px','0']

  - block: markdown
    content:
      title: 論文情報
      text: |
        - **タイトル**：Destabilization mechanism of the collisional microtearing mode in magnetized slab plasmas
        - **著者**：Mitsuyoshi Yagyu and Ryusuke Numata
        - **掲載誌**：Plasma Physics and Controlled Fusion **65**, 065003 (2023)
        - **DOI**：<a href="https://doi.org/10.1088/1361-6587/accbeb" target="_blank" rel="noopener">10.1088/1361-6587/accbeb</a>
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']
---
