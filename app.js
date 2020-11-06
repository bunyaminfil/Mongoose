var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Mongo", { useMongoClient: true });

var db = mongoose.connection;

var User = require("./user");

db.once("open", function () {
  console.log("Veritabanına bağlantı saglandi!!!");

  /*
    
        var user_1 = new User(
            {
                _id: 5fa5244ba97c09244d70c2a2,
                ad: 'Benjamin',
                soyad: 'Bar',
                dogumTarihi: "17/12/1987",
                email: 'bunyaminfl@gmail.com'
            }
        );
    
        user_1.save(function(error){
            if(error) throw error;
            console.log("kullanici kaydedildi!!");
        })
    */

  User.find({}, function (error, docs) {
    console.log(docs);
  });

  /*

    User.remove({ _id : "59f383e9e678a9067c969b53"}, function(error){

        if(error){
            throw error;
        } else {
            console.log("Kayıt silindi");

            User.find({}, function (error, docs) {
                console.log(docs);
            })
        }

    })

    */
  /*
  User.update(
    { _id: "5fa5244ba97c09244d70c2a2" },
    {
      ad: "Benjamin
      soyad: "Bar",
      dogumTarihi: "17/12/2000",
      email: "bunyaminfl@gmail.com",
    },
    function (error) {
      if (error) {
        throw error;
      } else {
        console.log("Düzenleme işlemi başarılır..");

        User.find({}, function (error, docs) {
          console.log(docs);
        });
      }
    }
  );
  */
});
