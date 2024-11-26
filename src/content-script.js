(function () {
  let hidden = false;

  const styleEl = document.createElement("style");
  // Use some poop clowns to get a high selector specificity so we can override
  // other selectors in case they also use !important.
  const poopClowns = ":not(#💩🤡)".repeat(20);
  styleEl.textContent = `${poopClowns} {cursor: none !important}`;

  function hideHandler() {
    if (hidden) return;
    hidden = true;
    document.head.append(styleEl);
  }

  function showHandler() {
    if (!hidden) return;
    hidden = false;
    styleEl.remove();
  }

  const showEvents =
    "PointerEvent" in window
      ? ["pointerdown", "pointermove"]
      : ["mousedown", "mousemove", "touchstart", "touchmove"];
  const options = { capture: true, passive: true };

  document.addEventListener("scroll", hideHandler, options);

  for (const event of showEvents) {
    document.addEventListener(event, showHandler, options);
  }
})();
