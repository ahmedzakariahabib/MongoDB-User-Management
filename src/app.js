const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const urlConnection = "mongodb://127.0.0.1:27017";

const dbname = "Task-3";
mongoClient.connect(urlConnection, (error, res) => {
  if (error) {
    return console.log("Three error in connection");
  }
  console.log("all thing are good");
  const db = res.db(dbname);

  db.collection("users").insertOne(
    { name: "ahmed", age: 22 },
    (error, data) => {
      if (error) {
        console.log("add again there problem");
      }
      console.log(data.insertedId);
    }
  );

  db.collection("users").insertOne(
    { name: "zakaria", age: 24 },
    (error, data) => {
      if (error) {
        console.log("add again there problem");
      }
      console.log(data.insertedId);
    }
  );
  db.collection("users").insertMany(
    [
      { name: "ali", age: 12 },
      { name: "mohamed", age: 18 },
      { name: "mahmoud", age: 21 },
      { name: "hany", age: 30 },
      { name: "walaa", age: 29 },
      { name: "adham", age: 27 },
      { name: "elkady", age: 27 },
      { name: "samer", age: 27 },
      { name: "salah", age: 27 },
      { name: "reda", age: 27 },
    ],
    (error, data) => {
      if (error) {
        console.log("Please add again");
      }
      console.log(data.insertedCount);
    }
  );

  db.collection("users")
    .find({ age: 27 })
    .toArray((error, data) => {
      if (error) {
        console.log("i have not found data");
      }
      console.log(data);
    });

  db.collection("users")
    .find({ age: 27 })
    .limit(3)
    .toArray((error, data) => {
      if (error) {
        console.log("i have not found data");
      }
      console.log(data);
    });

  db.collection("users")
    .updateOne(
      {
        _id: mongodb.ObjectId("675caccca1c318fecb14c30c"),
      },
      {
        $set: { name: "ahmed1" },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .updateOne(
      {
        _id: mongodb.ObjectId("675caccca1c318fecb14c30d"),
      },
      {
        $set: { name: "ahmed2" },
      }
    )

    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });
  db.collection("users")
    .updateOne(
      {
        _id: mongodb.ObjectId("675caccca1c318fecb14c30e"),
      },
      {
        $set: { name: "ahmed3" },
      }
    )

    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });
  db.collection("users")
    .updateOne(
      {
        _id: mongodb.ObjectId("675caccca1c318fecb14c30f"),
      },
      {
        $set: { name: "ahmed4" },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .updateOne(
      {
        _id: mongodb.ObjectId("675cb05544715875ab465014"),
      },
      {
        $inc: { age: 4 },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .updateOne(
      {
        _id: mongodb.ObjectId("675cb05544715875ab465015"),
      },
      {
        $inc: { age: 4 },
      }
    )

    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });
  db.collection("users")
    .updateOne(
      {
        _id: mongodb.ObjectId("675cb05544715875ab465016"),
      },
      {
        $inc: { age: 4 },
      }
    )

    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });
  db.collection("users")
    .updateOne(
      {
        _id: mongodb.ObjectId("675cb05544715875ab465017"),
      },
      {
        $inc: { age: 4 },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .updateMany(
      {},
      {
        $inc: { age: 10 },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("users")
    .deleteMany({ age: 41 })
    .then((data1) => {
      console.log(data1.deletedCount);
    })
    .catch((error) => {
      console.log(error);
    });
});
