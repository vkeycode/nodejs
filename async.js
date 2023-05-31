function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("Veriler Alınıyor..");

    if (data) {
      resolve("Veriler Alındı");
    } else {
      reject("Veriler Alınamadı");
    }
  });
}

function cleanData(recievedData) {
  return new Promise((resolve, reject) => {
    console.log("Veriler Düzenleniyor..");
    if (recievedData) {
      resolve("Veriler Düzenlendi");
    } else {
      reject("Veriler Düzenlenemedi");
    }
  });
}

// getData(true)
//   .then((result) => {
//     console.log(result);
//     return cleanData(false);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function processData() {
  try {
    const recievedData = await getData(false);
    console.log(recievedData);
    const cleanedData = await cleanData(true);
    console.log(cleanedData);
  } catch (err) {
    console.log(err);
  }
}

processData();
