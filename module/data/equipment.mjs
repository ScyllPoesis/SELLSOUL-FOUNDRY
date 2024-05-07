export default class SellSoulEquipment extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.rules = new fields.StringField({ required: true, initial: "This unit is granted some boon or bane." });
    schema.type = new fields.StringField({ required: true, initial: "unit" });
    schema.description = new fields.StringField({ required: true, initial: "An assortment of characteristics describes this trait." });

    schema.required

    return schema;
  }

  prepareDerivedData() {
  }
}