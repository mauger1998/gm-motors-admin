export default {
  name: 'featuredCar',
  type: 'document',
  title: 'Featured Car',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'finance',
      type: 'string',
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
  ],
}
