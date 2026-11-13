---
title: マイクロテアリングモード駆動の電磁的乱流における自己組織化現象
date: 2026-11-13
type: landing

sections:
  - block: markdown
    content:
      title: 磁気シアのないプラズマで，乱流はなぜ磁気島をつくるのか
    design:
      columns: '1'
      css_class: page_lead
      spacing:
        padding: ['45px','0','0','0']

  - block: markdown
    content:
      title: 研究の背景
      text: |
        高ベータのプラズマでは，マイクロテアリングモードが駆動する電磁的乱流が異常な電子熱輸送の原因の一つと考えられています．この乱流がどのように飽和するかについてはいくつかの機構が提案されており，なかでも乱流が自発的に生み出す「帯状磁場（ゾーナル磁場）」の役割は，重要であるとする報告とそうでないとする報告があり，議論が分かれています．

        **背景の温度勾配**

        本研究では，強い背景磁場 B<sub>0</sub>（z 方向）に垂直な x–y 面を考え，電子温度が x 方向に変化する（x の正の向きに低くなる）スラブ配位を扱います（図1）．この背景の電子温度勾配が，マイクロテアリングモードを不安定化するエネルギー源です．以下に示すシミュレーション結果の図は，すべてこの x–y 面上の分布です．

        <img src="/files/self_organization/background_gradient_ja.svg" alt="背景の電子温度勾配とシミュレーション面の模式図" style="display:block; width:100%; max-width:640px; height:auto; margin:0 auto;">

        <small>図1：（a）背景の電子温度分布．温度は x の正の向きに減少する．（b）シミュレーションを行う x–y 面．色は背景温度（赤：高温，青：低温）を表し，背景磁場は紙面手前向きである．</small>

        **磁気シアとは**

        磁場の向きが場所によって変わることを「磁気シア」といいます．スラブ配位では，主磁場 B<sub>0</sub>（z 方向）に，x に比例する y 方向の成分 B<sub>y</sub>(x) を加えることで磁気シアを表現します（図2b）．すると x の位置ごとに磁力線の傾きが変わり，B<sub>y</sub> = 0 となる位置（有理面に相当）の近くで磁気島ができやすくなります．一方，B<sub>y</sub> がなければ，どの位置でも磁力線は同じ向きです（図2a）．

        <img src="/files/self_organization/magnetic_shear_ja.svg" alt="磁気シアの模式図" style="display:block; width:100%; max-width:640px; height:auto; margin:0 auto;">

        <small>図2：磁気シアの模式図．各平面は x を固定した y–z 面を表し，青矢印は磁力線の向きを示す．（a）磁気シアなし．（b）磁気シアあり．</small>

        **本研究の問い**

        ステラレータや先進トカマク運転などでは，磁気シアが弱い，あるいはほぼゼロの領域が実現されます．本研究では，平衡磁場に磁気シアがない最もシンプルなスラブ配位を対象に，ジャイロ運動論コード GS2 を用いた非線形シミュレーションを行い，マイクロテアリング乱流の中で磁気島と帯状磁場がどのように自己組織化するかを調べました．磁気シアはマイクロテアリングモードを安定化する方向にのみはたらくため，この配位でもモードの不安定化機構（時間依存する熱力）は保たれています．
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','30px','0']

  - block: markdown
    content:
      title: 自己組織化の描像
      text: |
        **エネルギーの大部分は電子温度揺動が担う**

        ジャイロ運動論的自由エネルギーの時間発展を調べると，その大部分は電子の粒子エネルギー K<sub>e</sub>，とくに等方的な電子温度揺動のエネルギーが占めており，磁場のエネルギー M<sub>⊥</sub> はずっと小さいことがわかりました（図3）．平衡磁場のエネルギーを解放する通常のテアリング不安定性とは異なり，マイクロテアリングモードは電子温度勾配によって駆動されるためです．しかし，エネルギー的には小さい磁場の構造こそが，乱流の非線形発展において決定的な役割を果たします．

        <img src="/files/self_organization/energy_evolution.png" alt="ジャイロ運動論的自由エネルギーの時間発展" style="display:block; width:100%; max-width:520px; height:auto; margin:0 auto;">

        <small>図3：ジャイロ運動論的自由エネルギー W とその内訳の時間発展．W の大部分を電子の粒子エネルギー K<sub>e</sub> が占め，そのほとんどが等方的な電子温度揺動のエネルギー K<sub>e</sub><sup>T</sup> である．磁場のエネルギー M<sub>⊥</sub>（紫）は小さい．</small>

        **磁気シアがないのに磁気島が現れる**

        図4は電子温度揺動のパワーと，磁力線（ベクトルポテンシャル A<sub>∥</sub> の等高線）のスナップショットです．はじめ乱流状態にあった磁場（a）から，y 方向に並んだ磁気島の鎖が形成されます（b）．平衡磁場に磁気シアがないにもかかわらず磁気島ができることが，本研究の出発点です．その後，磁気島の幅は徐々に小さくなり（c），帯状の磁場構造が支配的になります（d）．電子温度揺動は一貫して磁力線に沿って局在しており，磁場揺動と温度揺動が強く結びついていることがわかります．

        <img src="/files/self_organization/temperature_power_snapshots.png" alt="電子温度揺動パワーと磁力線のスナップショット" style="display:block; width:100%; max-width:520px; height:auto; margin:0 auto;">

        <small>図4：電子温度揺動のパワー（カラー）と A<sub>∥</sub> の等高線（磁力線）のスナップショット．時刻は電子反磁性ドリフト周波数で規格化している．</small>

        **帯状磁場が「実効的な磁気シア」として働く**

        A<sub>∥</sub> を帯状成分（y 方向に一様な成分）と非帯状成分に分解すると，帯状成分を取り除いた場合には磁気島の鎖が見えなくなります（図5）．つまり，乱流が自ら生み出した帯状磁場が実効的な磁気シアとしてはたらき，磁場揺動との重ね合わせによって磁気島が形成されています．実際，磁気島の O 点は，帯状磁場 ⟨B<sub>y</sub>⟩ がゼロになる位置の近くにあります（図6）．

        <img src="/files/self_organization/apar_zonal_nonzonal.png" alt="A∥の帯状成分と非帯状成分" style="display:block; width:100%; max-width:600px; height:auto; margin:0 auto;">

        <small>図5：磁気島形成時における A<sub>∥</sub> の（a）帯状成分と（b）非帯状成分．非帯状成分だけでは磁気島の鎖は現れない．</small>

        <img src="/files/self_organization/zonal_field_profile.png" alt="帯状磁場のx方向分布" style="display:block; width:100%; max-width:440px; height:auto; margin:0 auto;">

        <small>図6：帯状磁場 ⟨B<sub>y</sub>⟩ の x 方向分布の時間変化．時間とともに大きなスケールの構造へと発達する．</small>

        帯状磁場がどのように生成されるかを調べるため，一般化オームの法則に基づいて A<sub>∥</sub> のパワーバランスを解析しました．その結果，帯状磁場は主に，磁場揺動と電子温度揺動の非線形相互作用によって駆動されることがわかりました．

        **磁気島の中で電子温度分布が平坦化する**

        さらに，形成された磁気島の内部では，電子温度揺動が自発的に組織化し，背景の温度勾配をほぼ打ち消すような勾配をつくることがわかりました（動画）．この平坦化はマイクロテアリング不安定性の駆動源である局所的な温度勾配を弱めるため，乱流の飽和を促すと考えられます．この機構は，磁気シアの有無によらず働く可能性があります．

        <img src="/files/self_organization/self_organization.gif" alt="電子温度揺動と磁力線の時間発展" style="display:block; width:100%; max-width:440px; height:auto; margin:0 auto;">

        <small>動画：電子温度揺動（カラー）と磁力線（等高線）の時間発展．赤は背景より高温，青は低温の領域を表す．磁気島の内部で温度揺動が背景の温度勾配を打ち消すように分布している．</small>

        **自己組織化のサイクル**

        以上の過程をまとめると図7のようになります．温度勾配がマイクロテアリングモードを不安定化し，乱流が帯状磁場と磁場揺動を生み出します．両者の重ね合わせによって磁気島が形成され，磁気島内部の温度平坦化が不安定性の駆動源を弱めます．

        <img src="/files/self_organization/flowchart.png" alt="自己組織化過程の模式図" style="display:block; width:100%; max-width:560px; height:auto; margin:0 auto;">

        <small>図7：磁気シアのない配位におけるマイクロテアリングモード駆動の自己組織化過程の模式図．</small>
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','30px','0']

  - block: markdown
    content:
      title: 今後の展望
      text: |
        帯状磁場の役割は磁気シアの強さに依存すると考えられます．弱磁気シア領域では，自己生成された帯状磁場が実効的な磁気シアとして非線形発展に重要な役割を果たす一方，十分に強い磁気シアのもとではこのような自己組織化は抑えられるかもしれません．磁気シアの強さと帯状磁場の生成の関係を系統的に調べること，そして乱流が最終的に飽和に至るまでの過程を明らかにすることが今後の課題です．ヴェンデルシュタイン 7-X のような磁気シアがほぼゼロの領域や，JT-60SA で計画されている先進トカマク運転への示唆も期待されます．
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','30px','0']

  - block: markdown
    content:
      title: 論文情報
      text: |
        - **タイトル**：Self-organization of magnetic islands and zonal magnetic fields driven by slab microtearing modes in the absence of magnetic shear
        - **著者**：Mitsuyoshi Yagyu, Ryusuke Numata and Seiya Nishimura
        - **状況**：投稿中（preprint：<a href="https://arxiv.org/abs/2611.10446" target="_blank" rel="noopener">arXiv:2611.10446</a>）
    design:
      columns: '1'
      css_class: research_section about_section sim_examples_section
      spacing:
        padding: ['15px','0','40px','0']
---
