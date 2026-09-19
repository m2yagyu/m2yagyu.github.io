(function () {
  var HASH = "9dfc5a72e9eb16ea41fd94facb827045947176051556cedcd3d5328459e087c0";
  var STORAGE_KEY = "cslab_internal_unlocked";

  var I18N = {
    ja: {
      placeholder: "パスワード",
      submit: "開く",
      cancel: "キャンセル",
      error: "パスワードが正しくありません．",
    },
    en: {
      placeholder: "Password",
      submit: "Unlock",
      cancel: "Cancel",
      error: "Incorrect password.",
    },
  };

  function currentLang() {
    var lang = (document.documentElement.lang || "ja").slice(0, 2);
    return I18N[lang] ? lang : "ja";
  }

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

  function isInternalLink(link) {
    var path = link.pathname.replace(/\/$/, "");
    return /\/internal$/.test(path);
  }

  function buildModal(t) {
    var overlay = document.createElement("div");
    overlay.id = "internal-gate-modal";
    overlay.className = "internal-gate-modal";
    overlay.innerHTML =
      '<div class="internal-gate-modal-box">' +
      '<input type="password" id="internal-gate-modal-password" autocomplete="off" placeholder="' + t.placeholder + '">' +
      '<p id="internal-gate-modal-error" class="internal-error" hidden>' + t.error + "</p>" +
      '<div class="internal-gate-modal-actions">' +
      '<button type="button" id="internal-gate-modal-cancel">' + t.cancel + "</button>" +
      '<button type="button" id="internal-gate-modal-submit">' + t.submit + "</button>" +
      "</div>" +
      "</div>";
    document.body.appendChild(overlay);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        overlay.hidden = true;
      }
    });
    return overlay;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var t = I18N[currentLang()];
    var overlay = null;

    document.querySelectorAll("a[href]").forEach(function (link) {
      if (!isInternalLink(link)) return;

      link.addEventListener("click", function (e) {
        if (sessionStorage.getItem(STORAGE_KEY) === "1") {
          return;
        }
        e.preventDefault();

        var targetHref = link.href;
        overlay = overlay || buildModal(t);
        overlay.hidden = false;

        var input = document.getElementById("internal-gate-modal-password");
        var errorEl = document.getElementById("internal-gate-modal-error");
        errorEl.hidden = true;
        input.value = "";
        input.focus();

        function submit() {
          sha256Hex(input.value).then(function (hex) {
            if (hex === HASH) {
              sessionStorage.setItem(STORAGE_KEY, "1");
              window.location.href = targetHref;
            } else {
              errorEl.hidden = false;
            }
          });
        }

        document.getElementById("internal-gate-modal-submit").onclick = submit;
        document.getElementById("internal-gate-modal-cancel").onclick = function () {
          overlay.hidden = true;
        };
        input.onkeydown = function (ev) {
          if (ev.key === "Enter") submit();
        };
      });
    });
  });
})();
