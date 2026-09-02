---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: |
       <span class="accent">計算科学</span>研究室
      image:
        filename: stable_diffusion.png
      text: |
        <span class="lead-affiliation">計算科学研究室は<a href="https://www.ndsu.ac.jp/" target="_blanck">ノートルダム清心女子大学</a><a href="https://www.ndsu.ac.jp/department/information-design/" target="_blanck">情報デザイン学部情報デザイン学科</a>に属する研究室です.</span>
        <span class="lead-about">当研究室では，コンピュータを使って自然現象や社会現象をシミュレーションする研究を行っています．<br>興味がある方は<a href="/ja/about/">こちら</a>をご覧ください．</span>
    design:
      background:
        gradient_start: '#3f5cc0'
        gradient_end: '#8a6bd8'
        gradient_angle: 100
        #color: '#4a4580'
        text_color_light: true
      spacing:
        padding: ['18px','0','18px','0']
        
  
  - block: markdown
    content:
      title:
      text: |
        <div class="quicklinks">
          <a class="quicklink" href="/ja/about/">
            <span class="quicklink-icon"><i class="fas fa-microscope"></i></span>
            <span class="quicklink-label">CSlab紹介</span>
          </a>
          <a class="quicklink" href="/ja/research/">
            <span class="quicklink-icon"><i class="fas fa-flask"></i></span>
            <span class="quicklink-label">研究内容</span>
          </a>
          <a class="quicklink" href="/ja/people/">
            <span class="quicklink-icon"><i class="fas fa-users"></i></span>
            <span class="quicklink-label">メンバー</span>
          </a>
        </div>
    design:
      columns: '1'
      background:
        # ヘッダーの青紫に寄せた薄いグレー。白一色の中で帯として区切る
        color: '#f5f6fb'
      spacing:
        # 下を詰めて、直後の News と一つの帯に見せる
        padding: ['55px','0','25px','0']
  
  - block: collection
    content:
      title: News
      subtitle:
      text:
      count: 20
      link:
        text: もっと見る
        url: post/
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: compact #card
      columns: '1'
      background:
        color: '#f5f6fb'   # アイコン群と同色。上を詰めて同じ帯として続ける
      spacing:
        padding: ['0','0','55px','0']

  # - block: markdown
  #   content:
  #     title:
  #     subtitle: ''
  #     text:
  #   design:
  #     columns: '1'
  #     background:
  #       image: 
  #         filename: coders.jpg
  #         filters:
  #           brightness: 1
  #         parallax: false
  #         position: center
  #         size: cover
  #         text_color_light: true
  #     spacing:
  #       padding: ['20px', '0', '20px', '0']
  #     css_class: fullscreen

  # - block: collection
  #   content:
  #     title: Latest Preprints
  #     text: ""
  #     count: 5
  #     filters:
  #       folders:
  #         - ja/publication
  #       publication_type: 'article'
  #   design:
  #     view: citation
  #     columns: '1'

  # - block: markdown
  #   content:
  #     title:
  #     subtitle:
  #     text: |
  #       {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
  #   design:
  #     columns: '1'
---
