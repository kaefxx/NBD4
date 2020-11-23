printjson(
    db.people.aggregate(
        [
            {$group: 
                { _id : "$nationality",
                "Avg BMI":{
                    $avg: { 
                        $divide: [
                            {"$toDouble": "$weight"},
                            {$pow: [
                                {"$divide" : [
                                    {"$toDouble": "$height"}
                                    , 100]}
                                , 2
                                ]
                            }]
                        }
                    },
                    "Max BMI":{
                        $max: { 
                            $divide: [
                                {"$toDouble": "$weight"},
                                {$pow: [
                                    {"$divide" : [
                                        {"$toDouble": "$height"}
                                        , 100]}
                                    , 2
                                    ]
                                }]
                            }
                        },
                        "Min BMI":{
                            $min: { 
                                $divide: [
                                    {"$toDouble": "$weight"},
                                    {$pow: [
                                        {"$divide" : [
                                            {"$toDouble": "$height"}
                                            , 100]}
                                        , 2
                                        ]
                                    }]
                                }
                            }
                        }
                }
        ] ).toArray())