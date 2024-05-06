export default class SellSoulUnitBase extends foundry.abstract.TypeDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.power = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 10, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 10 })
    });
    schema.sd = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 4, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 4 })
    });
    schema.description = new fields.StringField({ required: true, blank: true }); // equivalent to passing ({initial: ""}) for StringFields

    return schema;
  }
}