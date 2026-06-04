// ==============================
// COMPOSITION TABS
// ==============================

let tabsInitialized = false;

const TAB_KEY =
  "lastCompositionTab";


// ==============================
// INIT TABS
// ==============================

export function initCompositionTabs() {

  // Prevent duplicate binding
  if (tabsInitialized) {

    requestAnimationFrame(() => {

      restoreSavedTab();

    });

    return;

  }

  tabsInitialized = true;

  // ==========================
  // RESTORE SAVED TAB
  // ==========================

  requestAnimationFrame(() => {

    restoreSavedTab();

  });

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

      // Save current tab
      sessionStorage.setItem(

        TAB_KEY,

        target

      );

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


// ==============================
// RESTORE SAVED TAB
// ==============================

function restoreSavedTab() {

  const lastTab =

    sessionStorage.getItem(
      TAB_KEY
    );

  if (!lastTab) {
    return;
  }

  const savedTab =

    document.querySelector(

      `[data-tab="${lastTab}"]`

    );

  const savedContent =

    document.querySelector(

      `[data-content="${lastTab}"]`

    );

  if (

    !savedTab ||

    !savedContent

  ) {

    return;

  }

  document

    .querySelectorAll(
      ".composition-tab"
    )

    .forEach(tab =>

      tab.classList.remove(
        "active"
      )

    );

  document

    .querySelectorAll(
      ".composition-tab-content"
    )

    .forEach(content =>

      content.classList.remove(
        "active"
      )

    );

  savedTab.classList.add(
    "active"
  );

  savedContent.classList.add(
    "active"
  );

}