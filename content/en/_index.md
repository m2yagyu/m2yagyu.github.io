---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: |
        <span class="accent">C</span>omputational <span class="accent">S</span>cience <span class="accent">lab</span>
      image:
        filename: stable_diffusion.png
      text: |
        <span class="lead-affiliation">Computational Science lab is part of <a href="https://www.ndsu.ac.jp/department/information-design/" target="_blanck">the Faculty of Information and Data Science</a> at <a href="https://www.ndsu.ac.jp/english/index.html/" target="_blanck">Notre Dame Seishin University</a>.</span>
        <span class="lead-about">In CSlab, we conduct research using computers to simulate natural and social phenomena.<br>If you are interested, please visit <a href="/en/about/">here</a> for more information.</span>
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
          <a class="quicklink" href="/en/about/">
            <span class="quicklink-icon"><i class="fas fa-microscope"></i></span>
            <span class="quicklink-label">CSlab</span>
          </a>
          <a class="quicklink" href="/en/research/">
            <span class="quicklink-icon"><i class="fas fa-flask"></i></span>
            <span class="quicklink-label">Research</span>
          </a>
          <a class="quicklink" href="/en/people/">
            <span class="quicklink-icon"><i class="fas fa-users"></i></span>
            <span class="quicklink-label">Member</span>
          </a>
          <a class="quicklink" href="/en/internal/">
            <span class="quicklink-icon"><i class="fas fa-lock"></i></span>
            <span class="quicklink-label">Internal</span>
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
        text: More
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
  #         - en/publication
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
