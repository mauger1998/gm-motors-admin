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
      name: 'year',
      type: 'number',
      title: 'Year',
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
  ],
}
