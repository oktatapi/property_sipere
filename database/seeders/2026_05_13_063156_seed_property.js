import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Property) {
    await db.Property.bulkCreate([
      { id: 1, address: "Szeged, Nyár utca 8.", price: 185000, area_sqm: 150, property_type: "ház", is_available: true }, 
      { id: 2, address: "Szeged, Fal utca 15.", price: 122000, area_sqm: 85, property_type: "ház", is_available: true },
    ]);
  }else {
    await QueryInterface.bulkInsert('properties', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('properties');
}

export { up, down }
