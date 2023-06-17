export default {
  name: 'car',
  type: 'document',
  title: 'Car',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
    {
      name: 'finance',
      type: 'boolean',
      title: 'Finance Available?',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'extraInfo',
      type: 'text',
      title: 'Extra Information',
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
    },
  ],
}
