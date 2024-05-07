export default class SellSoulEquipment extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.rules = new fields.StringField({ required: true, initial: "This equipment may grant bonuses or profiles." });
    schema.description = new fields.StringField({ required: true, initial: "An assortment of characteristics that detail this equipment." });
    schema.required = new fields.StringField({ required: true, initial: "INFANTRY" });

    return schema;
  }

  prepareDerivedData() {
  }
}