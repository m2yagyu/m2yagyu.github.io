---
title: Internal
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
            <p>This page contains content restricted to lab members and NDSU affiliates.</p>
            <input type="password" id="internal-password" placeholder="Password" autocomplete="off">
            <button id="internal-submit" type="button">Unlock</button>
            <p id="internal-error" class="internal-error" hidden>Incorrect password.</p>
          </div>
          <div id="internal-content" class="internal-content" hidden>
            <h2>Materials for Lab Members</h2>
            <p>This page hosts miscellaneous materials such as research-related materials and lecture handouts.</p>
            <p>These materials are mainly intended for students already in the lab, and for those hoping or planning to join. Please use them as a reference when preparing your own materials for research activities.</p>
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
      title: Research Presentations
      subtitle:
      text:
      count: 20
      link:
        text: More
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
      title: Lab Meeting Materials
      subtitle:
      text:
      count: 20
      link:
        text: More
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
      title: Lecture Materials
      subtitle:
      text:
      count: 20
      link:
        text: More
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
