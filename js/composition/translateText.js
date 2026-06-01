// ==============================
// TRANSLATE TEXT
// ==============================

export async function translateText(

  text = "",

  target = "bn"

){

  try{

    const response =

      await fetch(

        "https://translate.googleapis.com/translate_a/single"

        +

        "?client=gtx"

        +

        "&sl=auto"

        +

        "&tl=" + target

        +

        "&dt=t"

        +

        "&q="

        +

        encodeURIComponent(text)

      );


    const data =

      await response.json();


    return data?.[0]

      ?.map(x => x?.[0])

      ?.join(" ")

      ||

      text;

  }

  catch(err){

    console.error(

      "Translate Error:",
      err

    );

    return text;

  }

}