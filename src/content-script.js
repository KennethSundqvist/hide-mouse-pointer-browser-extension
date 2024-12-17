(function () {
  let hidden = false;

  const styleEl = document.createElement("style");
  // Using ":not(#some-id)" with an ID that is unlikely to exist on a page will
  // target every element on the page so we can override the cursor style for
  // every element.
  //
  // And using a lot of them in the same selector will give it a high
  // specificity so it will override other selectors in case they also use
  // !important.
  const selector =
    ":not(#👋-hide-mouse-pointer-browser-extension)" +
    ":not(#🪵🦫)" +
    ":not(#🧀🐁)" +
    ":not(#🪸🐠)" +
    ":not(#🕸️🕷️)" +
    ":not(#🥚🐓)" +
    ":not(#🌼🐝)" +
    ":not(#🍸🦐)" +
    ":not(#🪺🦜)" +
    ":not(#🩸🦇)" +
    ":not(#💦🐬)" +
    ":not(#🪱🦔)" +
    ":not(#🔪🦀)" +
    ":not(#⚽️🦭)" +
    ":not(#🍌🐒)" +
    ":not(#🍃🦥)";
  styleEl.textContent = `${selector} {cursor: none !important}`;

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

  // "wheel" event is required to hide the mouse when scrolling up on a page
  // that is already at the top, because no scroll event is fired in that case.
  // const hideEvents = ["scroll"];
  const hideEvents = ["scroll", "wheel"];

  const showEvents =
    "PointerEvent" in window
      ? ["pointerdown", "pointermove"]
      : ["mousedown", "mousemove", "touchstart", "touchmove"];

  const options = { capture: true, passive: true };

  for (const event of hideEvents) {
    document.addEventListener(event, hideHandler, options);
  }

  for (const event of showEvents) {
    document.addEventListener(event, showHandler, options);
  }
})();
