export default {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'welcomeMessage',
      type: 'string',
      title: 'WelcomeMessage',
    },
    {
      name: 'imageUrl',
      type: 'array',
      title: 'ImageURL',
      of: [{type: 'image'}],
    },
  ],
}
