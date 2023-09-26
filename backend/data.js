const moment = require('moment');
const axios = require('axios');


const clientsData = [{"name":"John Doe","age":35,"address":"123 Main Street","birthdate":"1988-05-14T16:00:00.000Z","company":"ABC Corporation"},{"name":"Jane Smith","age":28,"address":"456 Elm Street","birthdate":"1995-12-09T16:00:00.000Z","company":"XYZ Inc."},{"name":"Robert Johnson","age":42,"address":"789 Oak Avenue","birthdate":"1979-09-19T16:30:00.000Z","company":"Acme Industries"},{"name":"Susan Anderson","age":29,"address":"567 Pine Road","birthdate":"1994-03-01T16:00:00.000Z","company":"Global Tech"},{"name":"David Wilson","age":55,"address":"1010 Maple Lane","birthdate":"1968-07-13T16:30:00.000Z","company":"Data Systems Inc."},{"name":"Maria Rodriguez","age":30,"address":"321 Oak Street","birthdate":"1993-02-27T16:00:00.000Z","company":"Tech Solutions Ltd."},{"name":"William Turner","age":38,"address":"567 Willow Avenue","birthdate":"1985-11-16T16:00:00.000Z","company":"Innovate Labs"},{"name":"Jessica Martin","age":25,"address":"789 Cedar Lane","birthdate":"1998-08-02T16:00:00.000Z","company":"Global Widgets Inc."},{"name":"Richard Baker","age":47,"address":"234 Birch Road","birthdate":"1976-04-21T16:30:00.000Z","company":"DataTech Corporation"},{"name":"Samantha White","age":33,"address":"876 Elm Street","birthdate":"1990-09-11T16:00:00.000Z","company":"Info Systems Ltd."}]



const staffData = [
    {
      "name": "Johnny Appleseed",
      "address": "23 Main St, New York, NY 10001"
    },
    {
      "name": "Alice Johnson",
      "address": "45 Elm St, Los Angeles, CA 90001"
    },
    {
      "name": "Bob Smith",
      "address": "67 Oak St, Chicago, IL 60001",
      "status" : "Completed"
    },
    {
      "name": "Ella Davis",
      "address": "89 Maple St, San Francisco, CA 94101"
    },
    {
      "name": "David Wilson",
      "address": "12 Pine St, Boston, MA 02101",
      "status" : "Completed"
    },
    {
      "name": "Olivia Garcia",
      "address": "34 Cedar St, Miami, FL 33101"
    },
    {
      "name": "James Brown",
      "address": "56 Birch St, Houston, TX 77001"
    },
    {
      "name": "Sophia Martinez",
      "address": "78 Spruce St, Seattle, WA 98101"
    },
    {
      "name": "Liam Rodriguez",
      "address": "90 Willow St, Denver, CO 80201"
    },
    {
      "name": "Emma Lopez",
      "address": "43 Sycamore St, Philadelphia, PA 19101"
    }
  ];



const casesData = [
    {
        "message": "I have issue with the connectivity",
        "ClientId": 1
    },
    {
        "message": "My account is locked, can't log in",
        "ClientId": 2
    },
    {
        "message": "I can't access my emails",
        "ClientId": 3
    },
    {
        "message": "The website is loading very slowly",
        "ClientId": 4
    },
    {
        "message": "I'm getting error code 404 on the page",
        "ClientId": 1
    },
    {
        "message": "I need assistance with setting up my profile",
        "ClientId": 2
    },
    {
        "message": "There's a billing discrepancy in my account",
        "ClientId": 3
    },
    {
        "message": "I can't make calls from my phone",
        "ClientId": 4
    },
    {
        "message": "I received a damaged product",
        "ClientId": 2
    },
    {
        "message": "The mobile app crashes when I open it",
        "ClientId": 4
    },
    {
        "message": "The mobile app crashes when I open it",
        "ClientId": 2,
        "status" : "Completed"
    }
];


axios.post('http://localhost:8800/clients/multiple', clientsData)
.then((res) => {
    console.log(res.data);
})
.catch((err) => {
    console.log(err);
});

axios.post('http://localhost:8800/staffs/multiple', staffData)
.then((res) => {
    console.log(res.data);
}
)
.catch((err) => {
    console.log(err);
}
);

axios.post('http://localhost:8800/cases/multiple', casesData)
.then((res) => {
    console.log(res.data);
})
.catch((err) => {
    console.log(err);
});
