export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
          name: 'body',
          type: 'richText',
          title: 'Body text'
      }
    ]
  }