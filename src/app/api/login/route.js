export async function GET(req, res) {
// Make a note we are on
// the api. This goes to the console.
console.log("in the register api page")
// get the values
// that were sent across to us.
const { searchParams } = new URL(req.url)
const email = searchParams.get('email')
const pass = searchParams.get('pass')
const name = searchParams.get('name')
const Address = searchParams.get('Address')
const mobile = searchParams.get('mobile')
const tel = searchParams.get('tel')
console.log(email);
console.log(pass);
console.log(name);
console.log(Address);
console.log(tel);
console.log(mobile);
// =================================================
const { MongoClient } = require('mongodb');
const url = 'mongodb://root:example@localhost:27017/';
const client = new MongoClient(url);
const dbName = 'app'; // database name
await client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const collection = db.collection('login'); // collection name
const findResult = await collection.find({"username":email}).toArray();
console.log('Found documents =>', findResult);
let valid = false
if(findResult.length >0 ){
valid = true;
console.log("login valid")
} else {
valid = false;
console.log("login invalid")
}

return Response.json({ "data":"" + valid + ""})
}

    
//database call goes herecconsole.log(email);onst pass = searchParams.get('pass')
// at the end of the process we need to send something back.
//return Response.json({ "data":"ok" })
//}
//This is a back-end page we can use to talk to the database.
//The URL for the front end would be http://localhost:3000/register
//And the API backend page would be http://localhost:300/api/register