---
title: 学内限定
date: 2026-09-19
type: landing
private: true
sections:
  - block: markdown
    content:
      title:
      text: |
        <div id="internal-gate">
          <div id="internal-lock" class="internal-lock">
            <p>このページは研究室メンバー・学内向けの限定コンテンツです．</p>
            <input type="password" id="internal-password" placeholder="パスワード" autocomplete="off">
            <button id="internal-submit" type="button">開く</button>
            <p id="internal-error" class="internal-error" hidden>パスワードが正しくありません．</p>
          </div>
          <div id="internal-content" class="internal-content" hidden>
            <h2>学内向け資料置き場</h2>
            <p>研究関係の資料や講義資料などの雑多な資料を置いています．</p>
            <p>主に研究室に配属された学生，配属希望・予定の学生に対しての資料のつもりです．研究活動をするうえで資料作成等をする際に参考にしてください．</p>
          </div>
        </div>

        <script>
        (function () {
          var HASH = "9dfc5a72e9eb16ea41fd94facb827045947176051556cedcd3d5328459e087c0";
          var STORAGE_KEY = "cslab_internal_unlocked";

          function sha256Hex(text) {
            var data = new TextEncoder().encode(text);
            return crypto.subtle.digest("SHA-256", data).then(function (buf) {
              return Array.prototype.map
                .call(new Uint8Array(buf), function (b) {
                  return ("0" + b.toString(16)).slice(-2);
                })
                .join("");
            });
          }

          function unlock() {
            document.getElementById("internal-lock").hidden = true;
            document.getElementById("internal-content").hidden = false;
            document.querySelectorAll(".internal-gate-hide").forEach(function (el) {
              el.classList.remove("internal-gate-hide");
            });
          }

          document.addEventListener("DOMContentLoaded", function () {
            if (sessionStorage.getItem(STORAGE_KEY) === "1") {
              unlock();
              return;
            }

            document
              .getElementById("internal-submit")
              .addEventListener("click", function () {
                var value = document.getElementById("internal-password").value;
                sha256Hex(value).then(function (hex) {
                  if (hex === HASH) {
                    sessionStorage.setItem(STORAGE_KEY, "1");
                    unlock();
                  } else {
                    document.getElementById("internal-error").hidden = false;
                  }
                });
              });

            document
              .getElementById("internal-password")
              .addEventListener("keydown", function (e) {
                if (e.key === "Enter") {
                  document.getElementById("internal-submit").click();
                }
              });
          });
        })();
        </script>
    design:
      columns: '1'
      css_class: internal_section
      spacing:
        padding: ['20px','0','60px','0']

  - block: collection
    content:
      title: 研究発表資料
      subtitle:
      text:
      count: 20
      link:
        text: もっと見る
        url: presentation/
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: presentation
    design:
      view: compact
      columns: '1'
      css_class: internal_section internal-gate-hide
      spacing:
        padding: ['20px','0','60px','0']

  - block: collection
    content:
      title: 研究室会議資料
      subtitle:
      text:
      count: 20
      link:
        text: もっと見る
        url: seminar-materials/
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: seminar-materials
    design:
      view: compact
      columns: '1'
      css_class: internal_section internal-gate-hide
      spacing:
        padding: ['20px','0','60px','0']

  - block: collection
    content:
      title: 講義資料
      subtitle:
      text:
      count: 20
      link:
        text: もっと見る
        url: lecture-materials/
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: asc
      page_type: lecture-materials
    design:
      view: compact
      columns: '1'
      css_class: internal_section internal-gate-hide
      spacing:
        padding: ['20px','0','60px','0']
---
