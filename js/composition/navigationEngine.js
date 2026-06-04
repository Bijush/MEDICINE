// ==============================
// NAVIGATION ENGINE
// ==============================

export function savePosition(){

  sessionStorage.setItem(

    "lastScrollPosition",

    window.scrollY

  );

}

export function restorePosition(){

  const position =

    Number(

      sessionStorage.getItem(
        "lastScrollPosition"
      )

    ) || 0;

  requestAnimationFrame(() => {

    window.scrollTo({

      top: position,

      left: 0

    });

  });

}

export function saveTab(
  tabId = ""
){

  sessionStorage.setItem(
    "lastTab",
    tabId
  );

}

export function getLastTab(){

  return (
    sessionStorage.getItem(
      "lastTab"
    ) ||

    "overview"
  );

}