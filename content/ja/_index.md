---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: |
       計算科学研究室
      #image:
      #  filename: stable_diffusion.png
      text: |
        計算科学研究室は<a href="https://www.ndsu.ac.jp/" target="_blanck">ノートルダム清心女子大学</a><a href="https://www.ndsu.ac.jp/department/information-design/" target="_blanck">情報デザイン学部情報デザイン学科</a>に属する研究室です.
    design:
      background:
        image:
          filename: stable_diffusion.png
          filters:
            brightness: 0.7
          parallax: false
          position: center
          size: cover
        #color: '#4a4580'
        text_color_light: true
      spacing:
        padding: ['100px','80px','100px','0px']
        
  
  - block: collection
    content:
      title: News
      subtitle:
      text:
      count: 5
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
