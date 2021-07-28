export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '610126dc679769ac6e0120f8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-igprtr79',
                  apiId: 'd5b5600c-6433-46ba-a3e4-04bc8a5d87f3'
                },
                {
                  buildHookId: '610126dc7ccf7ead8bec470c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2r4ocbc5',
                  apiId: 'ede42c29-27a2-42a4-9941-dbda1a9ef69a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/avalner/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2r4ocbc5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
