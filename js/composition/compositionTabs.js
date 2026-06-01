// ==============================
// COMPOSITION TABS
// ==============================


let tabsInitialized = false;


// ==============================
// INIT TABS
// ==============================

export function initCompositionTabs() {

  // Prevent duplicate binding
  if (tabsInitialized) {
    return;
  }


  tabsInitialized = true;


  document.addEventListener(

    "click",

    event => {

      const tab =

        event.target.closest(
          ".composition-tab"
        );


      if (!tab) {
        return;
      }


      const target =

        tab.dataset.tab;


      // Tabs
      const tabs =

        document.querySelectorAll(
          ".composition-tab"
        );


      // Contents
      const contents =

        document.querySelectorAll(
          ".composition-tab-content"
        );


      // Remove active
      tabs.forEach(item =>

        item.classList.remove(
          "active"
        )

      );


      contents.forEach(item =>

        item.classList.remove(
          "active"
        )

      );


      // Active tab
      tab.classList.add(
        "active"
      );


      // Active content
      document

        .querySelector(

          `[data-content="${target}"]`

        )

        ?.classList.add(
          "active"
        );

    }

  );

}