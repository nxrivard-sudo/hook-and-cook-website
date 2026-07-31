(function () {
  const cfg = window.HOOK_AND_COOK || {};
  const y = document.getElementById("y");
  if (y) y.textContent = String(new Date().getFullYear());

  const order = document.getElementById("order-link");
  if (order) {
    const url = (cfg.ORDER_URL || "").trim();
    if (url) {
      order.href = url;
      order.target = "_blank";
      order.rel = "noopener";
      order.textContent = "Order online";
      order.classList.remove("is-disabled");
      order.removeAttribute("aria-disabled");
    } else {
      order.href = "#visit";
      order.textContent = "Order online (coming soon)";
      order.classList.add("is-disabled");
      order.setAttribute("aria-disabled", "true");
    }
  }

  const phoneLine = document.getElementById("phone-line");
  if (phoneLine && cfg.PHONE_E164) {
    const pretty = cfg.PHONE_DISPLAY || cfg.PHONE_E164;
    const ai = cfg.AI_ORDERING_LIVE
      ? " · AI phone ordering live"
      : "";
    phoneLine.innerHTML =
      `Call / text: <a href="tel:${cfg.PHONE_E164}">${pretty}</a>${ai} · ` +
      `<a href="mailto:${cfg.EMAIL || "hookandcooksc@gmail.com"}">${cfg.EMAIL || "hookandcooksc@gmail.com"}</a>`;
  }
})();
