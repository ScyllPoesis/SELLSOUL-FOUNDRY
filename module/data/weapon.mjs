export default class SellSoulWeaponProfile extends foundry.abstract.TypeDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    // Whether this profile should be treated as a CORE WEAPON.
    schema.core = new fields.BooleanField({
      required: true,
      initial: true,
      label: "Is Core Weapon Label",
      hint: "Is Core Weapon Hint"
    })

    // DAM slider with effective DAM field.
    schema.dam = new fields.SchemaField({
      eff: new fields.NumberField({ ...requiredInteger, initial: 1 }),
      slider: new fields.ObjectField({ initial: { 1: 1, 2: 2 } })
    });

    // Attribute fields.
    schema.ap = new fields.NumberField({ ...requiredInteger, initial: 0 });
    schema.sal = new fields.NumberField({ ...requiredInteger, initial: 0 });
    schema.ran = new fields.NumberField({ ...requiredInteger, initial: 1 });

    return schema;
  }
}