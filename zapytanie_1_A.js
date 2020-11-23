printjson(db.people.aggregate([{$group: { _id : "$sex", "Avarage height":{$avg: {"$toDouble": "$height"}}, "Avarage weight": {$avg: {"$toDouble": "$weight"} } }}] ).toArray())
