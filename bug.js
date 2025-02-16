```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocs",
    },
  },
  {
    $unwind: "$relatedDocs",
  },
  {
    $group: {
      _id: "$_id",
      relatedData: {
        $push: "$relatedDocs.someField",
      },
    },
  },
];

const result = await collectionA.aggregate(pipeline).toArray();
```