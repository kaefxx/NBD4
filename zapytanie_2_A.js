printjson(
    db.people.aggregate(
        [
            {
                $unwind: "$credit"
            },
            {$group: 
                { _id : "$credit.currency",
                "Suma srodkow":{
                    $sum: {"$toDouble": "$credit.balance"}
                    }
                }
            }
                
        ]
    ).toArray()
)