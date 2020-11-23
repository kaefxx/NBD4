printjson(
    db.people.aggregate(
        [
            { 
                $match :
                { 
                    nationality : "Poland",
                    sex: "Female"
                } 
            },
            {
                $unwind: "$credit"
            },
            {   $group: 
                {   _id :
                    "$credit.currency",
                    "Suma srodkow":
                    {
                        $sum: {"$toDouble": "$credit.balance"}
                    },
                    "Srednia srodkow":
                    {
                        $avg: {"$toDouble": "$credit.balance"}
                    }
                }
            }
                
        ]
    ).toArray()
)