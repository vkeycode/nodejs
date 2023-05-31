const fs = require("fs");
// dosya okumak
fs.readFile("fsmodule/password.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// yeni dosya oluşturmak
fs.writeFile("fsmodule/email.txt", "vdt@gmail.com", "utf8", (err) => {
  if (err) throw err;
  console.log("dosya başarılı bi şekilde eklendi");
});

// hazır olan dosyaya veri eklemek veya yeni dosya ekleyip içine veri girmek
fs.appendFile("fsmodule/email.txt", "\neroglu@gmail.com", "utf8", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("eklendi");
});

// dosya silmek

// fs.unlink("fsmodule/password.txt", (err) => {
//   if (err) throw err;
//   console.log("dosya silindi");
// });

// klasörler oluşturmak

fs.mkdir("uploads/img", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("klasörler oluşturuldu");
});
