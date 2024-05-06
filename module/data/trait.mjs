export default class SellSoulFeature extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        const schema = {};

        schema.rules = new fields.StringField({ required: true, blank: true });
        schema.description = new fields.StringField({ required: true, blank: true });

        return schema;
    }
}