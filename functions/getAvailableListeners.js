require("dotenv").config();

const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.AIRTABE_API_KEY,
});

//reference base
const base = require("airtable").base(process.env.AIRTABLE_BASE);

//reference table
const table = base.table(process.env.AIRTABLE_TABLE);

exports.handler = async (event, context, callback) => {
  try {
    const records = await table
      .select({
        //filterByFormula: (`Status = 'Available'`),
        filterByFormula: "AND({Status} = 'Available', {Role} = 'Listener')",
      })
      .firstPage();

    const formattedRecords = records.map((record) => ({
      id: record.id,
      fields: record.fields,
    }));

    //const formattedRecords = records;

    return {
      statusCode: 200,
      body: JSON.stringify(formattedRecords),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: "Failed to Query records" }),
    };
  }
};
