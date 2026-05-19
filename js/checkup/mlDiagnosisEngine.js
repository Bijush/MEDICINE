// ==============================
// ML DIAGNOSIS ENGINE
// ==============================

let model = null;

// ==============================
// DISEASE LABELS
// ==============================

const diseases = [

  "Flu",
  "COVID-19"

];

// ==============================
// LOAD MODEL
// ==============================

async function loadModel() {

  try {

    // ==========================
    // START
    // ==========================

    console.log(
      "Loading AI ML Model..."
    );

    // ==========================
    // TEST FETCH
    // ==========================

    const response =

      await fetch(
        "./js/checkup/model.json"
      );

    console.log(
      "Model JSON Status:",
      response.status
    );

    // ==========================
    // CHECK RESPONSE
    // ==========================

    if (!response.ok) {

      throw new Error(
        "Model JSON Not Found"
      );
    }

    // ==========================
    // LOAD GRAPH MODEL
    // ==========================

    model =

      await tf.loadGraphModel(
        "./js/checkup/model.json"
      );

    // ==========================
    // SUCCESS
    // ==========================

    console.log(
      "ML Model Loaded"
    );

    alert(
      "AI ML Model Loaded Successfully"
    );

  } catch (err) {

    // ==========================
    // ERROR
    // ==========================

    console.error(
      "FULL MODEL ERROR:",
      err
    );

    alert(

      "ML Model Load Failed\n\n" +

      (err.message || err)

    );
  }
}

// ==============================
// INIT MODEL
// ==============================

loadModel();

// ==============================
// PREDICT ML
// ==============================

export async function
predictML(vector = []) {

  try {

    // ==========================
    // MODEL NOT READY
    // ==========================

    if (!model) {

      console.warn(
        "ML Model Not Ready"
      );

      return [];
    }

    // ==========================
    // INPUT TENSOR
    // ==========================

    const inputTensor =

      tf.tensor2d([
        vector
      ]);

    // ==========================
    // PREDICTION
    // ==========================

    const prediction =

      model.execute(
        inputTensor
      );

    // ==========================
    // VALUES
    // ==========================

    const values =

      await prediction.data();

    console.log(
      "Raw ML Values:",
      values
    );

    // ==========================
    // FORMAT RESULTS
    // ==========================

    const results =

      diseases.map(

        (disease, index) => ({

          disease,

          probability:

            Number(
              values[index] || 0
            )
        })
      );

    // ==========================
    // SORT
    // ==========================

    results.sort(

      (a, b) =>

        b.probability -
        a.probability
    );

    // ==========================
    // CLEANUP
    // ==========================

    inputTensor.dispose();

    prediction.dispose();

    // ==========================
    // RESULT
    // ==========================

    return results;

  } catch (err) {

    console.error(
      "Prediction Error:",
      err
    );

    alert(

      "Prediction Error\n\n" +

      (err.message || err)

    );

    return [];
  }
}