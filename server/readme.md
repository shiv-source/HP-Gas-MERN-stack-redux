## Commands:

For development 

npm run dev


For production

npm start


# API Doccumentation

1. signup  [ POST]

    http://127.0.0.1:3000/api/signup [POST]
    

    request data : 

                    {
                        "firstName" : "shiv",
                        "lastName" : "kumar",
                        "email" : "developer.shiv2020@gmail.com",
                        "password" : "admin12345"
                    }





    response data : 
                        {
                            "message": "User created successfully",
                            "success": true,
                            "result": {
                                "_id": "5f77f49d227a771114d5880d",
                                "firstName": "shiv",
                                "lastName": "kumar",
                                "email": "developer.shiv2020@gmail.com"
                            }
                        }





    error response : 

                            {
                                "message": "User already exists",
                                "success": false
                            }


2. login [POST]


    http://127.0.0.1:3000/api/login  [POST]




            request data : 


                            {
                                "email" : "developer.shiv2020@gmail.com",
                                "password" : "admin12345"
                            }


            response data : 

                            {
                                "message": "You are loggedin successfully",
                                "success": true,
                                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc3ZjQ5ZDIyN2E3NzExMTRkNTg4MGQiLCJmaXJzdE5hbWUiOiJzaGl2IiwibGFzdE5hbWUiOiJrdW1hciIsImVtYWlsIjoiZGV2ZWxvcGVyLnNoaXYyMDIwQGdtYWlsLmNvbSIsImlhdCI6MTYwMTY5NzA2MCwiZXhwIjoxNjAyMzAxODYwfQ.ryJRP1hl-KwSnVNgOt6Zn04wHbJhogLWyMQlHg9mqzw"
                            }

            

            
                error data :

                                    {
                                        "email" : "developer.shiv2020@gmail.com",
                                        "password" : "admin1234567666"
                                    }


3. get all costomeer data 


        http://127.0.0.1:3000/api/get-all-costomer [GET]




        response data :


                    {
                        "message": "Costomer data fetched successfully",
                        "success": true,
                        "result": [
                            {
                                "_id": "5f782b2bc16f353e846805f1",
                                "owner": "5f77ff74bc5d2933889096ca",
                                "fullName": "Shiv",
                                "mobileNumber": "Kumar",
                                "address": "Bhagalpur",
                                "item": [
                                    {
                                        "_id": "5f782b2bc16f353e846805f2",
                                        "date": "2020-10-03T07:31:16.164Z",
                                        "description": "sdgfdgdsgf",
                                        "unitPrice": 2000,
                                        "quantity": 5,
                                        "taxPercent": 12
                                    },
                                    {
                                        "_id": "5f782b2bc16f353e846805f3",
                                        "date": "2020-10-03T07:31:16.164Z",
                                        "description": "sdgfdgdsgf",
                                        "unitPrice": 2000,
                                        "quantity": 5,
                                        "taxPercent": 12
                                    }
                                ],
                                "createdAt": "2020-10-03T07:41:31.989Z",
                                "updatedAt": "2020-10-03T07:41:31.989Z",
                                "__v": 0
                            },
                            {
                                "_id": "5f782c1b0d98533c54061801",
                                "owner": "5f77ff74bc5d2933889096ca",
                                "fullName": "Shiv",
                                "mobileNumber": "Kumar",
                                "address": "Bhagalpur",
                                "item": [
                                    {
                                        "_id": "5f782c1b0d98533c54061802",
                                        "date": "2020-10-03T07:31:16.164Z",
                                        "description": "sdgfdgdsgf",
                                        "unitPrice": 2000,
                                        "quantity": 5,
                                        "taxPercent": 12
                                    },
                                    {
                                        "_id": "5f782c1b0d98533c54061803",
                                        "date": "2020-10-03T07:31:16.164Z",
                                        "description": "sdgfdgdsgf",
                                        "unitPrice": 2000,
                                        "quantity": 5,
                                        "taxPercent": 12
                                    }
                                ],
                                "createdAt": "2020-10-03T07:45:31.726Z",
                                "updatedAt": "2020-10-03T07:45:31.726Z",
                                "__v": 0
                            }
                        ]
                    }




4. http://127.0.0.1:3000/api/add-costomer [POST]



    success response : 



                        {
                        
                            "fullName": "Shiv",
                            "mobileNumber": "Kumar",
                            "address": "Bhagalpur" ,
                            "item": [
                            {
                                "date": "2020-10-03T07:31:16.164Z",
                                "description" : "sdgfdgdsgf" ,
                                "unitPrice": "2000",
                                "quantity": "5" ,
                                "taxPercent": "12" 
                            },
                            {
                                "date": "2020-10-03T07:31:16.164Z",
                                "description" : "sdgfdgdsgf" ,
                                "unitPrice": "2000",
                                "quantity": "5" ,
                                "taxPercent": "12" 
                            }
                            ]
                        }