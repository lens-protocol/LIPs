export enum MetadataAttributeType {
  Boolean = "Boolean",
  Date = "Date",
  Number = "Number",
  String = "String",
  JSON = "JSON",
}

export type MetadataAttribute = {
  /**
   * The type of the attribute
   */
  type: MetadataAttributeType;

  /**
   * The unique identifier
   */
  key: String;

  /**
   * The attribute serialized value
   *
   * It's consumer responsibility to deserialize it based on the `type` field
   */
  value: String;
};
